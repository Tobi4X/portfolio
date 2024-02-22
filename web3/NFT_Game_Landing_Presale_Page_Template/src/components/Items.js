import dog from '../images/items/perro4.png'
import spaceMan from '../images/items/astronauta4.png'
import Rocket from '../images/items/nave4.png'
import Image from 'next/image';

const Items = () => {
    return(
        <section id="items" className="items">
            <div className="row">

                <div className="item-text col-lg-6 col-md-6 d-flex justify-content-center pad">
                    <div className="text container-sm" data-aos="fade-right" data-aos-delay="30">
                        <div className="tittle">
                            <h1>TITTLE</h1>
                        </div>
                        <div>
                        <p className=''>description<br></br>
                        <span className='green'>description</span></p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex justify-content-center ">
                    <div className="item-image container-sm" data-aos="fade-left" data-aos-delay="30">
                        <div className='image'>
                            <Image src={dog} class="img-fluid image" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <div className="item-image container-sm" data-aos="fade-left" data-aos-delay="30">
                        <div className='image'>
                            <Image src={spaceMan} class="img-fluid image" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="item-text col-lg-6 col-md-6 d-flex justify-content-center pad">
                    <div className="text container-sm" data-aos="fade-right" data-aos-delay="30">
                        <div className="tittle">
                            <h1>TITTLE</h1>
                        </div>
                        <div>
                        <p className=''>description<br></br>
                        <span className='red'>description</span></p>
                        </div>
                    </div>
                </div>

                <div className="pad--top item-text col-lg-6 col-md-6 d-flex justify-content-center pad">
                    <div className="text container-sm" data-aos="fade-right" data-aos-delay="30">
                        <div className="tittle">
                            <h1>TITTLE</h1>
                        </div>
                        <div>
                        <p className=''>description<br></br>
                        <span className='red'>description</span>
                        </p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-6 col-md-6 d-flex justify-content-center pad">
                    <div className="item-image container-sm" data-aos="fade-left" data-aos-delay="30">
                        <div className='image pad--top'>
                            <Image src={Rocket} class="img-fluid image" alt=""/>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Items;