import React from 'react';
import {Modal} from 'react-bootstrap';

const TeamModal = (props) => {
  return (
    <div>
      <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      
    >
      <Modal.Header  closeButton>
        <Modal.Title id="contained-modal-title-vcenter" >
          <h4>Team</h4>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body >
        <p >
        Our team of 25 mathematicians, computer scientists and industrial engineers brings together the best of both worlds, combining academic with application perspectives and experiences. With different backgrounds, skill sets and a unifying desire to grow, learn and understand the world through modern technology our team is the essence of neurocat. We are based in the innovation and business incubator Berlin-Adlershof which gives us, together with its close proximity to the Humboldt-University of Berlin, the opportunity to build a strong network of like-minded people.
        </p>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
    </div>
  )
}

export default TeamModal
