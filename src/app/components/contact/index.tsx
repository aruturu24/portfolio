import Github from '../icons/github'
import Instagram from '../icons/instagram'
import Linkedin from '../icons/linkedin'
import Twitter from '../icons/twitter'
import './contact.scss'

export default function Contact() {
  return(
    <div id='contact'>
      <div id='social-medias'>
        <a href='https://github.com/aruturu24'><Github/></a>
        <a href='https://linkedin.com/in/aruturu24'><Linkedin/></a>
        <a href='https://twitter.com/aruturu24'><Twitter/></a>
        <a href='https://instagram.com/aruturu24'><Instagram/></a>
      </div>
      <button><a href='mailto:aruturu24@hotmail.com'>Contact me</a></button>
    </div>
  )
}
