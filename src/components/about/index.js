import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "About/");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <section className="section-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 text-center">
              <img className="profilepic" src={about.img} />
              <h2>{about.aboutme}</h2>
              <hr />
              <p className="lead">{about.text}</p>
            </div>{/* /col-md-6 */}
          </div>{/* / row */}
        </div>{/* /container */}
      </section>
  );
};

export default About;