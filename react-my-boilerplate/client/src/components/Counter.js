import React from 'react'
import { connect } from 'react-redux'

let mapStateToProps = (state)=>{
    return {
        value : state.counter.value
    }
}

@connect(mapStateToProps)
export default class extends React.Component{
    render(){
        return(
            <h1>VALUE : {this.props.value}</h1>
        )
    }
}