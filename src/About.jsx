import React from 'react'
import pixelAvatar from '/8bitpix.png'
import htmlLogo from '/html.svg'
import cssLogo from '/css.svg'
import jsLogo from '/javascript.svg'
import pythonLogo from '/python.svg'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import gitLogo from '/git.svg'
import nodejsLogo from '/nodejs.svg'
import reactNativeFirebaseLogo from '/react-native-firebase.svg'
import nextjsLogo from '/next-js.svg'
import electronLogo from '/electron.svg'
import tauriLogo from '/tauri.svg'

function About() {
    return(
        <section id='about' className='about'>
            <h1 className='about-header'>
                About
            </h1>

            <div className='about-page'>
                <div className='about-left'>
                    <img className='about-avatar' src={pixelAvatar}></img>

                    <div className='about-content'>
                        <p className='about-content-education'>BASc in Nanotechnology Engineering, Computer Science Option [2024]</p>

                        <p className='about-content-info'>Nice to meet you, I'm Stephen! I am a passionate frontend developer based in the Greater Toronto Area, dedicated to creating dynamic and responsive web applications. With a deep love for all things web-development related, I specialize in bringing intuitive and engaging user experiences to life. My expertise spans across modern web technologies, and I thrive on the challenge of continuously learning and adapting to the ever-evolving landscape of web development.
                            <br></br>
                            <br></br>
                            In my leisure time, I am passionate about maintaining an active lifestyle through regular workouts, bouldering sessions, and basketball.
                        </p>
                    </div>
                </div>

                <div className='about-right'>
                    <h2 className='skills-title'>Tech Stack</h2>

                    <div className='skills-section'>
                        <div className='skills-card'>
                            <a href="https://html.com/" target="_blank">
                                <img src={htmlLogo} className="logo html" alt="HTML logo" />
                            </a>
                            <label>HTML</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://www.w3.org/Style/CSS/Overview.en.html" target="_blank">
                                <img src={cssLogo} className="logo css" alt="CSS logo" />
                            </a>
                            <label>CSS3</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://www.javascript.com/" target="_blank">
                                <img src={jsLogo} className="logo js" alt="Javascript logo" />
                            </a>
                            <label>Javascript</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://www.python.org/" target="_blank">
                                <img src={pythonLogo} className="logo python" alt="Python logo" />
                            </a>
                            <label>Python</label>
                        </div>

                    </div>

                    <div className='skills-section'>

                        <div className='skills-card'>
                            <a href="https://react.dev" target="_blank">
                                <img src={reactLogo} className="logo react" alt="React logo" />
                            </a>
                            <label>React</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://vitejs.dev" target="_blank">
                                <img src={viteLogo} className="logo vite" alt="Vite logo" />
                            </a>
                            <label>Vite</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://git-scm.com/" target="_blank">
                                <img src={gitLogo} className="logo git" alt="Git logo" />
                            </a>
                            <label>Git</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://nodejs.org/en" target="_blank">
                                <img src={nodejsLogo} className="logo nodejs" alt="Nodejs logo" />
                            </a>
                            <label>Node.js</label>
                        </div>

                    </div>

                    <div className='skills-section'>

                        <div className='skills-card'>
                            <a href="https://firebaseopensource.com/projects/rakannimer/react-firebase/" target="_blank">
                                <img src={reactNativeFirebaseLogo} className="logo firebase" alt="Firebase logo" />
                            </a>
                            <label>React Native Firebase</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://nextjs.org/" target="_blank">
                                <img src={nextjsLogo} className="logo nextjs" alt="Nextjs logo" />
                            </a>
                            <label>Next.js</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://www.electronjs.org/" target="_blank">
                                <img src={electronLogo} className="logo electron" alt="Electron logo" />
                            </a>
                            <label>Electron</label>
                        </div>

                        <div className='skills-card'>
                            <a href="https://tauri.app/" target="_blank">
                                <img src={tauriLogo} className="logo tauri" alt="Tauri logo" />
                            </a>
                            <label>Tauri</label>
                        </div>
                    </div>

                </div>

            </div>

            <div className='next-section'>
                <a href='#experiences'>
                    <i className='fa-solid fa-angles-down'></i>
                </a>
            </div>




        </section>
    )
}

export default About