import React from 'react'

function Contact() {
    return(
        <section id='contact' className='contact'>
            <h1 className='contact-header'>
                Contact
            </h1>

            <p className='contact-content'>Want to get in touch? Shoot me an email below and I'll <br></br>get back to you as soon as possible! 😎</p>

            <div className='contact-form-container'>
                <form className='contact-form'>
                    <label for="first-name">Full Name:</label>
                    <input type='text' id='first-name' name='first-name' placeholder='John Doe' size={60}></input>

                    <label for="email">E-mail:</label>
                    <input type='text' id='email' name='email' placeholder='johndoe@gmail.com'></input>

                    <label for="message">Message:</label>
                    <textarea id='message' name='message' placeholder='Type your message here' rows={7}></textarea>

                    <button className='submit-button'>Submit</button>
                </form>
            </div>

            <div className='return-top'>
                <a href='#top'>
                    <i className='fa-solid fa-angles-up'></i>
                </a>
            </div>

            <footer className='footer'>

                <div className='footer-icons'>
                    <a href='https://github.com/stephmapan' target='_blank'>
                        <i className='fa-brands fa-github'></i>
                    </a>

                    <a href='mailto: s.mapan3@gmail.com' target='_blank'>
                        <i className='fa-solid fa-envelope'></i>
                    </a>

                    <a href='https://www.instagram.com/stephm_p/' target='_blank'>
                        <i className='fa-brands fa-instagram'></i>
                    </a>
                </div>

                <p>Stephen Ma-Pan @2024</p>

            </footer>


        </section>
    )
}

export default Contact