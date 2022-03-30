import React, { Component } from 'react'
import Items from '../Components/items'

export default class ApiItems extends Component {
    constructor() {
        super();
        this.state = {
            english: [],
            hindi: [],
            kannada: [],
            telugu: [],
            malayalam: [],
            tamil: [],
            loading: false
        }
    }
    async componentDidMount() {
        let url = 'https://api.ovministries.com/v1/homepage/todays_word/'
        let data = await fetch(url)
        let json_data = await data.json()
        // console.log(json_data)
        this.setState({
            english: json_data.english,
            hindi: json_data.hindi,
            telugu: json_data.telugu,
            tamil: json_data.tamil,
            malayalam: json_data.malayalam,
            kannada: json_data.kannada,
        })
        // console.log(this.state.english)
    }
    render() {
        return (
            <>
                <Items language="English" word={this.state.english.word} quote={this.state.english.quote} />
                <Items language="Hindi" word={this.state.hindi.word} quote={this.state.hindi.quote} />
                <Items language="Kannada" word={this.state.kannada.word} quote={this.state.kannada.quote} />
                <Items language="Telugu" word={this.state.telugu.word} quote={this.state.telugu.quote} />
                <Items language="Malayalam" word={this.state.malayalam.word} quote={this.state.malayalam.quote} />
                <Items language="Tamil" word={this.state.tamil.word} quote={this.state.tamil.quote} />
            </>
        )
    }
}
