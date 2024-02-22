import binance from '../images/partners/binance.png'
import coinmarket from '../images/partners/coinmarket.png'
import coingecko from '../images/partners/coingecko.png'
import kucoin from '../images/partners/kucoin.png'
import ps from '../images/partners/ps.png'
import asteroid from '../images/partners/asteroid.png'
import unity from '../images/partners/unity.png'
import Image from 'next/image';

const Partners = () => {
    return(
        <section id="partners">
        <div className="container" data-aos="fade-up">

        <div class="section-title">
            <h2>Partners</h2>
            <p>Check our Partners </p>
            <p>and</p>
            <p>Future Listing</p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex align-items-center">
                <div className="partner" data-aos="fade-right" data-aos-delay="200">
                    
                    <div className="partner-img">
                    <Image src={binance} class="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-center">
                <div className="partner" data-aos="fade-right" data-aos-delay="200">
                    
                    <div className="partner-img">
                    <Image src={coinmarket} class="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-center">
                <div className="partner" data-aos="fade-left" data-aos-delay="200">
                    
                    <div className="partner-img">
                    <Image src={coingecko} class="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-center">
                <div className="partner" data-aos="fade-right" data-aos-delay="200">
                    
                    <div className="partner-img">
                    <Image src={ps} class="img-fluid" alt=""/>
                    </div>

                </div>
            </div>

            <div className="col-lg-3 col-md-6 d-flex align-items-center">
                <div className="partner" data-aos="fade-left" data-aos-delay="200">
                    
                    <div className="partner-img">
                    <Image src={unity} class="img-fluid" alt=""/>
                    </div>

                </div>
            </div>
          </div>

        </div>

    </section>
    )
}

export default Partners;