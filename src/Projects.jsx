import React from 'react'
import memeGenerator from '/meme-generator.png'
import notesApp from '/notes-app.png'
import webPortfolio from '/web-portfolio.png'
import nbaFantasy from '/nba-fantasy-stat-tracker.jpg'

function Projects() {
    return(
        <section id='projects' className='projects'>
            <h1 className='projects-header'>
                Projects
            </h1>

            <div className='project-card-1'>
                <img src={memeGenerator}></img>

                <div className='project-content-card'>
                    <h2>// Meme Template Generator App //</h2>
                    <p>Create and customize hundreds of the web's most popular memes for your own personal use!</p>

                    <a href='https://tranquil-strudel-7cd761.netlify.app/' target='_blank'>
                        <button className='project-button'>View Demo</button>
                    </a>
                    <br></br>
                    <br></br>

                    <a href='https://github.com/stephmapan/Meme-Template-Generator' target='_blank'>
                        <button className='project-button'>Learn More</button>
                    </a>
                </div>
            </div>

            <div className='project-card-alt'>

                <div className='project-content-card-alt'>
                    <h2>// Note Taking App //</h2>
                    <p>An online note-taking application enabling users to create, organize, and access their notes digitally from any device, facilitating efficient information management and collaboration.</p>

                    <a href='https://teal-praline-747cc4.netlify.app' target='_blank'>
                        <button className='project-button'>View Demo</button>
                    </a>
                    <br></br>
                    <br></br>

                    <a target='_blank'>
                        <button className='project-button'>Learn More</button>
                    </a>
                </div>

                <img src={notesApp} className='notes-app-img'></img>
            </div>

            <div className='project-card-1'>
                <img src={webPortfolio} className='web-portfolio-img'></img>

                <div className='project-content-card'>
                    <h2>// Personal Online Web Portfolio //</h2>
                    <p>My online web portfolio created using React and Javascript, hosted on Github Pages.</p>

                    <a target='_blank'>
                        <button className='project-button'>View Demo</button>
                    </a>
                    <br></br>
                    <br></br>

                    <a target='_blank'>
                        <button className='project-button'>Learn More</button>
                    </a>
                </div>

            </div>

            <div className='project-card-alt'>

                <div className='project-content-card-alt'>
                    <h2>// NBA Fantasy - Stat Tracker App //</h2>
                    <p>An online application enabling users to add active NBA players to their roster and efficiently track their stats on a game-to-game basis and draw comparisons to their performance in prior weeks.</p>

                    <a target='_blank'>
                        <button className='project-button'>Under Development</button>
                    </a>
                    <br></br>
                    <br></br>

                    <a target='_blank'>
                        <button className='project-button'>Learn More</button>
                    </a>
                </div>

                <img src={nbaFantasy} className='notes-app-img'></img>
            </div>

            <div className='next-section'>
                <a href='#contact'>
                    <i className='fa-solid fa-angles-down'></i>
                </a>
            </div>
        </section>
    )
}

export default Projects