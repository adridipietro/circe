import React from 'react'
import { Button, Form } from 'react-bootstrap'

//import {updateQuery} from '../actions/index.js'



class Search extends React.Component {
    constructor(){
        super()
        this.state = {
            query: '',
            isQuerySubmitted: false
        }
    
        this.handleClick = this.handleClick.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleClick = (query) => {
        this.props.updateQuery(query)
        this.setState({
            isQuerySubmitted: true
        })
        //this.props.history.push(`/posts`)
    }

    handleChange = (e) => {
        /* this.setState({
            query: e.target.value
        }) */
        this.props.updateQuery(e.target.value)
    }

    render(){
        if (!!this.state.isQuerySubmitted){
            this.setState({
                isQuerySubmitted: false
            })
        }
        return (
            <div>
                <div className="search-container">
                    <input type="text" className="search-form" onChange={this.handleChange} placeholder="search all posts"/>
                    <Button variant="secondary-outline" type="submit" className="searchButton" onClick={() => this.handleClick(this.state.query, this.props.updateQuery)}>
                            <i className="fa fa-search"></i>
                    </Button>
                    
                </div>
         </div>
        )
    }
}

export default Search