import { useHistory } from 'react-router-dom'

const Logout = () => {
    const history = useHistory()
    
    const handleClick = () => {
        //props.logoutUser() 
        history.push('/')
        
    }
    return (
        <div className="logout-container">
            <br></br>
            <p>Are you sure you want to logout?</p>
            <button type="submit" value="Logout" onClick={handleClick}>Logout</button>
        </div>
    )
}

export default Logout