import React from 'react'
import RESUME from '../data/resume.js'
import styled from 'styled-components'
import Skills from './Skills.js'
// import FunFact from '../components/Anecdote.js'
import Experience from '../components/Experience.js'
import Education from '../components/Education.js'
import { device } from '../device';
import TypeIt from 'typeit-react'
import { Canvas } from 'react-canvas-js';



const ResumeContainer = styled.div`
	width: 47%;
	margin: auto;
	@media only screen and ${device.laptop} { 
		width: 50%;
	}
	@media only screen and ${device.tablet} { 
		width: 70%;
	}
	@media only screen and ${device.mobileL} {
		width: 90%;
	}
`

const sample1 = {
    "maxParticles": 100,
    "colors": [
      "#2E1D62",
      "#513D91",
      "#487EEF",
      "#11A887",
      "#fc5c65",
      "#fed330"
    ],
    "shapes": [
      "circle",
	  "square"
    ],
    "size": 10,
    "minSpeed": 0.10,
    "maxSpeed": 1,
    "alpha": 0.7,
    "backgroundColor": "#f1f1f2"
  };
  

function Resume(props)  {
	
	let resume = RESUME
	let education = resume.education.sort((a,b) => a.graduationYear > b.graduationYear ? -1 : 1)

	return (
		<div className="resume">
            <br />
            <br />
            <div className="resume-box"><Canvas className="resume-logos" options={sample1} /></div>
            <div className="resume-box resume-stack-top">
			<br />
			<ResumeContainer>
				<br /><br /><br />
					<TypeIt>
						<strong className="home-name">Resume</strong>
					</TypeIt>
				<br />
				<h1 style={{textAlign: "center"}} >Experience</h1>
				{ resume.experience.map(job => <Experience job={ job } key={ job.company }/> ) }
				<h1 style={{textAlign: "center"}}>Training</h1>
				{ education.map(school => <Education school={ school } key={ school.school }/>) }
				<Skills />
				{/* <h1>Anecdotes.</h1>
				{ resume.funFacts.map(fact => <FunFact fact={ fact } key={fact.fact} />) } */}
			</ResumeContainer>
		</div>
		</div>
	)
}

export default Resume