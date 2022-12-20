import React from "react";
import Web3Modal from "web3modal";
import useWallet from "../../hooks/useWallet";
import WalletConnectProvider from "@walletconnect/web3-provider";
import "../../css/skin/skin-2.css";

const Web3Status = () => {
  const { account, activate, deactivate, activateBrowserWallet } = useWallet();

  const activateProvider = async () => {
    const providerOptions = {
      injected: {
        display: {
          name: "Metamask",
          description: "Connect with the provider in your Browser",
        },
        package: null,
      },
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          bridge: "https://bridge.walletconnect.org",
          infuraId: "d8df2cb7844e4a54ab0a782f608749dd",
        },
      },
    };

    const web3Modal = new Web3Modal({
      providerOptions,
    });
    try {
      const provider = await web3Modal.connect();
      await activate(provider);
      // activateBrowserWallet();
      console.log("Connected: ", account);
    } catch (error) {}
  };

  return (
    <div className="connect-wallet">
      {account ? (
        <div className="wallet-connector-container">
          {/* <div className="m-r10">
            {account.slice(0, 4)}...{account.slice(-4)}
          </div> */}
          <button
            className="site-button gradient button-lg radius-md m-b10 m-t10 shadow"
            onClick={deactivate}
          >
            Disconnect
          </button>
        </div>
      ) : (
        <>
          <button
            className="site-button gradient button-lg radius-md m-b10 m-t10 shadow"
            onClick={activateProvider}
          >
            Connect
          </button>
        </>
      )}
    </div>
  );
};

export default Web3Status;
