const Skills = ()=>{
  return (
    <section className="section-image" id="skills">
    <div className="img-overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12 section-heading">
          <h2>Skills</h2>
          <p className="lead">Here are a few cool things about me</p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <span className="lnr lnr-user" />
          <h2>Soft Skills</h2>
          <p>Problem Solving, Teamwork, Creativity, Adaptability.</p>
        </div>
        <div className="col-md-4 text-center">
          <span className="lnr lnr-star" />
          <h2>Additional Skills</h2>
          <p>Photography/videography, Event planning, Project management.</p>
        </div>
        <div className="col-md-4 text-center">
          <span className="lnr lnr-diamond" />
          <h2>Hard Skills</h2>
          <p>Graphic design, UI/UX design, Adobe Photoshop, Figma, Adobe Premiere Pro, Adobe After Effects, Blender, PPT.</p>
        </div>
      </div> {/* / row */}
    </div>{/* /container */}
  </section>
  )
}

export default Skills