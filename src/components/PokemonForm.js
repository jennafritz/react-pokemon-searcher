import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      hp: '',
      sprites: {
        front: '',
        back: ''
      }

    }
  }
  
  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={(event) => this.props.handleSubmit(event, this.state)}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" value={this.state.hp} onChange={(event) => this.setState({hp: event.target.value})}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" value={this.state.sprites.front} onChange={(event) => this.setState({sprites: {...this.state.sprites, front: event.target.value}})}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" value={this.state.sprites.back} onChange={(event) => this.setState({sprites: {...this.state.sprites, back: event.target.value}})}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
