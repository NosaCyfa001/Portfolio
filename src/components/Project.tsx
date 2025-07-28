import React from "react";
import bba from '../assets/images/bba.png';
import gav from '../assets/images/gav.png';
import gga from '../assets/images/gga.png';
import dav from '../assets/images/dav.png';
import Asa from '../assets/images/Asa.png';
import vac from '../assets/images/vac.png';
import net from '../assets/images/net.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">
                <div className="project">
                    <a href="https://my-netflix-clone-iota.vercel.app/" target="_blank" rel="noreferrer"><img src={net} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://my-netflix-clone-iota.vercel.app/" target="_blank" rel="noreferrer"><h2>Netflix Clone</h2></a>
                    <p>A fully responsive Netflix-inspired streaming platform built with React, Firebase, and TMDB API. This project replicates the core functionality of Netflix, including user authentication, movie browsing, trailers, and personalized lists.
                    </p>
                </div>
                <div className="project">
                    <a href="https://joblordwebapp-tsz4.vercel.app/" target="_blank" rel="noreferrer"><img src={vac} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://joblordwebapp-tsz4.vercel.app/" target="_blank" rel="noreferrer"><h2>Joblord</h2></a>
                    <p>A modern job search platform UI built using next.js & next auth's full authentication support. It provides a clean interface for job seekers to explore listings and for employers to post opportunities. Though primarily a front-end UI, it simulates real-world job board functionality and includes secure login flows.</p>
                </div>

                <div className="project">
                    <a href="https://chatterly-lbrt.vercel.app/" target="_blank" rel="noreferrer"><img src={Asa} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://chatterly-lbrt.vercel.app/" target="_blank" rel="noreferrer"><h2>Chatterly!</h2></a>
                    <p>A minimal Flutter chat app using Firebase involving setting up a Flutter project, integrating Firebase Authentication for user login/registration, and using Firebase Firestore for real-time messaging. The app would likely feature a simple UI with a list of users, a chat room, light & dark mode options.</p>
                </div>
                <div className="project">
                    <a href="https://to-do-lou-flutter-todo-app.vercel.app/" target="_blank" rel="noreferrer"><img src={dav} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://to-do-lou-flutter-todo-app.vercel.app/" target="_blank" rel="noreferrer"><h2>to-do-LOU!</h2></a>
                    <p>A to-do list app build with flutter that allows you to store all yours to-dos in one place. Set reminders, due dates etc. whether for a “me” day or critical project deadline, don't mean much if they're not done in time.</p>
                </div>
                <div className="project">
                    <a href="https://nosacyfa001.github.io/angular-pop-balloon-pop/" target="_blank" rel="noreferrer"><img src={gga} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://nosacyfa001.github.io/angular-pop-balloon-pop/" target="_blank" rel="noreferrer"><h2>Pop Ballon Pop Game</h2></a>
                    <p>This is a fast-paced balloon popping game built with Angular, designed for fun and interactivity. The game challenges users to pop as many balloons as possible within a time limit, offering an engaging way to demonstrate DOM manipulation, animations, and real-time UI updates using Angular’s reactive programming model.</p>
                </div>
                <div className="project">
                    <a href="https://shop-genie-green.vercel.app/" target="_blank" rel="noreferrer"><img src={gav} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://shop-genie-green.vercel.app/" target="_blank" rel="noreferrer"><h2>ShopGen!e</h2></a>
                    <p>A sleek and responsive e-commerce platform built with Next.js, designed to simulate a fully functional online store. It features an intuitive shopping experience with a wide catalog of products including wears, electronics, jewelry, and more, all fetched dynamically from the Fake Store API. This project highlights modern web development practices with a focus on performance, accessibility, and clean UI/UX.</p>
                </div>
                <div className="project">
                    <a href="https://study-buddy-two-eta.vercel.app/" target="_blank" rel="noreferrer"><img src={bba} className="zoom" alt="thumbnail" width="100%" /></a>
                    <a href="https://study-buddy-two-eta.vercel.app/" target="_blank" rel="noreferrer"><h2>StudyBuddy</h2></a>
                    <p> An online learning web application built with next.js containing courses, source codes, documentation etc which I called in using github's api.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;