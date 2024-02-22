import { useEffect } from 'react'
import Aos from 'aos'


const Count = () => {

    useEffect(() => {
        Aos.init({})
    }, [])

    return(
        <>
        <script src="https://cdn.jsdelivr.net/npm/@srexi/purecounterjs/dist/purecounter_vanilla.js"></script>
        <section id="counts" class="counts">
      <div class="container" data-aos="fade-up">

        <div class="row no-gutters">
          <div class="image col-xl-5 d-flex align-items-stretch justify-content-center justify-content-lg-start" data-aos="fade-right" data-aos-delay="100"></div>
          <div class="col-xl-7 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch" data-aos="fade-left" data-aos-delay="100">
            <div class="content d-flex flex-column justify-content-center">
              <h3>TOKEN TITTLE</h3>
              <p>
                description token
              </p>
              <div class="row">
                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="fas fa-dollar-sign"></i>
                    <span data-purecounter-start="0" data-purecounter-end="10000000" data-purecounter-duration="2" class="purecounter">1000000</span>
                    <p><strong>TOKEN NAME</strong> Tokens distribution.</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="fas fa-briefcase"></i>
                    <span data-purecounter-start="0" data-purecounter-end="5" data-purecounter-duration="1" class="purecounter">5</span>
                    <p><strong></strong>DESCRIPTION NFT</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="fas fa-gem"></i>
                    <span data-purecounter-start="0" data-purecounter-end="600000" data-purecounter-duration="2" class="purecounter">600000</span>
                    <p><strong>TITTLE</strong> description</p>
                  </div>
                </div>

                <div class="col-md-6 d-md-flex align-items-md-stretch">
                  <div class="count-box">
                    <i class="fas fa-gamepad"></i>
                    <span data-purecounter-start="0" data-purecounter-end="4700000" data-purecounter-duration="2" class="purecounter">4700000</span>
                    <p><strong>TITTLE</strong> description</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    </>
    )
}

export default Count