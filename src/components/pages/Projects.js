import React, {useState} from 'react'
import { Canvas } from 'react-canvas-js';
import { Card, Image, Grid, Button } from 'semantic-ui-react'
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
    "size": 20,
    "minSpeed": 0.5,
    "maxSpeed": 1,
    "alpha": 0.7,
    "backgroundColor": "#f1f1f1"
  };

function Projects(){
    const [color, setColor] = useState("")

    return(
        <div className="projects">
            <div className="project-box"><Canvas className="canvas" options={sample1} /></div>
            <div className="project-box project-stack-top">
            <br /><br /><br /><br /><br />
            <TypeIt>
                <strong className="home-name">Projects</strong>
            </TypeIt>
            <br />
            <br />
            <Grid>
                <Grid.Row>
                    <Card centered>
                    <Card.Header><h1>Bassy Jobs</h1></Card.Header>
                        <Image src={process.env.PUBLIC_URL + '/BassyJobs.png'} wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            <h3>A job seeking app designed to help job seekers find jobs and help companies list new jobs for hire.</h3>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={() => window.open("https://github.com/coDeguZo/Mod-4-Frontend-Bassy-Jobs")}>Frontend Repo</Button>
                            <span><Button onClick={() => window.open("https://github.com/coDeguZo/Mod-4-Backend-Bassy-Jobs")}>Backend Repo</Button></span>
                            <span><Button onClick={() => window.open("https://www.youtube.com/watch?v=_l3k-UnIODc&t")}>Video Demo</Button></span>
                        </Card.Content>
                    </Card>
                    <Card centered>
                    <Card.Header><h1>AnimalGram</h1></Card.Header>
                        <Image src={process.env.PUBLIC_URL + '/AnimalGram.png'} wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            <h3>Social media platform for users to share their pets' pictures.</h3>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={() => window.open("https://github.com/coDeguZo/Mod-3-Project-Frontend")}>Frontend Repo</Button>
                            <span><Button onClick={() => window.open("https://github.com/coDeguZo/Mod-3-Backend-Animalgram")}>Backend Repo</Button></span>
                            <span><Button onClick={() => window.open("https://www.youtube.com/watch?v=ZXldrgXDNXI&t")}>Video Demo</Button></span>
                        </Card.Content>
                    </Card>
                    <Card centered>
                    <Card.Header><h1>Sports News Network</h1></Card.Header>
                        <Image src={process.env.PUBLIC_URL + '/SPN.png'} wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            <h3>Sports news web application for your up-to-date sports stories.</h3>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={() => window.open("https://github.com/coDeguZo/Mod-5-Final-Project-FrontEnd")}>Frontend Repo</Button>
                            <span><Button onClick={() => window.open("https://github.com/coDeguZo/Mod-5-Final-Project-BackEnd")}>Backend Repo</Button></span>
                            <span><Button onClick={() => window.open("https://www.youtube.com/watch?v=utf_OsfIUdo&t")}>Video Demo</Button></span>
                        </Card.Content>
                    </Card>
                </Grid.Row>
            </Grid>
            </div>
        </div>
    )
}

export default Projects