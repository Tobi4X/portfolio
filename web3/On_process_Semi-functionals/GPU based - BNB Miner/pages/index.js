import Head from 'next/head'
import React from 'react';
import { loadData } from '../web3/funcs';
import { loadNewbieData } from '../web3/funcs';
import Image from 'next/image';

export default function Home() {


  const [getMiners, setMiners] = React.useState(null);
  const [getAvailableEarnings, setAvailableEarnings] = React.useState(null);
  const [contract, setContract] = React.useState(null);
  const [addressAccount, setAddressAccount] = React.useState(null);
  const [getBalance, setGetBalance] = React.useState(null);
  const [getReferrals, setReferrals] = React.useState(null);
  const [contractAddress, setContractAddress] = React.useState(null);
  const [getOwner, setGetOwner] = React.useState(null);


  const [inputValue, setInputValue] = React.useState('');
  const [inputReferral, setInputReferral] = React.useState('');


  const handleWeb3 = async () => 
  {
    try {
      const data = await loadData();

      setContract(data.Contract_Web3_Conection);
      setReferrals(data.getUserInfo._referrals);
      setMiners(data.getUserInfo._miners);
      setAvailableEarnings( web3.utils.fromWei(data.getAvailableEarnings, 'ether'));
      setAddressAccount(data.addressAccount);
      setGetBalance(web3.utils.fromWei(data.getBalance, 'ether'));
      setContractAddress(data.Contract_Address);
      setGetOwner(data.getOwner);
    }
    catch (error) {
      const data = await loadNewbieData();

      setContract(data.Contract_Web3_Conection);
      setReferrals(0);
      setMiners(0);
      setAvailableEarnings(0);
      setAddressAccount(data.addressAccount);
      setGetBalance(web3.utils.fromWei(data.getBalance.toString(), 'ether'));
      setContractAddress(data.Contract_Address);
      setGetOwner(data.getOwner);
    }
    
  };

  const handleRefresh = async () => 
  {
    try {
      const data = await loadData();

      setContract(data.Contract_Web3_Conection);
      setReferrals(data.getUserInfo._referrals);
      setMiners(data.getUserInfo._miners);
      setAvailableEarnings( web3.utils.fromWei(data.getAvailableEarnings, 'ether'));
      setAddressAccount(data.addressAccount);
      setGetBalance(web3.utils.fromWei(data.getBalance, 'ether'));
      setContractAddress(data.Contract_Address);
      setGetOwner(data.getOwner);
    }
    catch (error) {
      return('error');
    }
    
  };

  const handleDeposit = async () =>
  {
    try {
      const value = String(inputValue);

      const referral = String(inputReferral);

      const data = await contract.methods.BuyLands(referral).encodeABI();

      const nonce = await web3.eth.getTransactionCount(addressAccount);

      const estimateGas = await contract.methods.BuyLands(referral).estimateGas({
        from: addressAccount,
        to: contractAddress,
        nonce: nonce,
        value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
        data: data
      });

      const params = {
        from: addressAccount,
        to: contractAddress,
        gas: web3.utils.toHex(estimateGas),
        gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
        value : web3.utils.toHex(web3.utils.toWei(value, 'ether')),
        data: data
      };

      ethereum.request({
        method: 'eth_sendTransaction',
        params: [params]
      }).then((res) => 
      {
        console.log("Transaction Hash: ", res);

        const interval = setInterval(() => 
        {
          web3.eth.getTransactionReceipt(res, (err, rec) => 
          {
            if (rec)
            {
              handleWeb3();
              setInputValue('');
              clearInterval(interval);
            }
            
            if (err)
            {
              console.log('ERROR: ', err);
            }

          });
            
        }, 5000);

      });
    }
      catch (error) {
        const value = String(inputValue);
        
        const referral = getOwner;

        if (referral !== undefined) {
          const data = await contract.methods.BuyLands(referral).encodeABI();
          // Resto del código que utiliza 'data'
        } else {
         console.error("La variable 'referral' es undefined.");
        }
  
        const data = await contract.methods.BuyLands(referral).encodeABI();
  
        const nonce = await web3.eth.getTransactionCount(addressAccount);
  
        const estimateGas = await contract.methods.BuyLands(referral).estimateGas({
          from: addressAccount,
          to: contractAddress,
          nonce: nonce,
          value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
          data: data
        });
  
        const params = {
          from: addressAccount,
          to: contractAddress,
          gas: web3.utils.toHex(estimateGas),
          gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
          value : web3.utils.toHex(web3.utils.toWei(value, 'ether')),
          data: data
        };
  
        ethereum.request({
          method: 'eth_sendTransaction',
          params: [params]
        }).then((res) => 
        {
          console.log("Transaction Hash: ", res);
  
          const interval = setInterval(() => 
          {
            web3.eth.getTransactionReceipt(res, (err, rec) => 
            {
              if (rec)
              {
                handleWeb3();
                setInputValue('');
                clearInterval(interval);
              }
              
              if (err)
              {
                console.log('ERROR: ', err);
              }
  
            });
              
          }, 5000);
  
        });
      }
  };


  const handleClaimRewards = async () =>
  {
    const data = await contract.methods.SellLands().encodeABI();

    const nonce = await web3.eth.getTransactionCount(addressAccount);

    const estimateGas = await contract.methods.SellLands().estimateGas({
      from: addressAccount,
      to: contractAddress,
      nonce: nonce,
      data: data
    });

    const params = {
      from: addressAccount,
      to: contractAddress,
      gas: web3.utils.toHex(estimateGas),
      gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
      data: data
    };

    ethereum.request({
      method: 'eth_sendTransaction',
      params: [params]
    }).then((res) => 
    {
      console.log("Transaction Hash: ", res);

      const interval = setInterval(() => 
      {
        web3.eth.getTransactionReceipt(res, (err, rec) => 
        {
          if (rec)
          {
            handleWeb3();
            clearInterval(interval);
          }
          
          if (err)
          {
            console.log('ERROR: ', err);
          }

        });
          
      }, 5000);

    });

  }; 


  const handleCompoundRewards = async () =>
  {
    const data = await contract.methods.CompoundRewards(true).encodeABI();

    const nonce = await web3.eth.getTransactionCount(addressAccount);

    const estimateGas = await contract.methods.CompoundRewards(true).estimateGas({
      from: addressAccount,
      to: contractAddress,
      nonce: nonce,
      data: data
    });

    const params = {
      from: addressAccount,
      to: contractAddress,
      gas: web3.utils.toHex(estimateGas),
      gasPrice: web3.utils.toHex(web3.utils.toWei('50', 'gwei')),
      data: data
    };

    ethereum.request({
      method: 'eth_sendTransaction',
      params: [params]
    }).then((res) => 
    {
      console.log("Transaction Hash: ", res);

      const interval = setInterval(() => 
      {
        web3.eth.getTransactionReceipt(res, (err, rec) => 
        {
          if (rec)
          {
            handleWeb3();
            clearInterval(interval);
          }
          
          if (err)
          {
            console.log('ERROR: ', err);
          }

        });
          
      }, 5000);

    });

  }; 

  return (
    <body>
      <Head>
        <title>GPUbminer</title>
        <meta name="description" content="The new era on staking" />
        <link rel="icon" href="/ventilador.ico" />
      </Head>
      <header></header>
        <div className="navbar">
         <a href=''>
          <div className="logo">
              <Image
                className="image"
                src="/ventilador.ico"
                alt="Landscape picture"
                width={85}
                height={50}
              />
              <h1>GPUbminer</h1>
          </div>
          </a>
        </div>
        <style jsx>{`
          body {
            width: 100%;
            height: 100vh;
            margin: 0;
            color: #f5f6f7;
            font-family: Tahoma;
            font-size: 1rem;
            text-align: center;
            background-image: url("/bg.jpg");
            background-repeat: no-repeat;
            background-size: cover;
          }
          .wallet{
            color: orange;
            text-shadow: 0px 0px 15px orange;
          }
          .box-conectar{
            display: flex;
            box-shadow: 0px 0px 15px orange;
            border-radius: 10px;
            background-color: #1b1b32;
            margin-left: 52%;
            margin-top: 1%;
            margin-bottom: 1%;
          }
          .minus{
            font-size: 18px;
          }
          .navbar {
            // put the h1 next to the logo
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            background-color: #1b1b32;
            height: 60px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            grid-template-columns: auto 1fr;
            padding: 1%;
          }
          .logo{
            display: flex;
          }
          image{
            width: 50px;
            height: 50px;
          }
          .conect{
            // put on the top left of the page
            // display: flex;
            // justify-content: center;
            // align-items: center;
            // background-color: #1b1b32;
            // height: 40px;
          }
          button {
            background-color: orange;
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 21px;
            margin: 20px;
            cursor: pointer;
            border-radius: 5px;
            box-shadow: 0px 0px 5px #000;
            filter: drop-shadow(0px 0px 5px orange);
            padding: 10px;
          }
          h3 {
            text-align: center;
            font-family: 'Tahoma', sans-serif;
            font-size: 21px;
            color: orange;
            // filter: drop-shadow(0px 0px 50px orange);
            text-shadow: 0px 0px 15px orange;
            
          }
          h1 {
            text-align: center;
            font-family: 'Tahoma', sans-serif;
            font-size: 2rem;
            color: orange;
          }
          a{
            text-decoration: none;
            text-align: center;
            font-family: 'Tahoma', sans-serif;
            font-size: 18px;
            color: orange;
            padding: 20px;
            // filter: drop-shadow(0px 0px 50px orange);
            // text-shadow: 0px 0px 2px orange;
          }
          a:hover{
            text-decoration: underline;
          }
          input {
            width: 200px;
            height: 40px;
            border-radius: 5px;
            border: 1px solid #ccc;
            padding: 0 10px;
            margin: 10px 0;
            filter: drop-shadow(0px 0px 5px orange);
          }
          .cuerpo{
            display: flex;
            flex-direction: center;
            justify-content: center;
            margin-top: 0%;
          }
          
          .deposit{
            display: flex;
            justify-content: left;
            align-items: center;
            drop-shadow(0px 0px 5px orange);
          }

          .box{
            box-shadow: 0px 0px 15px orange;
            border-radius: 10px;
            margin: 0% 2% 2% 2%;
            padding: 1%;
            display: flex;
            justify-content: top;
            align-items: center;
            flex-direction: column;
            background-color: #1b1b32;
          }
          .texto{
            text-align: center;
            height: 40px;
            width: 200px;
          }
          .boton-conectar{
            display: flex;
            justify-content: right;
            align-items: center;
            margin-right: 11.5%;
          }
          .margin{
            margin-top: 3%;
          }
          .pad{
            display: flex;
            justify-content: center;
            align-items: center;
            // padding: 0% 20%;
          }
          .center{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin-top: 50%;
          }
          .alert{
            margin: 0% 20% 2% 20%;
            box-shadow: 0px 0px 15px orange;
            border-radius: 10px;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1%;
            background-color: #1b1b32;
          }
          h5{
            color: #1b1b32;
          }
        `}</style>
        <div className="boton-conectar box-conectar">
          <h2 className='minus wallet'>{addressAccount}</h2>
          <button className='conect' onClick={handleWeb3}>Connect Wallet</button>
        </div>
        <h3 className='alert'>After POOL BALANCE reaches 200 BNB the new Investors will only earn 5% daily!!</h3>
        <div className="cuerpo">
          <div className='body, box'>
              <div>
                <h2>Referral</h2>
              </div>
              <div>
                <input className='texto' type='text' placeholder='Referral Address' value={inputReferral} onChange={(e) => setInputReferral(e.target.value)} />
              </div>
              <div>
                <h3 className='texto'>Share and Earn 15% of the BNB used to Earn Mining Power from anyone who uses your wallet address</h3>
              </div>
              <div className='center'>
                <Image
                  className="image"
                  src="/ventilador.ico"
                  alt="Landscape picture"
                  width={250}
                  height={250}
                />
              </div>
            </div>
            <div>
              <div className="box pad">
                <h2>Contract</h2>
                <h3 className='minus'><a target="_blank" rel="noopener noreferrer" href='https://testnet.bscscan.com/address/0xe8c9c8e5e58175fe2807d734c9452eb7129a78b5'>0xe8c9c8e5e58175fe2807d734c9452eb7129a78b5</a></h3>
                <h3 className='minus'>POOL BALANCE: {getBalance} BNB</h3>
              </div>
              <div className="box margin">
                <h3>MINING POWER: {getMiners} H/s</h3>
                <div className='deposit'>
                  <input type="number" value={inputValue} onChange={(e) => setInputValue(e.currentTarget.value) } placeholder="Buy Min 0.1 BNB" min={0.1} max={50} />
                  <button onClick={handleDeposit}>BUY H/s</button>
                </div>
              </div>
              <div className='box margin pad'>
                  <h3 className='minus'>Unclaimed Balance: {getAvailableEarnings} BNB</h3>
                  <div>
                    <button className='' onClick={handleCompoundRewards}>RE-BUY H/s</button>
                    <button onClick={handleClaimRewards}>Claim Balance</button>
                  </div>
                </div>
            </div>
            <div className='body, box'>
              <div>
                <h2>Mining Facts</h2>
              </div>
              <div>
                <h3>Daily Return : 10%</h3>
                <h3>APR : 3650%</h3>
                <h3>Marketing Fee : 3%</h3>
                <h3>Dev Fee : 2%</h3>
              </div>
              <div>
                <h3>Referred accounts : {getReferrals}</h3>
              </div>
              <div>
                <Image
                  className="image"
                  src="/ventilador.ico"
                  alt="Landscape picture"
                  width={250}
                  height={250}
                />
              </div>
            </div>
        </div>
        <div className='margin'>
          
        </div>
    </body>
  )
}
