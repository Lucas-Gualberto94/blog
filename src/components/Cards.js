import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";


const Cards = (props) => {


  const [isOpen, setIsOpen] = useState(false);
  console.log (isOpen);

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {props.filteredData.map((filteredData) => (
          <Col key={filteredData.id}>
            <Card onClick={() => setIsOpen(!isOpen)}> 
              <Card.Img 
                variant="top"
                width={171}
                height={180}  
                src={filteredData.img} />
              <Card.Body>
                <Card.Title> 
                  {filteredData.title}
                </Card.Title>
                {isOpen && (
                <Card.Text>
                  {filteredData.desc}
                </Card.Text>  
                )}         
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      
    </div>
  );
}


export default Cards;