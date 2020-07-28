import React, {useState} from 'react'
import { Canvas } from 'react-canvas-js';
import { Card, Image, Grid, Button } from 'semantic-ui-react'
import TypeIt from 'typeit-react'
import swal from 'sweetalert';

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
    // Canvas className="canvas" options={sample1} />
    return(
        <div className="projects">
            <div className="project-box"></div>
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
                    <Card.Header><h1>AnimalGram</h1></Card.Header>
                        <Image src={process.env.PUBLIC_URL + '/AnimalGram.png'} wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            <h3>Social media platform for users to share their pets' pictures.</h3>
                            <h4>Technology used:</h4>
                            <p>Vanilla Javascript</p>
                            <p>Ruby on Rails</p>
                            <p>Semantic-UI-React</p>
                            <p>Bootstrap</p>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={() => window.open("https://github.com/coDeguZo/Mod-3-Project-Frontend")}>Frontend Repo</Button>
                            <span><Button onClick={() => window.open("https://github.com/coDeguZo/Mod-3-Backend-Animalgram")}>Backend Repo</Button></span>
                            <span><Button onClick={() => window.open("https://www.youtube.com/watch?v=ZXldrgXDNXI&t")}>Video Demo</Button></span>
                        </Card.Content>
                    </Card>
                    <Card centered>
                    <Card.Header><h1>Bassy Jobs</h1></Card.Header>
                        <Image src={process.env.PUBLIC_URL + '/BassyJobs.png'} wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            <h3>A job seeking app designed to help job seekers find jobs and help companies list new jobs for hire.</h3>
                            <h4>Technology used:</h4>
                            <p>React.js</p>
                            <p>Ruby on Rails</p>
                            <p>Semantic-UI-React</p>
                            <p>Bootstrap</p>
                            <p>Javascript Web Token (JWT)</p>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={() => window.open("https://github.com/coDeguZo/Mod-4-Frontend-Bassy-Jobs")}>Frontend Repo</Button>
                            <span><Button onClick={() => window.open("https://github.com/coDeguZo/Mod-4-Backend-Bassy-Jobs")}>Backend Repo</Button></span>
                            <span><Button onClick={() => window.open("https://www.youtube.com/watch?v=_l3k-UnIODc&t")}>Video Demo</Button></span>
                        </Card.Content>
                    </Card>
                    <Card centered>
                    <Card.Header><h1>Sports News Network</h1></Card.Header>
                        <Image src={process.env.PUBLIC_URL + '/SPN.png'} wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            <h3>Sports news web application for your up-to-date sports stories.</h3>
                            <h4>Technology used:</h4>
                            <p>React.js</p>
                            <p>Ruby on Rails</p>
                            <p>Semantic-UI-React</p>
                            <p>Bootstrap</p>
                            <p>Javascript Web Token (JWT)</p>
                            <p>NokoGiri WebScraping</p>
                            <p>API's</p>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={() => window.open("https://github.com/coDeguZo/Mod-5-Final-Project-FrontEnd")}>Frontend Repo</Button>
                            <span><Button onClick={() => window.open("https://github.com/coDeguZo/Mod-5-Final-Project-BackEnd")}>Backend Repo</Button></span>
                            <span><Button onClick={() => window.open("https://www.youtube.com/watch?v=utf_OsfIUdo&t")}>Video Demo</Button></span>
                        </Card.Content>
                    </Card>
                    <Card centered>
                    <Card.Header><h1>Coronavirus Tracker</h1></Card.Header>
                        <Image src={process.env.PUBLIC_URL + '/Coronavirus App.png'} wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            <h3>A Global Tracker of the Coronavirus Pandemic.  Get up to date information on Global infections.  Remember to wash your hands and wear a mask!</h3>
                            <h4>Technology used:</h4>
                            <p>React.js</p>
                            <p>Redux.js</p>
                            <p>Ruby on Rails</p>
                            <p>Semantic-UI-React</p>
                            <p>Bootstrap</p>
                            <p>Chart.js and Canvas.js</p>
                            <p>API's</p>
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Button onClick={() => window.open("https://github.com/coDeguZo/HealthCare-Tracker-Frontend")}>Frontend Repo</Button>
                            <span><Button onClick={() => window.open("https://github.com/coDeguZo/HealthCare-Tracker-Backend")}>Backend Repo</Button></span>
                            <span><Button onClick={() => swal({
                                    icon: "info",
                                    text: "Video Coming Soon !"
                                })}>Video Demo</Button></span>
                            {/* <span><Button onClick={() => window.open("https://covid19hltracker.netlify.app/")}>Website</Button></span> */}
                        </Card.Content>
                    </Card>
                </Grid.Row>
            </Grid>
            </div>
        </div>
    )
}

export default Projects