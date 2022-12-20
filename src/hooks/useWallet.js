import { useEthers } from "@usedapp/core";

const useWallet = () => {
  const { account, activate, deactivate, activateBrowserWallet, chainId } = useEthers();

  return {
    account,
    activate,
    deactivate,
    activateBrowserWallet,
    chainId,
  };
};

export default useWallet;
