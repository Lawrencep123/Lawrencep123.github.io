export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
            <p className="section--title">Hey, I'm Lawrence</p>
            <h1 className="hero--section--title">
              <span className="hero--section-title--color"> Computer Science Student | Aspiring Penetration Tester | HTB Learner with a Focus on Network Security</span>{" "}
              <br />
              {/* Add send list here for titles  */}
            </h1>
            <p className="hero--section-description">
              {/* Add intro here  */}
              <br /> 
            </p>
          </div>
          
        </div>
        <div className="hero--section--img">
          <img src="./img/hero_img.png" alt="Hero Section" />
        </div>
      </section>
    );
  }
