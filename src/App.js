import "./App.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <Intro />
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src="avatar.jpg" alt="avatar" />
    </div>
  );
}

function Intro() {
  return (
    <div className="data">
      <p>
        Student informatyki z silnym zainteresowaniem tworzeniem i rozwijaniem
        aplikacji internetowych. Chcesz mieć stronę internetową swojej firmy? A
        może już masz, ale chciałbyś, aby była bardziej nowoczesna? Napisz na
        adres: <strong>✉ piotrjakubkrzyzak@gmail.com</strong>
      </p>
      <SkillList />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="yellow" skillName="Web Development" />
      <Skill color="orange" skillName="JavaScript" />
      <Skill color="lightblue" skillName="HTML" />
      <Skill color="pink" skillName="CSS" />
      <Skill color="red" skillName="React" />
      <Skill color="lightgreen" skillName="Node.js" />
      <Skill color="#11AAFF" skillName="PostgreSQL" />
      <Skill color="#119922" skillName="MongoDB" />
    </div>
  );
}

function Skill(props) {
  return (
    <div>
      <p className="skill" style={{ backgroundColor: props.color }}>
        {props.skillName} 💪
      </p>
    </div>
  );
}

export default App;
