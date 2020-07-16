import React from 'react'
import { Canvas } from 'react-canvas-js';
import { Card, Image, Grid } from 'semantic-ui-react'

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
    "maxSpeed": 0.2,
    "alpha": 0.7,
    "backgroundColor": "#f1f1f1"
  };

function Projects(){
    return(
        <div className="projects">
            <div className="project-box"><Canvas className="canvas" options={sample1} /></div>
            <div className="project-box project-stack-top">
            <br />
            <h1>Technical Projects</h1>
            <br />
            <Grid>
                <Grid.Row>
                    <Card centered>
                    <Card.Header><h1>Bassy Jobs</h1></Card.Header>
                        <Image src="https://media-exp1.licdn.com/dms/image/sync/C4D27AQFlh0DvNskcKg/articleshare-shrink_480/0?e=1594929600&v=beta&t=fDhmKJnGvmuyLThRBqdeQTB4-8x1bDlOIdME0m8lOaE" wrapped ui={false} />
                        <Card.Content>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                    <Card centered>
                        <Image src="https://media-exp1.licdn.com/dms/image/sync/C4D27AQHrW3vQjVGLng/articleshare-shrink_160/0?e=1594929600&v=beta&t=d5viFPAHBRpypgIeXz2dTVhvumBTTM0sW41560BXskk" wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                    <Card centered>
                        <Image src="https://media-exp1.licdn.com/dms/image/sync/C4D27AQFGjlNKRkxxmg/articleshare-shrink_160/0?e=1594929600&v=beta&t=sznVkgpOekX9ZglN3e3AON4mZvFAQ1uZQg7zhEPQBK4" wrapped ui={false} />
                        <Card.Content>
                        <Card.Header>Matthew</Card.Header>
                        <Card.Meta>
                            <span className='date'>Joined in 2015</span>
                        </Card.Meta>
                        <Card.Description>
                            Matthew is a musician living in Nashville.
                        </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                </Grid.Row>
            </Grid>
            </div>
        </div>
    )
}

export default Projects