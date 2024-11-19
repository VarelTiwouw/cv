import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const db = getDatabase();
    const skillsRef = ref(db, "Skills/");
    onValue(skillsRef, (snapshot) => {
      const data = snapshot.val();
      setSkills(data);
    });
  }, []);
  return (
    <section className="section-image" id="skills">
    <div className="img-overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12 section-heading">
          <h2>{skills.skills}</h2>
          <p className="lead">{skills.Hereare}</p>
          <hr />
        </div>
      </div>
      <div className="row">
        <div className="col-md-4 text-center">
          <span className="lnr lnr-user" />
          <h2>{skills.Soft}</h2>
          <p>{skills.Problem}</p>
        </div>
        <div className="col-md-4 text-center">
          <span className="lnr lnr-star" />
          <h2>{skills.Additional}</h2>
          <p>{skills.Photo}</p>
        </div>
        <div className="col-md-4 text-center">
          <span className="lnr lnr-diamond" />
          <h2>{skills.Hard}</h2>
          <p>{skills.Graph}</p>
        </div>
      </div> {/* / row */}
    </div>{/* /container */}
  </section>
  )
}

export default Skills