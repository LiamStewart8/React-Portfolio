import React from 'react';
import { Card } from "react-bootstrap";

function About() {

    return(
        <div>
            <Card className="text-center">
                <Card.Img variant="top" src={process.env.PUBLIC_URL + "/images/testimage.jpg"} />
                <Card.Body>
                    <Card.Text>
                    My name is Liam Stewart. I am a future Full Stack Web Developer, and 
                            I currently reside in the Bay Area of California. My curiousity for Web Development was a byproduct of growing up playing PC videogames. This curiousity turned in to a new found passion of mine.
                            Web Development has changed my life in the best way possible! Please take a look at my most recent projects in the "Work" tab of my site, and do not hesitate to reach out. My contact links will be at the bottom of
                            each page in the footer.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )   
}

export default About;