const Navbar = ()=>{
    return (
        <section className="section-primary" id="timelinesection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading">
              <h2>Things I've done</h2>
              <p className="lead">Here are a few cool things about me</p>
              <hr className="white" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Timeline */}
              <div id="timeline">
                {/* Timeline Item, copy from here to create various boxes */}
                <div className="timeline-item">
                  {/*Icon inside the circle*/}
                  <div className="timeline-icon">
                    <i className="fa fa-star" />
                  </div>
                  {/* Content from timeline box and position (right or left)*/}
                  <div className="timeline-content right">
                    <h2>School</h2>
                    <p>When I was in high school, I participated in the school organization, 
                      namely the student council and became the vice chairman of the student council.</p>
                  </div>
                </div>
                {/* /Timeline Item*/}
                {/* Timeline Item, copy from here to create various boxes */}
                <div className="timeline-item">
                  {/*Icon inside the circle*/}
                  <div className="timeline-icon">
                    <i className="fa fa-cog" />
                  </div>
                  {/* Content from timeline box and position (right or left)*/}
                  <div className="timeline-content left">
                    <h2>Adventure</h2>
                    <p>One thing that's cool to me is that I've climbed to the top of the highest mountain 
                      in North Sulawesi province, Mount Klabat.</p>
                  </div>
                </div>
                {/* /Timeline Item*/}
                {/* Timeline Item, copy from here to create various boxes */}
                <div className="timeline-item">
                  {/*Icon inside the circle*/}
                  <div className="timeline-icon">
                    <i className="fa fa-plane" />
                  </div>
                  {/* Content from timeline box and position (right or left)*/}
                  <div className="timeline-content right">
                    <h2>Videography</h2>
                    <p>I once participated in a videography competition with a provincial level team and won 
                      2nd place.</p>
                  </div>
                </div>
                {/* /Timeline Item*/}
                {/* Timeline Item, copy from here to create various boxes */}
                <div className="timeline-item">
                  {/*Icon inside the circle*/}
                  <div className="timeline-icon">
                    <i className="fa fa-group" />
                  </div>
                  {/* Content from timeline box and position (right or left)*/}
                  <div className="timeline-content left">
                    <h2>Graphic Design</h2>
                    <p>I once participated in a poster design competition with the theme of 17 August and won 1st place.</p>
                  </div>
                </div>
                {/* /Timeline Item*/}
                {/* Timeline Item, copy from here to create various boxes */}
                <div className="timeline-item">
                  {/*Icon inside the circle*/}
                  <div className="timeline-icon">
                    <i className="fa fa-star" />
                  </div>
                  {/* Content from timeline box and position (right or left)*/}
                  <div className="timeline-content right">
                    <h2>Gaming</h2>
                    <p>I once won a city-level gaming tournament and got 1st place.</p>
                  </div>
                </div>
                {/* /Timeline Item*/}
              </div>
              {/* /col-md-12 */}
            </div>
            {/* /row */}
          </div>
        </div> {/* / container */}
      </section>
    )
}

export default Navbar