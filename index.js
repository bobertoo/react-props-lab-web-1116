const React = require('react');
const ReactDOM = require('react-dom');

const Spaceship = require('./components/Spaceship');

ReactDOM.render(
  <div className='container'>
  <Spaceship name="Millennium Falcon" speed="v fast"/>
  </div>,
  document.getElementById('main')
);

require('./test/index-test.js'); // Leave this in!
