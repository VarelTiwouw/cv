import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Homepage = () => {
  const [homepage, setHomepage] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const db = getDatabase();
    const homepageRef = ref(db, "Home/");
    onValue(homepageRef, (snapshot) => {
      const data = snapshot.val();
      setHomepage(data);
    });
  }, []);
  return (

        <section className="section-image">
        <div className="img-overlay" />
        <div className="intro">
          <div className="row">
            <div className="col-md-12">
              <h5>{homepage.yoo}</h5>
              <h1>{homepage.im}</h1>
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