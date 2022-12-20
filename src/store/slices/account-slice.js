import { ethers, constants } from "ethers";
import { getAddresses } from "../../constants/addresses";
import { BUSDTokenContract, PresaleTokenContract } from "../../abi";
import { setAll } from "../../helpers/set-all";

import { createSlice, createSelector, createAsyncThunk } from "@reduxjs/toolkit";


export const changeApproval = createAsyncThunk("account/changeApproval", async ({ address, token, chainId, provider }, { dispatch}) => {
  if (!address || chainId !== 97) {    
    console.log("Invalid");  
    return;
  }
  const addresses = getAddresses();

  const signer = provider.getSigner();
  const BUSDContract = new ethers.Contract(addresses.BUSD, BUSDTokenContract, provider);
  const USDCContract = new ethers.Contract(addresses.USDC, BUSDTokenContract, provider);
  const USDTContract = new ethers.Contract(addresses.USDT, BUSDTokenContract, provider);
  const DAIContract = new ethers.Contract(addresses.DAI, BUSDTokenContract, provider);

  let approveTx;
  try {
    if (token === "BUSD") {
      approveTx = await BUSDContract.connect(signer).approve(addresses.DUEPRESALE, constants.MaxUint256);
      console.log("Approve BUSD CALL")
    }

    if (token === "USDC") {
      approveTx = await USDCContract.connect(signer).approve(addresses.DUEPRESALE,constants.MaxUint256);
    }

    if (token === "USDT") {
      approveTx = await USDTContract.connect(signer).approve(addresses.DUEPRESALE, constants.MaxUint256);
    }

    if (token === "DAI") {
      approveTx = await DAIContract.connect(signer).approve(addresses.DUEPRESALE, constants.MaxUint256);
    }  
    await approveTx.wait();    
    dispatch(calculateUserTokenDetails({ address: address, chainId: chainId, provider: provider }));
  } catch(err) {

  } finally {

  }
  return;  
});

export const calculateUserTokenDetails = createAsyncThunk("account/calculateUserTokenDetails", async ({ address, chainId, provider }) => {
  let BUSDBalance = 0;
  let BUSDAllowance = 0;
  let USDCBalance = 0;
  let USDCAllowance = 0;
  let USDTBalance = 0; 
  let USDTAllowance = 0;
  let DAIBalance = 0;
  let DAIAllowance = 0;  
  const addresses = getAddresses();  

  if (!address || chainId !== 97) {
    return new Promise(resevle => {
      resevle({
        BUSDBalance,
        BUSDAllowance,
        USDCBalance,
        USDCAllowance,
        USDTBalance,
        USDTAllowance,
        DAIBalance,
        DAIAllowance,
      });
    });
  }

  if (addresses.BUSD) {
    const BUSDContract = new ethers.Contract(addresses.BUSD, BUSDTokenContract, provider);
    BUSDBalance = await BUSDContract.balanceOf(address);

    BUSDAllowance = await BUSDContract.allowance(address, addresses.DUEPRESALE);
  }
  
  if (addresses.USDC) {
    const USDCContract = new ethers.Contract(addresses.USDC, BUSDTokenContract, provider);
    USDCBalance = await USDCContract.balanceOf(address);

    USDCAllowance = await USDCContract.allowance(address, addresses.DUEPRESALE);
  }

  if (addresses.USDT) {
    const USDTContract = new ethers.Contract(addresses.USDT, BUSDTokenContract, provider);
    USDTBalance = await USDTContract.balanceOf(address);

    USDTAllowance = await USDTContract.allowance(address, addresses.DUEPRESALE);
  }

  if (addresses.DAI) {
    const DAIContract = new ethers.Contract(addresses.DAI, BUSDTokenContract, provider);
    DAIBalance = await DAIContract.balanceOf(address);

    DAIAllowance = await DAIContract.allowance(address, addresses.DUEPRESALE);
  } 

  return {
    BUSDBalance: Number(Number(BUSDBalance) / Math.pow(10, 18)),
    BUSDAllowance: Number(Number(BUSDAllowance) / Math.pow(10, 18)),
    USDCBalance: Number(Number(USDCBalance) / Math.pow(10, 18)),
    USDCAllowance: Number(Number(USDCAllowance) / Math.pow(10, 18)),
    USDTBalance: Number(Number(USDTBalance) / Math.pow(10, 18)),
    USDTAllowance: Number(Number(USDTAllowance) / Math.pow(10, 18)),
    DAIBalance: Number(Number(DAIBalance) / Math.pow(10, 18)),
    DAIAllowance: Number(Number(DAIAllowance) / Math.pow(10, 18)),  
  };
});

export const changeDeposit = createAsyncThunk("account/changeDeposit", async ({address, token, amount, chainId, provider }, { dispatch}) => {
  if (!address || chainId !== 97) {    
    console.log("Invalid");  
    return;
  }  
  const addresses = getAddresses();

  const signer = provider.getSigner();
  const DUEPRESALEContract = new ethers.Contract(addresses.DUEPRESALE, PresaleTokenContract, provider);  

  let approveTx;
  try {    
    approveTx = await DUEPRESALEContract.connect(signer).depositBUSD(ethers.utils.parseUnits(amount, "ether"), token);    
    await approveTx.wait();    
    dispatch(calculateUserDepositDetails({ address: address, chainId: chainId, provider: provider }));
    dispatch(calculateUserTokenDetails({ address: address, chainId: chainId, provider: provider }));
  } catch(err) {

  } finally {

  }
  return;  
});

export const calculateUserDepositDetails = createAsyncThunk("account/calculateUserDepositDetails", async ({ address, chainId, provider }) => {
  let DepositBalance = 0;  
  const addresses = getAddresses();  
  
  if (!address || chainId !== 97) {
    return new Promise(resevle => {
      resevle({
        DepositBalance,        
      });
    });
  }

  const DUEPRESALEContract = new ethers.Contract(addresses.DUEPRESALE, PresaleTokenContract, provider);   
  DepositBalance = await DUEPRESALEContract.getUserDeposits(address); 

  return {
    DepositBalance: Number(Number(DepositBalance) / Math.pow(10, 18)),   
  };
});

const initialState = {
  loading: true,  
};

const accountSlice = createSlice({
  name: "account",
  initialState,
  reducers: {
    fetchAccountSuccess(state, action) {
      setAll(state, action.payload);
    },
  },
  extraReducers: builder => {
    builder 
      .addCase(calculateUserTokenDetails.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(calculateUserTokenDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);
        state.loading = false;        
      })
      .addCase(calculateUserTokenDetails.rejected, (state, { error }) => {
        state.loading = false;
        console.log(error);
      })
      .addCase(calculateUserDepositDetails.pending, (state, action) => {
        
      })
      .addCase(calculateUserDepositDetails.fulfilled, (state, action) => {
        setAll(state, action.payload);              
      })
      .addCase(calculateUserDepositDetails.rejected, (state, { error }) => {        
        console.log(error);
      });     
  },
});

export default accountSlice.reducer;

export const { fetchAccountSuccess } = accountSlice.actions;

const baseInfo = (state) => state.account;

export const getAccountState = createSelector(baseInfo, account => account);
