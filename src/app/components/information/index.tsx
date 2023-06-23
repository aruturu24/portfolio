import './information.scss'

export default function information() {
  return(
    <div id='informations'>
      <div id='languages'>
        <h3 className='section-title'>Languages</h3>
        <p>Portuguese – Native Speaker</p>
        <p>English – Intermediate</p>
      </div>
      <div id='educations'>
        <h3 className='section-title'>Education</h3>
        <div className='education-info'></div>
      </div>
    </div>
  )
}
