import React from 'react'
//import { connect } from 'react-redux'
import { MDBCol } from "mdbreact"

export const Search = () => {
    return (
        <div className="search-container">
            <MDBCol md="6">
                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="search" aria-label="Search" />
            </MDBCol>
        </div>
    )
}



export default Search
