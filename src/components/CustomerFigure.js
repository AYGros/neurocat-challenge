import React from 'react';
import { Figure } from "react-bootstrap";

const CustomerFigure = (customer) => {
  return (
    <div>
      <Figure>
        <Figure.Image
          width={75}
          height={180}
          alt="171x180"
          src={customer.customer.icon}
        />
        <Figure.Caption>
         {customer.customer.name}
        </Figure.Caption>
      </Figure>
    </div>
  )
}

export default CustomerFigure
