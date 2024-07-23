import React from 'react'
import {useState} from 'react'
import introImage from '/bg-7.jpg'

function Nav() {
    return(
        <div className='about-section'>
            <nav className='navbar'>
                <h2 className='navbar-name'>Stephen Ma-Pan</h2>
                <div className='navbar-content'>
                    <a href="#about">About</a>
                    <a href='#experiences'>Experience</a>
                    <a href='#projects'>Projects</a>
                    <a href='#contact'>Contact</a>
                </div>
            </nav>

            <div className='intro'>
                <img src={introImage} className='intro-image' alt="Intro Background Image"/>
                

                <div class="home-title">
                    <h1 className='intro-name'>
                        Hey, 
                        <br></br>
                        <span className='black first'>I'm Stephen,</span>
                        <span className='second'>Frontend Developer</span>
                    </h1>
                    <p className='intro-title'>
                        Focused primarily on React and Javascript Web Development
                    </p>
                    <a href='#about'>
                        <button className='intro-button'>
                            Get to know me
                        </button>
                    </a>
                </div>
            </div>
            
        </div>
    )
}

export default Nav