import Web3 from 'web3';
import Web3Conection from './ABI/web3Conection.json';

const BSC_TESTNET_RPC = 'https://data-seed-prebsc-1-s1.binance.org:8545/';

const Contract = require("web3-eth-contract");

Contract.setProvider(BSC_TESTNET_RPC);

const Contract_Address = "0xe8c9c8e5e58175fe2807d734c9452eb7129a78b5";

const loadWeb3 = async () => {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({method: 'eth_requestAccounts'});
        } catch (error) {
            alert.error;
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        alert.message('Non-Ethereum browser detected. You should consider trying MetaMask!');
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
};

export const loadData = async () => {
    await loadWeb3();

    const Contract_Web3_Conection = new Contract(Web3Conection.output.abi, Contract_Address);
    const addressAccount = await window.web3.eth.getCoinbase();
    const getBalance = await Contract_Web3_Conection.methods.getbalance().call();
    const getMiners = await Contract_Web3_Conection.methods.getMiners().call();
    const getAvailableEarnings = await Contract_Web3_Conection.methods.getAvailableEarnings().call();
    const getReferrals = await Contract_Web3_Conection.methods.getUserInfo(addressAccount).call();
    const contractAddress = "0xe8c9c8e5e58175fe2807d734c9452eb7129a78b5" ;
    const getOwner = await Contract_Web3_Conection.methods.owner().call();

    return { Contract_Web3_Conection, addressAccount, getBalance, getMiners, getAvailableEarnings, getReferrals, contractAddress, getOwner};
};

export const loadNewbieData = async () => {
    await loadWeb3();

    const Contract_Web3_Conection = new Contract(Web3Conection.output.abi, Contract_Address);
    const addressAccount = await window.web3.eth.getCoinbase();
    const getBalance = await Contract_Web3_Conection.methods.getBalance().call();
    const getMiners = await Contract_Web3_Conection.methods.getMyMiners().call();
    const getAvailableEarnings = await Contract_Web3_Conection.methods.getAvailableEarnings(addressAccount).call();
    const getReferrals = await Contract_Web3_Conection.methods.getUserInfo(addressAccount).call();
    const contractAddress = "0xe8c9c8e5e58175fe2807d734c9452eb7129a78b5" ;
    const getOwner = await Contract_Web3_Conection.methods.owner().call();

    return { Contract_Web3_Conection, addressAccount, getBalance, getMiners, getAvailableEarnings, getReferrals, contractAddress, getOwner};
};
