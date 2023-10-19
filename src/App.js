import React ,{ useRef } from "react";
import "./App.css"; // Add your CSS styling here
import profileImage from "./profile.jpg"; 
function App() {
  const bioRef = useRef(null);
  const educationRef = useRef(null);
  const hobbiesRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="App">
      <header className="header">
      
      <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="circle-border"></div>
        </div>
        <h1>Varun Mayandi</h1>
        <p>B.Tech Computer Science and Engineering with specialization in Cyber Security</p>
      </header>

      <section className="bio">
        <h2>Bio</h2>
        <p>Date of Birth: February 10,2003</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="school">
          <h3>School</h3>
          <p>Dr. K.K.R's Gowtham Concept school, Tenali.</p>
        </div>

        <div className="intermediate">
          <h3>Intermediate</h3>
          <p>Sri Chaitanya Junior college</p>
        </div>

        <div className="btech">
          <h3>B.Tech</h3>
          <p>Vit-ap</p>
        </div>
      </section>
      <section className="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Listening music </li>
          <li>Watching movies</li>
          <li>Drawing cartoons</li>
          <li>Learning programming languages</li>
          <li>Watching news</li>
          {/* Add more hobbies */}
        </ul>
      </section>

      <section className="skills">
        <h2>Known Programming Languages</h2>
        <ul>
          <li>Python</li>
          <li>Java</li>
          <li>C++</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>R</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message"></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
      
    </div>
  );
}

export default App;
