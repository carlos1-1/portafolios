import "../Skills/Skills.scss";
import Sky from "../sky";

export default function Skills() {
  return (
    <div className="inner">
      <Sky />
      <div className="header">
        <h1>My skills</h1>
      </div>
      <div className="container1">
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png"
                className="skill-icon"
                alt="Skill"
              />
            </div>
            <h3>HTML 5</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/CSS.3.svg/1200px-CSS.3.svg.png"
                className="skill-icon"
              />
            </div>
            <h3>CSS</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png"
                className="skill-icon"
              />
            </div>
            <h3>Javascript</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://hazelcast.com/wp-content/uploads/2021/12/node2.png"
                className="skill-icon"
              />
            </div>
            <h3>Node js</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
                className="skill-icon"
              />
            </div>
            <h3>React</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://img.icons8.com/color/512/redux.png"
                className="skill-icon"
              />
            </div>
            <h3>Redux</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://img.icons8.com/officel/512/express-js.png"
                className="skill-icon"
              />
            </div>
            <h3>Express</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png"
                className="skill-icon"
              />
            </div>
            <h3>Sequelize</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://img.icons8.com/color/512/postgreesql.png"
                className="skill-icon"
              />
            </div>
            <h3>PostgreSQL</h3>
          </div>
        </div>
        <div className="skill-box">
          <div className="skill-title">
            <div className="img">
              <img
                alt="Skill"
                src="https://img.icons8.com/color/512/sass-avatar.png"
                className="skill-icon"
              />
            </div>
            <h3>SASS</h3>
            <h5>En aprendizaje</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
