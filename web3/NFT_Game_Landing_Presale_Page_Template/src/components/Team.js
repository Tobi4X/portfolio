import ps from '../images/items/astronauta4.png'
import Image from 'next/image';


const Team = () => {

    return(
        <section id="team" class="team">
        <div class="container" data-aos="fade-up">
  
          <div class="section-title">
            <h2>Team</h2>
            <p>Check our Team</p>
          </div>
  
          <div class="row">
  
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="100">
                <div class="member-img">
                <Image src={ps} class="img-fluid" alt=""/>
                </div>
                <div class="member-info">
                  <h4>NAME</h4>
                  <h6>SOCIAL NETWORK</h6>
                  <span>JOB</span>
                </div>
              </div>
            </div>
  
  
            <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
              <div class="member" data-aos="fade-up" data-aos-delay="300">
                <div class="member-img">
                <Image src={ps} class="img-fluid" alt=""/>
                </div>
                <div class="member-info">
                  <h4>NAME</h4>
                  <h6>SOCIAL NETWORK</h6>
                  <span>JOB</span>
                </div>
              </div>
            </div>
  
  
          </div>
  
        </div>
      </section>
    )
}

export default Team

