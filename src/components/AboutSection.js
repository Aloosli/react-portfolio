import avatar from "../img/avatar.png";

const aboutSection = () => {
  return (
    <div className="description">
      <div className="title">
        <div className="hide">
          <h2>I am passionate</h2>
        </div>
        <div className="hide">
          <h2>about<span> coding</span></h2>
        </div>
        <div className="hide">
          <h2>and <span>design</span></h2>
        </div>
        <p>Contact me for any project ideas you have</p>
        <button>Contact Me</button>
      </div>
        <div className="image">
            <img src={avatar} alt="my avatar" />
        </div>

    </div>
  );
};

export default aboutSection;
