import React from 'react';
import { Card, Button } from 'react-bootstrap';



const slideCard = ({cases}) => {
  console.log(cases);
  return (
    <div>
      <Card style={{ width: '16rem', height: '22rem', boxShadow:"0 0 1rem 0.2rem lightgrey" }}>
        <Card.Img variant="top" src={cases.image} style={{height: '8rem', objectFit: 'cover'}}/>
        <Card.Body>
          <Card.Title>{cases.name}</Card.Title>
          <Card.Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, sint?
          </Card.Text>
          <Button variant="primary">Go to {cases.name}</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default slideCard
