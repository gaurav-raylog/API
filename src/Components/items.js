import React, { Component } from 'react'
import '../Components/items.css'

export class Items extends Component {
    render() {
        let { language, word, quote } = this.props
        return (
            <div className='card'>
                <div className='card-components'>
                    <h5 className='card-language'>{language}</h5>
                    <p className='card-word'>{word}</p>
                    <p className='card-quote'>{quote}</p>
                </div>
            </div>
        )
    }
}
export default Items