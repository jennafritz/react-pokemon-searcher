import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemons: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(pokemonArray => this.setState({pokemons: pokemonArray}))
  }

  handleSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSubmit = (event, newPokemon) => {
    event.preventDefault()
    console.log(event)
    console.log(newPokemon)

    fetch('http://localhost:3000/pokemon', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newPokemon)
    })
      .then(res => res.json())
      .then(newlyCreatedPokemon => {
        this.setState({
          pokemons: [newlyCreatedPokemon, ...this.state.pokemons]
        })
      })
  }
  
  render() {
    let searchResults = this.state.pokemons.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit}/>
        <br />
        <Search handleSearch={this.handleSearch}/>
        <br />
        <PokemonCollection pokemons={searchResults}/>
      </Container>
    )
  }
}

export default PokemonPage
