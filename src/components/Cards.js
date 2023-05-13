import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cards = (props) => {

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {props.infoCards.map((infoCards) => (
          <Col>
            <Card>
              <Card.Img 
                variant="top"
                width={171}
                height={180} 
                src="../Assets/img1.png" />
              <Card.Body>
                <Card.Title> 
                  <a href="../Assets/img1.png">{infoCards.title}</a>
                </Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

    </div>
  );
}


export default Cards;