const React = require('react');

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p>speed: {this.props.speed}</p>
        <p>rockets: {this.props.hasRockets ? 'yes' : 'no'}</p>
        {this.props.colors.map(color => <p>color {color}</p>)}
        <p>colors: {this.props.colors.join(', ') }</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: [
    'black',
    'red'
  ]
};


module.exports = Spaceship;
