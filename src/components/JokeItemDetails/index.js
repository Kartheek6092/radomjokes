import React from 'react';
import {Component} from 'react'
import Popup from 'reactjs-popup';

import './index.css'

class JokeItemDetails extends Component{
    state = {data: ''}

    // componentDidMount(){
    //     this.getJoke()
    // }

    getJoke = async(item) => {
        const url=`https://api.chucknorris.io/jokes/random?category=${item}`
        const options = {
            method: "GET",
        }
        const response = await fetch(url, options)
        const data = await response.json()
        // console.log(data)
        if (response.ok){
            this.setState({data})
        }
    }

    render(){    
        const {item} = this.props
        const {data} = this.state

        if(data===''){
            this.getJoke(item)
        }

        console.log(data)
        

    return(
    <Popup
    trigger={<button className='custom-btn' type='button' >
        <h3 className='topic'>{item}</h3>
        <p className='custom-para'>
            Unlimited jokes on {item}
        </p>
    </button>
    }
    modal
    nested
    >
    {close => (
        <div className="modal">
        <button className="close" onClick={close}>
            &times;
        </button>
        <div className="header">{item} </div>
        <div className="content"> "{data.value}"    </div>
        <div className="actions">
            <Popup>
            
            </Popup>
            {/* <button
            className="button"
            onClick={() => {
                console.log('modal closed ');
                close();
            }}
            >
                 </button> */}
        </div>
        </div>
    )}
    </Popup>
)
}
}

export default JokeItemDetails