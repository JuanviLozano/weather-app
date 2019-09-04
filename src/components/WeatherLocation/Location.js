import React from 'react';
import PropTypes from 'prop-types';

const Location = ({ city }) => (
    // Destructuring
    // const Location = (props) => {} == const Location = ({ city }) => { 
    // const city = props.city; == const { city } = props;
    <div><h1>{city}</h1></div>
);

Location.prototype = {
    city: PropTypes.string.isRequired,
};

export default Location; 