import React from 'react';
import PropTypes from 'prop-types';

function Home (props) {
  return (
    <>
      {props.children}
    </>
  );
}

Home.propTypes = {
  children: PropTypes.any
};

export default Home;
