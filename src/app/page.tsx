import Header from './components/header';
import './page.scss';

export default function Home() {
  return (
    <main>
      <Header/>
      <div id='technologies'>
        <h3>Technologies</h3>
        <div className='technology-info'></div>
      </div>
      <div id='informations'>
        <div id='languages'>
          <h3>Languages</h3>
          <p>Portuguese – Native Speaker</p>
          <p>English – Intermediate</p>
        </div>
        <div id='educations'>
          <h3>Education</h3>
          <div className='education-info'></div>
        </div>
      </div>
      <div id='contact'>
        <button>Contact me</button>
      </div>
    </main>
  )
}
