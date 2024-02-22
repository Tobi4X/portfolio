import kit1 from '../images/kits/1.png'
import kit2 from '../images/kits/2.png'
import kit3 from '../images/kits/3.png'
import kit4 from '../images/kits/4.png'
import kit5 from '../images/kits/5.png'
import Image from 'next/image';
import React from 'react';
import { loadData } from '../webb3/funcs';
import { loadNewbieData } from '../webb3/funcs';



const Kits = () => {

  const [contract1, setContract1] = React.useState(null);
  const [contract2, setContract2] = React.useState(null);
  const [contract3, setContract3] = React.useState(null);
  const [contract4, setContract4] = React.useState(null);
  const [contract5, setContract5] = React.useState(null);
  const [addressAccount, setAddressAccount] = React.useState(null);
  const [getBalance1, setGetBalance1] = React.useState(null);
  const [getBalance2, setGetBalance2] = React.useState(null);
  const [getBalance3, setGetBalance3] = React.useState(null);
  const [getBalance4, setGetBalance4] = React.useState(null);
  const [getBalance5, setGetBalance5] = React.useState(null);
  const [contractAddress1, setContractAddress1] = React.useState(null);
  const [contractAddress2, setContractAddress2] = React.useState(null);
  const [contractAddress3, setContractAddress3] = React.useState(null);
  const [contractAddress4, setContractAddress4] = React.useState(null);
  const [contractAddress5, setContractAddress5] = React.useState(null);

  const handleWeb3 = async () => 
  {
    try {
      const data = await loadData();

      setContract1(data.Contract_Web3_Conection_1);
      setContract2(data.Contract_Web3_Conection_2);
      setContract3(data.Contract_Web3_Conection_3);
      setContract4(data.Contract_Web3_Conection_4);
      setContract5(data.Contract_Web3_Conection_5);
      setContractAddress1("0xBa28f13c12A8E50a0806EAbe06A8453c4b8CF731");
      setContractAddress2("0xdb80534364A68d28dd7E2e3DeadF3f708375133C");
      setContractAddress3("0x187dF99b92D8608eae2FC8fC5588953B99A3d94E");
      setContractAddress4("0x4862fDab0c44DDF6387EfE9C2cBAEFab75b2Db4D");
      setContractAddress5("0xc46A65D3f5f5E616F01b0DBceac6eCF1df125362");
      setAddressAccount(data.addressAccount);
      setGetBalance1(data.getBalance_1);
      setGetBalance2(data.getBalance_2);
      setGetBalance3(data.getBalance_3);
      setGetBalance4(data.getBalance_4);
      setGetBalance5(data.getBalance_5);
    }
    catch (error) {
      const data = await loadNewbieData();

      setContract1(data.Contract_Web3_Conection_1);
      setContract2(data.Contract_Web3_Conection_2);
      setContract3(data.Contract_Web3_Conection_3);
      setContract4(data.Contract_Web3_Conection_4);
      setContract5(data.Contract_Web3_Conection_5);
      setContractAddress1("0xBa28f13c12A8E50a0806EAbe06A8453c4b8CF731");
      setContractAddress2("0xdb80534364A68d28dd7E2e3DeadF3f708375133C");
      setContractAddress3("0x187dF99b92D8608eae2FC8fC5588953B99A3d94E");
      setContractAddress4("0x4862fDab0c44DDF6387EfE9C2cBAEFab75b2Db4D");
      setContractAddress5("0xc46A65D3f5f5E616F01b0DBceac6eCF1df125362");
      setAddressAccount(data.addressAccount);
      setGetBalance1(data.getBalance_1);
      setGetBalance2(data.getBalance_2);
      setGetBalance3(data.getBalance_3);
      setGetBalance4(data.getBalance_4);
      setGetBalance5(data.getBalance_5);
    }
    
  };

  const handleDeposit1 = async () =>
  {
    try {
      const value = "0,2";

      const data = await contract1.methods.mint(1).encodeABI();

      const nonce = await web3.eth.getTransactionCount(addressAccount);

      const estimateGas = await contract1.methods.mint(1).estimateGas({
        from: addressAccount,
        to: contractAddress1,
        nonce: nonce,
        value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
        data: data
      });

      const params = {
        from: addressAccount,
        to: contractAddress1,
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
        const value = "0.2";
  
        const data = await contract1.methods.mint(1).encodeABI();
  
        const nonce = await web3.eth.getTransactionCount(addressAccount);
  
        const estimateGas = await contract1.methods.mint(1).estimateGas({
          from: addressAccount,
          to: contractAddress1,
          nonce: nonce,
          value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
          data: data
        });
  
        const params = {
          from: addressAccount,
          to: contractAddress1,
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

  const handleDeposit2 = async () =>
  {
    try {
      const value = "0,4";

      const data = await contract2.methods.mint(1).encodeABI();

      const nonce = await web3.eth.getTransactionCount(addressAccount);

      const estimateGas = await contract2.methods.mint(1).estimateGas({
        from: addressAccount,
        to: contractAddress2,
        nonce: nonce,
        value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
        data: data
      });

      const params = {
        from: addressAccount,
        to: contractAddress2,
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
        const value = "0.4";
  
        const data = await contract2.methods.mint(1).encodeABI();
  
        const nonce = await web3.eth.getTransactionCount(addressAccount);
  
        const estimateGas = await contract2.methods.mint(1).estimateGas({
          from: addressAccount,
          to: contractAddress2,
          nonce: nonce,
          value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
          data: data
        });
  
        const params = {
          from: addressAccount,
          to: contractAddress2,
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

  const handleDeposit3 = async () =>
  {
    try {
      const value = "0,9";

      const data = await contract3.methods.mint(1).encodeABI();

      const nonce = await web3.eth.getTransactionCount(addressAccount);

      const estimateGas = await contract3.methods.mint(1).estimateGas({
        from: addressAccount,
        to: contractAddress3,
        nonce: nonce,
        value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
        data: data
      });

      const params = {
        from: addressAccount,
        to: contractAddress3,
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
        const value = "0.9";
  
        const data = await contract3.methods.mint(1).encodeABI();
  
        const nonce = await web3.eth.getTransactionCount(addressAccount);
  
        const estimateGas = await contract3.methods.mint(1).estimateGas({
          from: addressAccount,
          to: contractAddress3,
          nonce: nonce,
          value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
          data: data
        });
  
        const params = {
          from: addressAccount,
          to: contractAddress3,
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

  const handleDeposit4 = async () =>
  {
    try {
      const value = "1,6";

      const data = await contract4.methods.mint(1).encodeABI();

      const nonce = await web3.eth.getTransactionCount(addressAccount);

      const estimateGas = await contract4.methods.mint(1).estimateGas({
        from: addressAccount,
        to: contractAddress4,
        nonce: nonce,
        value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
        data: data
      });

      const params = {
        from: addressAccount,
        to: contractAddress4,
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
        const value = "1.6";
  
        const data = await contract4.methods.mint(1).encodeABI();
  
        const nonce = await web3.eth.getTransactionCount(addressAccount);
  
        const estimateGas = await contract4.methods.mint(1).estimateGas({
          from: addressAccount,
          to: contractAddress4,
          nonce: nonce,
          value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
          data: data
        });
  
        const params = {
          from: addressAccount,
          to: contractAddress4,
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

  const handleDeposit5 = async () =>
  {
    try {
      const value = "3,2";

      const data = await contract5.methods.mint(1).encodeABI();

      const nonce = await web3.eth.getTransactionCount(addressAccount);

      const estimateGas = await contract5.methods.mint(1).estimateGas({
        from: addressAccount,
        to: contractAddress5,
        nonce: nonce,
        value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
        data: data
      });

      const params = {
        from: addressAccount,
        to: contractAddress5,
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
        const value = "3.2";
  
        const data = await contract5.methods.mint(1).encodeABI();
  
        const nonce = await web3.eth.getTransactionCount(addressAccount);
  
        const estimateGas = await contract5.methods.mint(1).estimateGas({
          from: addressAccount,
          to: contractAddress5,
          nonce: nonce,
          value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
          data: data
        });
  
        const params = {
          from: addressAccount,
          to: contractAddress5,
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

    return(
       <section id='kits'>
        <div className="kits pad--top">
            <div className="container" data-aos='fade-up'>
                <div class="section-title">
                    <h2>NFTS</h2>
                    <p>BUY YOUR NFTS</p>
                    <button type="button" className='get-started-btn' onClick={handleWeb3}><script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script><iconify-icon icon="logos:metamask-icon"></iconify-icon>CONNECT {addressAccount}</button>
                </div>

                <div className="clase row">

                    <div className="col-auto d-flex justify-content-center column">
                        <div className='kit' data-aos="fade-right" data-aos-delay="300">
                            <div className='kit-image image'>
                                <Image src={kit1} className="image-fluid"/>
                            </div>
                            <div className='button'>
                                <button type="button" className='btn' onClick={handleDeposit1} >
                                
                                <p>
                                  MINT $ BNB <br/>
                                  NFT COUNT : {getBalance1}</p>
                                  
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto d-flex justify-content-center column">
                        <div className='kit' data-aos="fade-right" data-aos-delay="300">
                            <div className='kit-image image'>
                                <Image src={kit2} className="image-fluid"/>
                            </div>
                            <div className='button'>
                                <button type="button" className='btn' onClick={handleDeposit2}>
                                
                                <p>
                                  MINT $ BNB <br/>
                                  NFT COUNT : {getBalance2}</p>
                                  
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto d-flex justify-content-center column">
                        <div className='kit' data-aos="fade-right" data-aos-delay="300">
                            <div className='kit-image image'>
                                <Image src={kit3} className="image-fluid"/>
                            </div>
                            <div className='button'>
                                <button type="button" className='btn' onClick={handleDeposit3}>
                                
                                <p>
                                  MINT $ BNB <br/>
                                  NFT COUNT : {getBalance3}</p>
                                  
                                  </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto d-flex justify-content-center column">
                        <div className='kit' data-aos="fade-right" data-aos-delay="300">
                            <div className='kit-image image'>
                                <Image src={kit4} className="image-fluid"/>
                            </div>
                            <div className='button'>
                                <button type="button" className='btn' onClick={handleDeposit4}>
                                
                                <p>
                                  MINT $ BNB <br/>
                                  NFT COUNT : {getBalance4}</p>
                                  
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto d-flex justify-content-center column">
                        <div className='kit' data-aos="fade-right" data-aos-delay="300">
                            <div className='kit-image image'>
                                <Image src={kit5}  className="image-fluid"/>
                            </div>
                            <div className='button'>
                                <button type="button" className='btn' onClick={handleDeposit5}>
                                
                                <p>
                                  MINT $ BNB <br/>
                                  NFT COUNT : {getBalance5}</p>
                                  
                                </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>
    )
}

export default Kits 