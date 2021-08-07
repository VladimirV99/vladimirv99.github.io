import './App.css';
import './Button.css';

import Navbar from './components/Navbar';
import About from './sections/About';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <main>
        <section id="home">
          <About />
        </section>

        {/* <hr /> */}

        <section id="education">
          <Education />
        </section>

        <hr />

        <section id="projects">
          <Projects />
        </section>

        <hr />

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
