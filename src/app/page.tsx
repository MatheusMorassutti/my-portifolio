
import { Experience } from './components/exeperience/experience';
import {Header} from './components/header/header'
import { SectionTitle } from './components/sectionTitle/section-title';

import "./styles/home.scss"

export default function Home() {
  return (
    <main className="container">
     <Header/>
     <Experience/>
      <div className="infos">
        <h3>Languages</h3>
    <div className="info-languages">
      <span>EN - Intermediario</span>
      <span>PT-BR - Native Speaker</span>
 <div className="education">
  <h3>Education</h3>
  <span>🎓</span>
  <span> Software Engineer Bachelors Degree - Universidade Positivo (UP)</span>
    </div>   
    </div>
      </div>
      <div className="buttons">
        <div className="social"></div>
        <button>Contact me</button>
      </div>
      
    </main>
  );
}
