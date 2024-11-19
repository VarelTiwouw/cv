const Homepage = ()=>{
    return (
        <section className="section-image">
        <div className="img-overlay" />
        <div className="intro">
          <div className="row">
            <div className="col-md-12">
              <h5>YOO!!</h5>
              <h1>I'm Varel Tiwouw</h1>
              <p className="intro-desc"><span>Design</span>
                <span className="colour-splash">•</span>
                <span>Adventurer</span> <span className="colour-splash">•</span> <span>gaming
                </span></p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="social">
                <a href="http://www.instagram.com/varelate_" target="_blank"><i className="fa fa-instagram fa-3x" /></a> 
                <a href="https://github.com/VarelTiwouw" target="_blank"><i className="fa fa-github fa-3x" /></a>
              </div>{/* /social */}
            </div>{/* /col-md-8 */}
          </div>{/* /row */}
          <div className="bottom">
            <a href="#about">
              <div className="mouse-icon">
                <div className="scroll">
                </div>
              </div></a>
          </div>
        </div>
      </section>
    )
}

export default Homepage