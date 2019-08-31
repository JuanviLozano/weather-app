import React from 'react';

const Location = ({ city }) => (
    // Destructuring
    // const Location = (props) => {} == const Location = ({ city }) => { 
    // const city = props.city; == const { city } = props;
    <div><h1>{city}</h1></div>
);

export default Location; 