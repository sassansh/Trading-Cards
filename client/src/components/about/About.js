import "./About.css";

function About() {
  return (
    <>
      <div className="aboutme">
        <h1>👨‍💻 About Me</h1>
        <p>
          I am a 4th year BCS student at the University of British Columbia. I
          am currently on coop building health care analytics apps.
        </p>
        <p>I love building fun projects. They're the best way to learn.</p>
      </div>
      <div className="aboutme">
        <h1>🚗 About The Project</h1>
        <p>
          This trading cards app features cars with names, images, price and
          engine types.
        </p>
        <p>
          New Features:
          <ul>
            <li>Cards are stored in MongoDB</li>
          </ul>
        </p>
        <p>
          Features of the app:
          <ul>
            <li>View cards</li>
            <li>Click cards for details</li>
            <li>Delete all cards</li>
            <li>Delete individual cards</li>
            <li>Add new cards</li>
            <li>Sort cards by name or price</li>
            <li>Filter to show only electric cars</li>
            <li>Search for card names</li>
            <li>Edit cards</li>
          </ul>
        </p>
      </div>
      <div className="aboutme">
        <h1>🛠 Tech Stack</h1>
        <p>
          <ul>
            <li>
              ☁️ <a href="https://www.mongodb.com/">MongoDB</a>
            </li>
            <li>
              🌀 <a href="https://expressjs.com/">Express</a>
            </li>
            <li>
              💻 <a href="https://reactjs.org/">React</a>
            </li>
            <li>
              👾 <a href="https://nodejs.org/en/">NodeJS</a>
            </li>
          </ul>
        </p>
      </div>
    </>
  );
}

export default About;
