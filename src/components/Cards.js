import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Dialog from "./Dialog";


const Cards = (props) => {

  const [openDialog, setOpenDialog] = useState(false);

  return (
    <div>
      <Row xs={1} md={3} className="g-4">
        {props.filteredData.map((filteredData) => (
          <Col key={filteredData.id}>
            <Card onClick={() => {
              setOpenDialog(true);
            }}> 
              <Card.Img 
                variant="top"
                width={171}
                height={180}  
                src={filteredData.img} />
              <Card.Body>
                <Card.Title> 
                  {filteredData.title}
                </Card.Title>
                <Card.Text>
                  {filteredData.desc}
                </Card.Text>          
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {openDialog && <Dialog 
        openDialog={openDialog} 
        setOpenDialog={setOpenDialog}
      /> }
    </div>
  );
}


export default Cards;