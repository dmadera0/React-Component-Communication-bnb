import React from 'react';
import Characters from './components/Characters'
import './App.css';

class App extends React.Component{

  state = {
    characters: [],
    alive: [],
    deceased: []
  }

  addToAlive =(character)=>{
    if (!this.state.alive.find(aliveCharacter => aliveCharacter === character)){
      const updatedCharacters = this.state.characters.filter(charac => charac !== character)
      this.setState({characters: updatedCharacters, alive: [...this.state.alive, character]})
    }

  }

  componentDidMount(){
    fetch('https://breakingbadapi.com/api/characters')
    .then(response => response.json())
    .then(characters => this.setState({characters}))
  }

  render(){
    return(
      <div className="App">
        <h1>Breaking Bad</h1>
        <main>
          <section className ='all-characters'>
            <h2>All characters</h2>
            <Characters 
            characters={this.state.characters} 
            addToAlive ={this.addToAlive}/>
          </section>
          <div className="sorted-chacaters">
            <section className='alive'>
              <h2>Alive</h2>
              <Characters 
              characters={this.state.alive}
              addToAlive={this.addToAlive}/>
            </section>
            <section className='deceased'>
            <h2>Deceased</h2>
            </section>
          </div>
        </main>
      </div>
    )
  }

}

export default App;
