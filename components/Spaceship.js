const React = require('react')

class Spaceship extends React.Component {
  render(){
    return (
      <div>
        <h1>{this.props.name}</h1>
        <h2>{this.props.speed}</h2>
        <h2>{this.props.hasRockets ? 'has rockets' : 'no rockets'}</h2>
        <h2>{this.props.colors.join(', ') }</h2>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

module.exports = Spaceship
