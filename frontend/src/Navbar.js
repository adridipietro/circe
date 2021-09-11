import React from 'react'
import { NavLink } from 'react-router-dom'

const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '5px'
}

const newLink = {
    width: '40px',
    padding: '10px',
    margin: '0 2px 6px',
    background: 'white',
    textDecoration: 'none',
    color: 'black',
    borderRadius: '10px'
}

export default function Navbar() {
    return (
        <nav className="navbar">
             <NavLink exact to='/images' 
                className="nav-link"
                style={link}
                activeStyle={{
                    background: 'black',
                    color: 'white'
                }}
             >IMAGES</NavLink>
             <NavLink exact to='/videos' 
                className="nav-link"
                style={link}
                activeStyle={{
                    background: 'black',
                    color: 'white'
                }}
             >VIDEOS</NavLink>
             <NavLink exact to='/posts' 
                className="nav-link"
                style={link}
                activeStyle={{
                    background: 'black',
                    color: 'white'
                }}
             >POSTS</NavLink>
             <NavLink exact to='/' 
                className="nav-link"
                style={link}
                activeStyle={{
                    background: 'black',
                    color: 'white'
                }}
             >HOME</NavLink>
             <NavLink exact to='/about' 
                className="nav-link"
                style={link}
                activeStyle={{
                    background: 'black',
                    color: 'white'
                }}
             >ABOUT</NavLink>
             <br/>
             <br/>
             <br/>
             <NavLink exact to='/posts/new' 
                className="nav-link"
                style={newLink}
                activeStyle={{
                    background: 'red',
                    color: 'white'
                }}
             >new post</NavLink>
             <NavLink exact to='/images/new' 
                className="nav-link"
                style={newLink}
                activeStyle={{
                    background: 'red',
                    color: 'white'
                }}
             >new image</NavLink>
             <NavLink exact to='/videos/new' 
                className="nav-link"
                style={newLink}
                activeStyle={{
                    background: 'red',
                    color: 'white'
                }}
             >new video</NavLink>


        </nav>
    )
}

