import Web3 from 'web3';
import Web3Conection from './ABI/web3Conection.json';

const BSC_TESTNET_RPC = 'https://bsc-dataseed.binance.org/';

const Contract = require("web3-eth-contract");

Contract.setProvider(BSC_TESTNET_RPC);

const Contract_Address_1 = "0x3eC9B2869FE92D887A8ABb64B589A63A0d94318E";

const Contract_Address_2 = "0xD109Bb07FccA3F500661c1C836647e2310c2B285";

const Contract_Address_3 = "0x76c19c43b1Efaa4b34e2a53d5c4b753343Ece1df";

const Contract_Address_4 = "0x54b7ac86E099A9a81c3bA74012c90eC330Fc6d59";

const Contract_Address_5 = "0xC288283025a6252837EC3403774968ab7198E050";

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

    const Contract_Web3_Conection_1 = new Contract(Web3Conection.output.abi, Contract_Address_1);

    const Contract_Web3_Conection_2 = new Contract(Web3Conection.output.abi, Contract_Address_2);

    const Contract_Web3_Conection_3 = new Contract(Web3Conection.output.abi, Contract_Address_3);

    const Contract_Web3_Conection_4 = new Contract(Web3Conection.output.abi, Contract_Address_4);

    const Contract_Web3_Conection_5 = new Contract(Web3Conection.output.abi, Contract_Address_5);

    const addressAccount = await window.web3.eth.getCoinbase();

    const getBalance_1 = await Contract_Web3_Conection_1.methods.balanceOf(addressAccount).call();

    const getBalance_2 = await Contract_Web3_Conection_2.methods.balanceOf(addressAccount).call();

    const getBalance_3 = await Contract_Web3_Conection_3.methods.balanceOf(addressAccount).call();

    const getBalance_4 = await Contract_Web3_Conection_4.methods.balanceOf(addressAccount).call();

    const getBalance_5 = await Contract_Web3_Conection_5.methods.balanceOf(addressAccount).call();

    return { Contract_Web3_Conection_1, Contract_Web3_Conection_2, Contract_Web3_Conection_3, Contract_Web3_Conection_4, Contract_Web3_Conection_5, addressAccount, getBalance_1, getBalance_2, getBalance_3, getBalance_4, getBalance_5 };
};

export const loadNewbieData = async () => {
    await loadWeb3();

    const Contract_Web3_Conection_1 = new Contract(Web3Conection.output.abi, Contract_Address_1);

    const Contract_Web3_Conection_2 = new Contract(Web3Conection.output.abi, Contract_Address_2);

    const Contract_Web3_Conection_3 = new Contract(Web3Conection.output.abi, Contract_Address_3);

    const Contract_Web3_Conection_4 = new Contract(Web3Conection.output.abi, Contract_Address_4);

    const Contract_Web3_Conection_5 = new Contract(Web3Conection.output.abi, Contract_Address_5);

    const addressAccount = await window.web3.eth.getCoinbase();

    const getBalance_1 = await Contract_Web3_Conection_1.methods.balanceOf(addressAccount).call();

    const getBalance_2 = await Contract_Web3_Conection_2.methods.balanceOf(addressAccount).call();

    const getBalance_3 = await Contract_Web3_Conection_3.methods.balanceOf(addressAccount).call();

    const getBalance_4 = await Contract_Web3_Conection_4.methods.balanceOf(addressAccount).call();

    const getBalance_5 = await Contract_Web3_Conection_5.methods.balanceOf(addressAccount).call();

    return { Contract_Web3_Conection_1, Contract_Web3_Conection_2, Contract_Web3_Conection_3, Contract_Web3_Conection_4, Contract_Web3_Conection_5, addressAccount, getBalance_1, getBalance_2, getBalance_3, getBalance_4, getBalance_5 };
};
