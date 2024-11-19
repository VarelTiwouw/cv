import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

const Timeline = () => {
  const [timeline, setTimeline] = useState({});
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    const db = getDatabase();
    const timelineRef = ref(db, "Timeline/");
    onValue(timelineRef, (snapshot) => {
      const data = snapshot.val();
      setTimeline(data);
    });
  }, []);
  return (
        <section className="section-primary" id="timelinesection">
        <div className="container">
          <div className="row">
            <div className="col-md-12 section-heading">
              <h2>{timeline.things}</h2>
              <p className="lead">{timeline.here}</p>
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
                    <h2>{timeline.school}</h2>
                    <p>{timeline.when}</p>
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
                    <h2>{timeline.adventure}</h2>
                    <p>{timeline.one}</p>
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
                    <h2>{timeline.vid}</h2>
                    <p>{timeline.i}</p>
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
                    <h2>{timeline.graph}</h2>
                    <p>{timeline.igrap}</p>
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
                    <h2>{timeline.gam}</h2>
                    <p>{timeline.igam}</p>
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

export default Timeline