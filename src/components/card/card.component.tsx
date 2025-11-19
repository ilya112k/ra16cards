import React from 'react';
import {CardComponentProps} from "./card.component.props.tsx";

import './card.css';

const CardComponent = (props: CardComponentProps) => {
  const images = React.Children
    .map(props.children, child  => <div className='image'>{child}</div>)

  return (
    <div className="card" style={{width: props.width}}>
      {images}
      <div className="card-body">
        <h5 className="card-body_title">{props.title}</h5>
        <p className="card-body_description">{props.description}</p>
        <a href={props.href} className="card-body_button btn btn-primary">{props.button}</a>
      </div>
    </div>
  )
}

export default CardComponent
