import React from 'react'
import { NavLink } from 'react-router-dom'


import * as ReactBootStrap from 'react-bootstrap'



export default function Navbar() {
    return (
        <ReactBootStrap.Navbar collapseOnSelect expand="xl" bg="light" variant="light" className="navbar">
            <ReactBootStrap.Navbar.Brand href='/'>CIRCE</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
                
                <NavLink exact to='/about'className="nav-link">ABOUT</NavLink>
                <NavLink exact to='/images'className="nav-link">IMAGES</NavLink>
                <NavLink exact to='/videos'className="nav-link">VIDEOS</NavLink>
                <NavLink exact to='/posts'className="nav-link">POSTS</NavLink>
                <NavLink exact to='/posts/new'className="nav-link">NEW POST</NavLink>
                <NavLink exact to='/images/new'className="nav-link">NEW IMAGE</NavLink>
                <NavLink exact to='/videos/new'className="nav-link">NEW VIDEO</NavLink>
            </ReactBootStrap.Navbar.Collapse>


        </ReactBootStrap.Navbar>
    )
}

