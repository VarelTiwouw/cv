import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Footer = () => {
  const [footer, setFooter] = useState({});
  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "Footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
  }, []);
  return (
    <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <p>{footer.designby}<br />
              </p></div>
            <div className="col-md-4 text-center">
              <p>{footer.made} <i className="fa fa-heart" />
              </p></div>
            <div className="col-md-4">
              <div className="social-footer">
                <a href="http://www.instagram.com/varelate_" target="_blank"><i className="fa fa-instagram" /></a> 
                <a href="https://github.com/VarelTiwouw" target="_blank"><i className="fa fa-github" /></a>
              </div> {/* /social footer */}
            </div> {/* /col-md-4 */}
          </div>{/* /row */}
        </div>{/* /container */}
      </footer>
    )
}
        
export default Footer