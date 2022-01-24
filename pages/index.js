import Navbar from '@/components/util/Navbar';
import About from '@/components/sections/About';
import Education from '@/components/sections/Education';
import Projects from '@/components/sections/Projects';
import Awards from '@/components/sections/Awards';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="App">
      <Navbar></Navbar>

      <main>
        <section id="about">
          <About />
        </section>

        <hr />

        <section id="education">
          <Education />
        </section>

        <hr />

        <section id="projects">
          <Projects />
        </section>

        <hr />

        <section id="awards">
          <Awards />
        </section>

        <hr />

        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
}
