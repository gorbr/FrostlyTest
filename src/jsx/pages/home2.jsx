import React, { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { useSelector, useDispatch } from "react-redux";
import {
  calculateUserTokenDetails,
  changeApproval,
  changeDeposit,
  calculateUserDepositDetails,
} from "../../store/slices/account-slice";
import useWallet from "../../hooks/useWallet";
import SideBox from "../element/sidebox";
import Popup from "../element/popup";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Dropdown } from "react-bootstrap";
import { BsChevronDown } from "react-icons/bs";

// import '../../plugins/particles/particles';
// import '../../plugins/particles/particles.app';

// import '../../css/plugins.css';
// import '../../css/style.css';
// import '../../css/templete.css';
import "../../css/skin/skin-2.css";
import Header from "../../components/Header";
import { getAddresses } from "../../constants/addresses";

const addresses = getAddresses();
const Tokens = Object.keys(addresses);
const Index2 = () => {
  const { account, chainId } = useWallet();
  const dispatch = useDispatch();
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const sliderMin = 0;
  const [sliderMax, setSliderMax] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [tokenId, setTokenId] = useState(-1);
  const [slider, setSlider] = useState(0);
  const [tokenValue, setTokenValue] = useState(0);
  const BUSDBalance = useSelector((state) => state.account.BUSDBalance);
  const BUSDAllowance = useSelector((state) => state.account.BUSDAllowance);
  const USDCBalance = useSelector((state) => state.account.USDCBalance);
  const USDCAllowance = useSelector((state) => state.account.USDCAllowance);
  const USDTBalance = useSelector((state) => state.account.USDTBalance);
  const USDTAllowance = useSelector((state) => state.account.USDTAllowance);
  const DAIBalance = useSelector((state) => state.account.DAIBalance);
  const DAIAllowance = useSelector((state) => state.account.DAIAllowance);
  const DepositBalance = useSelector((state) => state.account.DepositBalance);
  const Balance = [BUSDBalance, USDCBalance, USDTBalance, DAIBalance];

  const loadTokenDetails = useCallback(
    (loadProvider) => {
      dispatch(
        calculateUserTokenDetails({
          address: account,
          chainId: chainId,
          provider: loadProvider,
        })
      );
    },
    [account]
  );

  const loadDepositDetails = useCallback(
    (loadProvider) => {
      dispatch(
        calculateUserDepositDetails({
          address: account,
          chainId: chainId,
          provider: loadProvider,
        })
      );
    },
    [account]
  );  

  useEffect(() => {
    window.Frost.init();
    window.Frost.load();
    window.handleSideBarMenu();
    window.pparticlejs();
    Tokens.pop();
  }, []);

  useEffect(() => {
    loadTokenDetails(provider);
    loadDepositDetails(provider);
  }, [account]);

  const onInputChange = (e) => {
    if (!isNaN(e.target.value)) {
      if (e.target.value <= sliderMax) {
        setSlider(e.target.value);
        setTokenValue(e.target.value);
      } else {
        return;
      }
    } else {
      setSlider(0);
      setTokenValue(0);
    }
  };

  const onPressModal = () => {
    setModalVisible(true);
  };

  const dropDownToggle = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const onModalClose = () => {
    setTokenId(-1);
    setSlider(0);
    setTokenValue(0);
    setModalVisible(false);
    setDropdownVisible(false);
  };

  const onApprove = () => {
    if (Tokens[tokenId] === "BUSD") {
      dispatch(
        changeApproval({
          address: account,
          token: Tokens[tokenId],
          chainId: chainId,
          provider: provider,
        })
      );
    }
    if (Tokens[tokenId] === "USDC") {
      dispatch(
        changeApproval({
          address: account,
          token: Tokens[tokenId],
          chainId: chainId,
          provider: provider,
        })
      );
    }
    if (Tokens[tokenId] === "USDT") {
      dispatch(
        changeApproval({
          address: account,
          token: Tokens[tokenId],
          chainId: chainId,
          provider: provider,
        })
      );
    }
    if (Tokens[tokenId] === "DAI") {
      dispatch(
        changeApproval({
          address: account,
          token: Tokens[tokenId],
          chainId: chainId,
          provider: provider,
        })
      );
    }
  };

  const onDeposit = () => {
    dispatch(
      changeDeposit({
        address: account,
        token: addresses[Tokens[tokenId]],
        amount: tokenValue,
        chainId: chainId,
        provider: provider,
      })
    );
  };

  const hasAllowance = useCallback(
    (token) => {
      if (token === "BUSD") return BUSDAllowance > 0;
      if (token === "USDC") return USDCAllowance > 0;
      if (token === "USDT") return USDTAllowance > 0;
      if (token === "DAI") return DAIAllowance > 0;
      return 0;
    },
    [BUSDAllowance, USDCAllowance, USDTAllowance, DAIAllowance]
  );

  const dropDownTokens = (tokens) => { 
    return (
      <div className="dropdown-token-list">
        <div className="title">
          <button className="title-btn" onClick={() => dropDownToggle()}>
            {tokenId == -1 ? "Select Token" : tokens[tokenId]}
          </button>
        </div>
        <div className="arrow-down">
          <button className="arrow-down-btn" onClick={() => dropDownToggle()}>
            <BsChevronDown />
          </button>
        </div>
        {isDropdownVisible && (
          <div className="menu">
            {tokens.map((token, index) => (
              <div key={index.toString()} className="item">
                <button
                  className="item-btn"
                  onClick={() => {
                    setDropdownVisible(false);
                    setTokenId(index);
                    setSliderMax(Balance[index]);
                  }}
                >
                  {token}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  const tokenSlider = () => (
    <input
      className="token-slider"
      type="range"
      min={sliderMin}
      max={sliderMax}
      step={1}
      value={slider}
      onChange={(event) => {
        setSlider(event.target.valueAsNumber);
        setTokenValue(event.target.valueAsNumber);
      }}
    />
  );

  const modalBoard = () => (
    <Modal
      className="modal-container"
      show={isModalVisible}
      onHide={() => onModalClose()}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>FROST</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {dropDownTokens(Tokens)}
        <div className="allownce-text">
          {Tokens[tokenId]} Balance <span>{Balance[tokenId]}</span>
        </div>
        {tokenSlider()}
        <input
          className="required-tokens"
          value={tokenValue}
          onChange={(e) => onInputChange(e)}
        />
      </Modal.Body>
      <Modal.Footer>
        <button
          className={
            account
              ? "site-button gradient basic-btn confirm-btn radius-md shadow"
              : "site-button basic-btn disabled-btn radius-md shadow"
          }
          onClick={
            !hasAllowance(Tokens[tokenId])
              ? () => onApprove()
              : () => onDeposit()
          }
        >
          {hasAllowance(Tokens[tokenId]) ? "Deposit" : "Approve"}
        </button>
        <div className="deposit-text">Deposit Balance {DepositBalance}</div>
      </Modal.Footer>
    </Modal>
  );

  return (
    <>
      <SideBox />

      <div
        class="dez-coming-soon style-2 wow fadeIn"
        id="particles-snow"
        data-wow-duration="0.80s"
        data-wow-delay="0.50s"
        style={{ backgroundImage: "url(images/background/bg2.jpg)" }}
      >
        <Header />
        <div class="clearfix dez-coming-bx">
          <div class="dez-content top-center posi-center">
            <div
              class="logo wow fadeInUp top-md"
              data-wow-duration="1.5s"
              data-wow-delay="1.0s"
            >
              <a href="#">
                <img src="images/logo2.png" alt="" />
              </a>
            </div>
            <div class="center-md">
              <h2
                class="dez-title ml2 wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1.5s"
              >
                We Are Coming Soon
              </h2>
              <p
                class="wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="1.7s"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiu
                sit amet consectetur adipisicing
              </p>
              <div class="countdown count-1">
                <div
                  class="date wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.0s"
                >
                  <span class="days time"></span>
                  <span>Days</span>
                </div>
                <div
                  class="date wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.3s"
                >
                  <span class="hours time"></span>
                  <span>Hours</span>
                </div>
                <div
                  class="date wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.6s"
                >
                  <span class="mins time"></span>
                  <span>Minutes</span>
                </div>
                <div
                  class="date wow fadeInUp"
                  data-wow-duration="1.5s"
                  data-wow-delay="1.9s"
                >
                  <span class="secs time"></span>
                  <span>Second</span>
                </div>
              </div>
              <div
                class="dez-coming-btn wow fadeInUp"
                data-wow-duration="1.5s"
                data-wow-delay="2.2s"
              >
                <div>
                  <a
                    href="javascript:void(0);"
                    class="site-button gradient openbtn button-lg radius-md m-r10 shadow"
                  >
                    Get In Touch
                  </a>
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#exampleModal"
                    class="site-button button-lg outline radius-md shadow"
                  >
                    Subscribe Now
                  </a>
                </div>
                <button
                  className="site-button gradient button-md radius-md shadow modal-btn"
                  onClick={() => onPressModal()}
                >
                  Open Modal
                </button>
              </div>
            </div>
          </div>
          <div class="bottom-left">
            <ul class="dez-social-icon">
              <li
                class="wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="1.0s"
              >
                <a class="fa fa-facebook" href="#"></a>
              </li>
              <li
                class="wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="1.3s"
              >
                <a class="fa fa-twitter" href="#"></a>
              </li>
              <li
                class="wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="1.6s"
              >
                <a class="fa fa-linkedin" href="#"></a>
              </li>
              <li
                class="wow fadeInRight"
                data-wow-duration="1.5s"
                data-wow-delay="1.9s"
              >
                <a class="fa fa-google-plus" href="#"></a>
              </li>
            </ul>
            <p
              class="copyright-text wow fadeInUp"
              data-wow-duration="1.5s"
              data-wow-delay="2s"
            >
              © 2020 - Made with <i class="fa fa-heart"></i> By{" "}
              <a href="#" class="made-by">
                DexignZone
              </a>
            </p>
          </div>
        </div>
      </div>

      {modalBoard()}

      <Popup />
    </>
  );
};

export default Index2;
