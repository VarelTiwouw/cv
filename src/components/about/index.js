const About = ()=>{
    return (
        <section className="section-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <img className="profilepic" src="https://res.cloudinary.com/dwjjkkh8r/image/upload/v1732008778/IMG20230809165148_r4fnc6.jpg" />
              <h2>About Me</h2>
              <hr />
              <p className="lead">Hi! My name is Varel Tiwouw. I was born on 20 September 2005 and currently a student in Klabat University. I live in Tomohon.
                I have a passion for design, game, etc. And I love learning new skills, exploring new places, working on creative projects.
                In my free time, you can find me hiking, playing games, etc. I also enjoy to do exercises and am always open to learning more about design UI/UX.
                Feel free to connect with me to share ideas or collaborate on exciting projects. Let's grow and achieve our dreams together!</p>
            </div>{/* /col-md-6 */}
          </div>{/* / row */}
        </div>{/* /container */}
      </section>
    )
}

export default About