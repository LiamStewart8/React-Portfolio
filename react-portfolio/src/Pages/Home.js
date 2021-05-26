import React from 'react';
import { Card } from "react-bootstrap";
import background from "../img/deskpic.jpg";

function HomePage() {

    return (
        <div>
            <Card>
                <Card.Img src={background} alt="Card image" />
                <Card.ImgOverlay>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default HomePage;