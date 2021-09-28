import React from 'react'
//import { connect } from 'react-redux'
import { MDBCol } from "mdbreact"

export const Search = ({searchQuery, setSearchQuery}) => {
    return (
        <div className="search-container">
            <MDBCol md="6">
                <input 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="form-control form-control-sm ml-3 w-75" 
                type="text" 
                placeholder="search" aria-label="Search" 
                name="s"
                />
            </MDBCol>
        </div>
    )
}



export default Search
