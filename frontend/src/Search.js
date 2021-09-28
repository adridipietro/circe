import React from 'react'
//import { connect } from 'react-redux'
//import { MDBCol } from "mdbreact"



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
    }

    handleChange = (e) => {
        this.setState({
            query: e.target.value
        })
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
                    <input type="text" className="searchTerm" onChange={this.handleChange} placeholder="what are you looking for?"/>
                    <button type="submit" className="searchButton" onClick={() => this.handleClick(this.state.query, this.props.updateQuery)}>
                        <i className="fa fa-search"></i>
                    </button>
                </div>
         </div>
        )
    }
}

export default Search