import Header from './components/header'
import Technologies from './components/technologies'
import Information from './components/information'
import Contact from './components/contact'
import './page.scss'

export default function Home() {
  return (
    <main>
      <Header/>
      <Technologies/>
      <Information/>
      <Contact/> 
    </main>
  )
}
