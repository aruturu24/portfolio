import Header from './components/header';
import Technologies from './components/technologies';
import './page.scss';

export default function Home() {
  return (
    <main>
      <Header/>
      <Technologies/>
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
