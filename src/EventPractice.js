import React, { Component } from 'react'

export default class EventPractice extends Component {

state={
    message: '',
    username:''
}

handleChange=(e)=>{
    this.setState({
        [e.target.name]: e.target.value
    })
}

handleClick=()=>{
    alert(this.state.username + ':' + this.state.message);
    this.setState({
        username:'',
        message:''
    })
}

handleKeyPress = (e)=>{
    if(e.key ==='Enter'){
        this.handleClick();
    }
}

render() {
    return (
        <div>
            <h1>이벤트연습</h1>
            <input
                type="text"
                name="username"
                placeholder='싱기혀요'
                value={this.state.username}
                onChange={this.handleChange}
            />
            <input
                type="text"
                name="message"
                placeholder="뿌뿌뿌"
                value={this.state.message}
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}
            />
            <button onClick={this.handleClick}>    
            확인</button>
        </div>
        )
    }
}
