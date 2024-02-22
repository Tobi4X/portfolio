import Head from 'next/head'
import React from 'react';
import { loadData } from '../web3/funcs';

export default function Home() {

  const [contract, setContract] = React.useState(null);
  const [addressAccount, setAddressAccount] = React.useState(null);
  const [contractAddress, setContractAddress] = React.useState(null);

  const [inputValue, setInputValue] = React.useState('');

  const handleWeb3 = async () => 
  {
    const data = await loadData();

    setNumber(data.number);
    setContract(data.Contract_Web3_Conection);
    setAddressAccount(data.addressAccount);
    setContractAddress(data.Contract_Address);
  };

  return (
    <>
      <Head>
        <title>Web3 Conection</title>
        <meta name="description" content="Simple web3 conection" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Web3 Conection</h1>

      <button onClick={handleWeb3}>Connect to Web3</button>

      <h3>Number: {number}</h3>

      <input type='number' value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value) } placeholder="Put a number"/>
      <button onClick={handleChangeNumber}>Change Number</button>

    </>
  )
}
