import React from 'react';
import {Card, Accordion} from 'react-bootstrap' 

const FAQCard = ({questions}) => {
  return (
    <div>
      <Card>
                <Accordion.Toggle className="toggle" as={Card.Header} eventKey={questions.id}>
                  <h4>{questions.question}</h4>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={questions.id}>
                  <Card.Body>
                    <p>{questions.answer}</p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
    </div>
  )
}

export default FAQCard
