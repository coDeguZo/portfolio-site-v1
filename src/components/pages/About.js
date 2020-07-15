import React from 'react'
import { Image, Segment, Grid, Card } from 'semantic-ui-react'

function About(){

    return(
        <div className="about-page">
            <br />
            <h1>About Me</h1>
            <Image centered circular size="medium" src="https://avatars3.githubusercontent.com/u/33858127?s=460&u=86b0afa70fbb45a4d176637abe08d13ef20c610a&v=4"/>
            <Segment>
                <h3>
                I am a full-stack engineer developing innovative solutions to solve complex problems. I spent the last few months learning how to code at Flatiron School Web Dev bootcamp. 
                Before that I worked for the Lutheran Campus Ministry at the University of Maryland and worked on a clothing startup called MARE. When I'm not writing code I can be found ouside enjoying nature or playing piano.
                </h3>
            </Segment>
            <h3>Check Out Past Web Projects For Prior Jobs:</h3>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card className="card1">
                            <Image src="https://static.wixstatic.com/media/00c320_4473760b9c5b40bc8e97b1e0af88f6e3~mv2_d_1848_1224_s_2.jpg/v1/fill/w_640,h_830,al_c,q_85,usm_0.66_1.00_0.01/00c320_4473760b9c5b40bc8e97b1e0af88f6e3~mv2_d_1848_1224_s_2.webp"/>
                            <Card.Description>
                                The Humble Walks Official Webbsite Created by Uzoma Ariguzo
                                www.humblewalk.org
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                    <Card className="card1">
                        
                            <Card.Description>
                                The Humble Walks Official Webbsite Created by Uzoma Ariguzo
                                www.humblewalk.org
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default About