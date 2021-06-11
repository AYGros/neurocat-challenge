import React from 'react';
import { Figure } from "react-bootstrap";

const CustomerFigure = (customer) => {
  return (
    <div>
      <Figure className="position-relative customer-figure">
        <Figure.Image
          width={75}
          height={180}
          alt="171x180"
          src={customer.customer.icon}
        />
        <Figure.Caption>
         {customer.customer.name}
        </Figure.Caption>
        <a href={customer.customer.webpage} className="stretched-link"></a>
      </Figure>
    </div>
  )
}

export default CustomerFigure
