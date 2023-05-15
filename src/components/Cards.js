import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Cards = (props) => {


  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {props.infoCards.map((infoCards) => (
          <Col key={infoCards.id}>
            <Card>
              <Card.Img 
                variant="top"
                width={171}
                height={180}  
                src={infoCards.img} />
              <Card.Body>
                <Card.Title> 
                  {infoCards.title}
                </Card.Title>
                <Card.Text>
                  {infoCards.desc}
                </Card.Text>           
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </div>
  );
}


export default Cards;