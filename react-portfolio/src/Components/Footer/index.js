import React from 'react';
import { Card, } from 'react-bootstrap';
import './style.css';


function Footer() {
    return(
    <div className="Footer">
        <Card className="text-center" bg="dark" text="white" fixed="bottom">
            <Card.Body>
                <Card.Text>
                    Contact Me :  
                    <a href= "https://github.com/LiamStewart8" target="blank"> Github</a> |
                    <a href= "mailto:liamstewartdev@gmail.com"> Email</a> |
                    {/* <a href= ""></a> */}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    );
};

export default Footer;