import React from 'react';
import { Card } from 'react-bootstrap';

const DTpartners = ({number, image, partnertype}) => {
  return (
    <div>
      <Card className="partner-card" style={{ width: 'auto' }}>
              <Card.Img variant="top" src={image} />
              <Card.Body>
                <Card.Title>{partnertype} Partner {number}</Card.Title>
                <Card.Text>
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, soluta.
                </Card.Text>
                <a href="" className="stretched-link"></a>
              </Card.Body>
            </Card>
    </div>
  )
}

export default DTpartners
