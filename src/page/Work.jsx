import React from "react";
import './Work.css'
import { RiStackFill } from "react-icons/ri";
function Work() {
  return (
    
    <div class="grid-container">
        <div class="grid-item About">
            <p>About</p>
        </div>
        <div class="grid-item WG">
            <p>Work</p>
        </div>
        <div class="grid-item Skill">
            <p>Skill</p>
        </div>
        <div class="grid-item Serv">
            <p>Service</p>
        </div>
        <div class="grid-item Port">
            <p>Portfolio</p>
        </div>
        <div class="grid-item Cert">
            <h1 style={{fontSize:30}}> 40+ </h1>
            <p>Certificate</p>
        </div>
        <div class="grid-item Design">
            <p>Design</p>
        </div>
        <div class="grid-item Colab">
            <p>Collaborations</p>
        </div>
        <div class="grid-item Clien">
            <p>Clients</p>
        </div>
        <div class="grid-item Award">
            <p>Award</p>
        </div>
        <div class="grid-item Why">
            <p>Why to Chose Us ?</p>
        </div>


    </div>
  );
}

export default Work;
