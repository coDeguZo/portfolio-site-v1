import React from 'react'
import { Canvas } from 'react-canvas-js';
import { Image, Segment } from 'semantic-ui-react'
import TypeIt from 'typeit-react'

const sample1 = {
    "maxParticles": 50,
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
    "size": 25,
    "minSpeed": 0.10,
    "maxSpeed": 1,
    "alpha": 0.7,
    "backgroundColor": "#f1f1f1"
  };
  

function Home() {
    return(
        <div>
            <div className="box"><Canvas className="canvas" options={sample1} /></div>
            <div className="box stack-top">
                <div className="home-info">
                    <div>
                    <Image centered className="home-image" src={process.env.PUBLIC_URL + '/UzomaHeadShot3.jpeg'} size="medium" circular/>
                    <br /><br /><br />
                    <TypeIt>
                        <strong className="home-name">Hi, I'm Uzoma Ariguzo</strong>
                        <br /><br />
                        <p className="home-description">FullStack Web Developer, Software Engineer</p>
                    </TypeIt>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
