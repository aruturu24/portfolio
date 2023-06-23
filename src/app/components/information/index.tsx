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
        <div className='education-info'>
          <span>🎓</span>
          <p>System Analysis and Development – FAM Centro Universitário – 2023/01 - 2025/06</p>
        </div>
      </div>
    </div>
  )
}
