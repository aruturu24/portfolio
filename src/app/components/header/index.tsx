import Image from 'next/image'
import './header.scss'

export default function Header() {
  return(
    <div id='header'> 
      <div>
        <h1>Arthur Gabryel</h1>
        <h2>Fullstack Developer</h2>
      </div>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo" 
        width={325}
        height={325}
        priority
      />
    </div>
  )
}
