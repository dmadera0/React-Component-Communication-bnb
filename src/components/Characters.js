import React from 'react' 
import Card from './Card'

export default function Characters(props ){

    const displayCharacters = ( ) => {
        return props.characters.map(character => {
            return <Card key={character.char_id} character={character} addToAlive ={props.addToAlive}/>
        })
    }
    return (
        <div className='characters'>
            {displayCharacters()}
        </div>
    )
}