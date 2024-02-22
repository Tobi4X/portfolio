

const About = () => {

    return(
        <section id="about" class="about">
      <div class="container pad--top" data-aos="fade-up">

        <div class="row">
          <div class="col-lg-6 order-1 order-lg-2" data-aos="fade-center" data-aos-delay="100">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content" data-aos="fade-center" data-aos-delay="100">
            <h3>Tittle</h3>
            <p class="fst-italic">
              Description
            </p>
            <ul>
              <li><i class="fas fa-check-circle"></i> spec-1</li>
              <li><i class="fas fa-check-circle"></i> spec-2</li>
              <li><i class="fas fa-check-circle"></i> spec-...</li>
            </ul>
            <p>
              Description
            </p>
          </div>
        </div>

      </div>
    </section>
    )
}


export default About
