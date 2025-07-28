import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAndroid } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/About.scss';
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faCertificate, faSchool } from "@fortawesome/free-solid-svg-icons";

const labelsFirst = [
    "HTML5",
    "CSS3",
    "SASS",
    "JavaScript",
    "TypeScript",
    "React",
    "Git",
    "Next.Js",
    "Flutter",
];


function About() {
    return (
        <div className="container" id="about">
            <div className="skills-container">
                <h1>About Me</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faAndroid} size="3x" />
                        <h3>Web & Mobile Development</h3>
                        <p>As someone that has passionately been doing this for a while, I've worked on variety of projects with a couple displayed on my github repo while others couldn't make it to production for some reasons but it all helped in terms of levelling up my problem solving skills.
                            <br />
                            <br />
                               Am also experienced at designing unit tests to measure the effectiveness of software
                            programs, back-end services & user interfaces.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Tech stack:</span>
                            {labelsFirst.map((label, index) => (
                                <Chip key={index} className='chip' label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faUserCircle} size="3x" />
                        <h3>Personal Details</h3>

                        <p> Date of Birth : 30/01/2002</p>
                        <p>Nationality : Nigerian</p>
                        <p>Gender : Male</p>
                        <p>Hobbies: Working Out, Coding, Listening to Music, Video Games, etc</p>
                        <h4>nosacyfa02@gmail.com
                            <br />
                            ugobornosa3@gmail.com
                        </h4>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faSchool} size="3x" />
                        <h3>Education</h3>
                        <p>NIIT, Benin Centre (Coding Bootcamp)
                            <br />
                            2022 - 2023
                            <br />
                            <FontAwesomeIcon icon={faCertificate} size="1x" /> Diploma in Web Development </p>

                        <p>Leaders College
                            <br />
                            2017
                            <br />
                            <FontAwesomeIcon icon={faCertificate} size="1x" /> SSCE (WAEC) Certificate</p>


                        <p>Lina Group of Schools, Benin City, Edo State.
                            <br />
                            2011
                            <br />
                            <FontAwesomeIcon icon={faCertificate} size="1x" /> Primary School Certificate </p>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;