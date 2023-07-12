import { Component } from 'react'

import JobItemDetails from '../JokeItemDetails'

import {JokesContainer, Heading, CustomUl, JokeItem } from './styledComponents'
import './index.css'

class RandomJokes extends Component{
    state = {topics: []}

    componentDidMount(){
        this.setTopics()
    }

    setTopics = async() => {
        const url = 'https://api.chucknorris.io/jokes/categories'
        const options = {
            method:'GET',
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)

        if (response.ok===true){
            this.setState({topics: data})
        }

    }

    popupJoke = () => {
    console.log('popup triggered')
    return <JobItemDetails />
}
    

    render(){
        const {topics} = this.state

        return(
            <JokesContainer>
                <Heading className='heading'>Chuck Norries</Heading>
                
                <CustomUl>
                    {topics.map(item=>(
                    <JokeItem>
                        <JobItemDetails item={item} />
                    </JokeItem>
                    ))}
                </CustomUl>
            </JokesContainer>
        )
    }
}

export default RandomJokes