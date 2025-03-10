import codeNetworkLogo from './assets/branding/codeNetworkLogo.png'
import squiggle from './assets/branding/squiggle.png'
import squiggle_reverse from './assets/branding/squiggle-reverse.png'
import './titlebar.css'

export default function TitleBar() {
  return (
    <>
      <div className='navigation-bar'>
      <img src={squiggle} className="squiggle"/>
        <a href="https://www.codenetwork.co/projects" target="_blank">
          <img src={codeNetworkLogo} className="logo" alt="Code Network Logo" />
        </a>
        <img src={squiggle_reverse} className="squiggle"/>
      </div>
    </>
  )
}