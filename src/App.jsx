
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './App.css'
import pic from './assets/headshot.png'
import Typewriter from './components/Typewriter'
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import 'bootstrap/dist/css/bootstrap.css'
import { Navbar } from 'react-bootstrap'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import secondpic from './assets/concertPic.png'
const res="https://drive.google.com/file/d/14HgsbibdlDcpnxSeHazRKjeoc0e32YEV/view?usp=sharing";
function App() {
  return(
    <div className='app'>

      <Navbar className="navbar navbar-dark  bg-dark sticky-top rounded-pill"  >
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="#about">About</a>
            <a class="nav-item nav-link" href="#projects">Projects</a>
            <a class="nav-item nav-link" href="#contact">Contact</a>
          </div>
        </div>
      </Navbar>





      <img className='pic' src={pic} alt="pic"/>
      <h1 className='name'>
        <Typewriter text="Hi, I'm Jashanjodh Bajwa!" delay={50}  />
      </h1>
      
      


      <div class="grid">

        <div class="cell About" id='about'>
          <img className='picTwo' src={secondpic} alt="pic"/>
          <div className='text-container'>
            <h1>Jashanjodh Bajwa</h1>
            <p1>Texas A&M '28 </p1>
            <p>I'm a freshman at Texas A&M University, class of 2028. I am currently a general engineering student looking to enter into Computer Science. My interests mainly lie in data science and cybersecurity, so I will be looking to take classes related to those topics in the future.</p>
          </div>
          
          <div className='resume'>
          <h1>Resume: Click the icon!</h1>
            <li className='resumeIcon'>
                <a  target="_blank" rel='noreferrer' href={res}>
                  <FontAwesomeIcon icon={faFile} color='#000000'/>
                </a>
              </li>
          </div>
          
        </div>



        <div class="cell Projects" id='projects'>
          <h1>Projects:WIP</h1>
          {/*Project site, spot for spotify app */}
        </div>



        <div class="cell Contact" id='contact'>
          {/*Email, linked in, github */}
          <h1>Contact me at my Email: jashanjodhb@gmail.com</h1>
          <h1>Or at one of the following:</h1>
          <ul className='links'>
            <li className='linkedin'>
              <a  target="_blank" rel='noreferrer' href={'https://www.linkedin.com/in/jashanjodh-bajwa-31894231b/'}>
                <FontAwesomeIcon icon={faLinkedin} color='#000000'/>
              </a>
            </li>
            <li className='github'>
              <a  target="_blank" rel='noreferrer' href={'https://github.com/JashanjodhB'}>
                <FontAwesomeIcon icon={faGithub} color='#000000'/>
              </a>
            </li>
            <li className='instagram'>
              <a  target="_blank" rel='noreferrer' href={'https://www.instagram.com/breezyjja/'}>
                <FontAwesomeIcon icon={faInstagram} color='#000000'/>
              </a>
            </li>
          </ul>
        </div>
        
          


       





      </div>
    </div>

  )
}

export default App
