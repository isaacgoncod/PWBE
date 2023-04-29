import React from 'react';
import PropTypes from 'prop-types';

export default function Header(props) {
  return (
    <>
      <h1>{props.title}</h1>
      {props.children}
    </>
  );
}

Header.protoTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  title:`JStack's`
}