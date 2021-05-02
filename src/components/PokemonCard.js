import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      imgFront: true
    }
  }
  
  render() {
    return (
      <Card>
        <div>
          <div className="image">
            <img onClick={() => this.setState({imgFront: !this.state.imgFront})} src={this.state.imgFront === true ? this.props.pokemon.sprites.front : this.props.pokemon.sprites.back} alt={this.props.pokemon.name} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.hp}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
