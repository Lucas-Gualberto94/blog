import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from "./Modal";


const Cards = (props) => {

  const [isOpen, setIsOpen] = useState(false); 

  const [getId, setGetId] = useState('');

  const Clicked = (event) =>{
    return (
      setIsOpen(true),
        setGetId(event.currentTarget.id)
    )
  }

  console.log(getId);



  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {props.filteredData.map((dataCards) => (
          <Col key={dataCards.id}>
              <Card id={dataCards.id} onClick={Clicked} > 
              <Card.Img 
                variant="top"
                width={171}
                height={180}  
                src={dataCards.img} />
              <Card.Body>
                <Card.Title> 
                  {dataCards.title}
                </Card.Title>
                <Card.Text>
                  {dataCards.desc}
                </Card.Text>          
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Modal 
      getId={getId}
      isOpen={isOpen} 
      onClose={() => setIsOpen(false)}
      />
    </div>
  );
}


export default Cards;