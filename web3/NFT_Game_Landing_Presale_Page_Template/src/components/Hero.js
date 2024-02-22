import { useEffect } from 'react'

import Aos from 'aos'


const Hero = () => {

    useEffect(() => {
        Aos.init({duration: 1000})
    }, [])
    
    return(
        <section id="hero" className="d-flex align-items-center justify-content-center">
    <div className="container" data-aos="fade-up">

      <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
        <div className="col-xl-6 col-lg-8">
          <br/><br/><br/><br/>
          <h1><span>NAME</span></h1>
          <h2>description</h2>
        </div>
      </div>

      <div className="row gy-4 mt-5 justify-content-center" data-aos="zoom-in" data-aos-delay="250">
        <div className="col-xl-2 col-md-4">
          <a class="a" href="#kits">
            <div className="icon-box">
              <i className="bi-currency-dollar"></i>
              <h3>MINT NFT</h3>
            </div>
          </a>
        </div>
          
        <div className="col-xl-2 col-md-4">
          <a class="a" href="#kits" className='hero'>
            <div className="icon-box">
              {/* <script src="https://code.iconify.design/iconify-icon/1.0.0/iconify-icon.min.js"></script><iconify-icon class="meta" icon="logos:metamask-icon"></iconify-icon> */}
              <span class="meta"></span>
              <h3>CONNECT</h3>
            </div>
          </a>
        </div>

        <div className="col-xl-2 col-md-4">
          <a class="a" href="" target="_blank">
            <div className="icon-box">
              <i className="bi-discord"></i>
              <h3>DISCORD</h3>
            </div>
          </a>
        </div>
      </div>

    </div>
  </section>
    )
}

export default Hero