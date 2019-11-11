import React from 'react';
import { Link } from 'react-router-dom';

export default function Places(props) {
  return (
    <Link to={`/${props.id}`} class='item'>
      <img src={props.photo} alt={`{props.name} logo`} />
      <div class='overlay'>
        <h2>{props.name}</h2>
      </div>
    </Link>
  )
}    