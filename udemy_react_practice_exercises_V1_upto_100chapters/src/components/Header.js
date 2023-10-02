import React from 'react';
import '../styles/_header.css';
export function Header(props){
    return (
      <div className='header-cls mb-10'>
          <div className='container'>
            <div><b>{props.title}</b></div>
            <p>{props.subtitle}</p>
          </div>
      </div>
      );
}