import React from 'react';
import { Card, Button } from 'react-bootstrap';



const slideCard = (cases) => {
  console.log(cases);
  return (
    <div>
      <Card style={{ width: '14rem' }}>
        <Card.Img variant="top" src={cases.cases.image} />
        <Card.Body>
          <Card.Title>{cases.cases.name}</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sint?
          </Card.Text>
          <Button variant="primary">Go to {cases.cases.name}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default slideCard
