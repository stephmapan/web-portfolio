import React from 'react'

function Experiences() {
    return(
        <section id='experiences' className='experiences'>
            <h1 className='experiences-header'>
                Experiences
            </h1>

            <div className='experiences-content'>
                <div className='experiences-content-card'>
                    <div className='job-header'>
                        <h3 className='company-title'>Pillar to Post</h3>
                        <p className='work-duration'>Jan 2023 - Aug 2023</p>
                    </div>
                    <p className='job-title'>DevOps Specialist</p>
                    <ul>
                        <li className='experience-point'>Implemented CI/CD pipelines using Jenkins and GitLab CI, reducing deployment time by 40% and ensuring consistent application releases for home inspection software.</li>
                        <li className='experience-point'>Migrated legacy applications to Docker containers, streamlining development workflows and achieving a 30% increase in deployment speed and efficiency.</li>
                        <li className='experience-point'>Collaborated with product and support teams to ensure DevOps solutions align with customer needs, enhancing the overall user experience of home inspection services.</li>
                    </ul>
                </div>
            
                <div className='experiences-content-card'>
                    <div className='job-header'>
                        <h3 className='company-title'>Blackberry</h3>
                        <p className='work-duration'>Sept 2021 - Apr 2022</p>
                    </div>
                    <p className='job-title'>Backend Database Platformer</p>
                    <ul>
                        <li className='experience-point'>Successfully executed multiple platform migrations and version upgrades for databases including PostgreSQL, MariaDB, and MS-SQL for existing clients, utilizing scripts imported from GitHub and cloud storage into UNIX/Linux environments.</li>
                        <li className='experience-point'>Designed, developed, and maintained numerous Bash scripts to facilitate the replication, upgrading, and rebooting of database nodes and servers. Documented usage procedures in Blackberry’s internal wiki for database administrators (DBAs).</li>
                        <li className='experience-point'>Efficiently resolved ad-hoc JIRA tickets addressing software malfunctions and database issues for the business development teams.</li>
                        <li className='experience-point'>Led weekly meetings with DBAs to review project progress and milestones. Developed a Python script to extract ticket data from JIRA, generating key metrics to improve team performance visibility.</li>
                    </ul>
                </div>
            </div>

            <div className='next-section'>
                <a href='#projects'>
                    <i className='fa-solid fa-angles-down'></i>
                </a>
            </div>

        </section>
    )
}

export default Experiences
