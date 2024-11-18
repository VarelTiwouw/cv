import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const About = () => {
  const [about, setAbout] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
  return (
    <p>
      {about.description}
    </p>
  )
}



export default About;