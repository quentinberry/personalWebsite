import './App.css';
import 'animate.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function App() {
  return (
    <div className="App">
      <Parallax pages={3}>
        <ParallaxLayer offset={0} speed={0.9}>
          <h1 class="indexTitle animate__animated animate__fadeInLeft">Hi, I am Quentin Berger, a Berlin based Software Engineer.</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={0.5}>
        <div class="memoji animate__animated animate__fadeInRight">
            <div class="circle"></div>
            <div class="memojiImage"></div>
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.8}>
          <h1 class='aboutMeTitle'>About me</h1>
          <p class="text">
            I fulfilled an apprenticeship at Zalando in Berlin. During that time I learned the principles of working in collaboration to create products for customers. 
            <br /><br /> Since I started as a full-time Software Engineer in 2020, I have gathered experience with different languages, frameworks, best practices, and agile working methods. 
            <br /><br /> Some of them being: <br /><b>Java, Spring Boot, JavaScript, React, Node.js, Express.js, JUnit, Jest, Git, PostgreSQL, and Go-Lang.</b>
          </p>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.5}>
        <div class="memojiAboutMe">
            <div class="circle"></div>
            <div class="memojiImageAboutMe"></div>
        </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.8}>
          <h1 class="contactTitle">Contact me / My Socials</h1>
          <div class="socialsList">
              <div class="instagram"></div>
              <div class="github"></div>
              <div class="linkedin"></div>
            </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.7}>
        <div class="memojiContact">
            <div class="circle"></div>
            <div class="memojiImageContact"></div>
        </div>
        </ParallaxLayer>

    </Parallax>
    </div >
  );
}

export default App;
