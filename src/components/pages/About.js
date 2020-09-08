import React from 'react'
import { Image, Segment, Grid, Card } from 'semantic-ui-react'
import TypeIt from 'typeit-react'

function About(){

    return(
        <div className="about-page">
            <br /><br/><br /><br />
            <TypeIt>
                <strong className="home-name">About Me</strong>
            </TypeIt>
            <br /><br />
            <Image centered circular size="medium" src="https://avatars3.githubusercontent.com/u/33858127?s=460&u=86b0afa70fbb45a4d176637abe08d13ef20c610a&v=4"/>
            <Segment>
                <h3>
                I am a Full-Stack Software Engineer developing innovative solutions to solve complex problems. My programming journey started in Australia where I learned how to code using the Markup Languages HTML and CSS. 
                Not long after, I started teaching myself Python and have since attended Flatiron School Web Dev Bootcamp, which has progressed my programming knowledge. 
                Before that I worked for the Lutheran Campus Ministry at the University of Maryland and worked with a clothing startup company called MARE. When I'm not writing code I enjoy playing the Piano and playing Basketball!
                </h3>
            </Segment>
            <h3>Check Out Past Web Projects For Prior Jobs:</h3>
            <Grid>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <Card className="card1" centered onClick={() => window.open('https://www.thehumblewalk.com')}>
                            <Image src="https://static.wixstatic.com/media/00c320_4473760b9c5b40bc8e97b1e0af88f6e3~mv2_d_1848_1224_s_2.jpg/v1/fill/w_640,h_830,al_c,q_85,usm_0.66_1.00_0.01/00c320_4473760b9c5b40bc8e97b1e0af88f6e3~mv2_d_1848_1224_s_2.webp"/>
                            <Card.Description>
                                The Humble Walks Official Webbsite Created by Uzoma Ariguzo
                                www.thehumblewalk.org
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                    <Grid.Column>
                    <Card className="card1" centered onClick={() => window.open('https://www.mare-wear.com')}>
                            <Image src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/s960x960/79249969_819215165164693_4922977495625498624_o.jpg?_nc_cat=111&_nc_sid=2d5d41&_nc_ohc=XMdL_omP-RUAX9Ve-hA&_nc_ht=scontent-iad3-1.xx&tp=7&oh=92cba0f8d9494c2481b4c01acd941d31&oe=5F6DA79E"/> 
                            <Card.Description>
                                MARE Clothing Brand Official Website created by Uzoma Ariguzo and Leo Yambo
                                <br />
                                www.mare-wear.com
                            </Card.Description>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}

export default About