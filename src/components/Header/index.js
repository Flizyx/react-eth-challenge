import React from 'react'
// const photo = '../../Assets/Images/profile.jpg'
import './Header.css'

const Header = (props) => {
    return (
        <>
            <div className="HeaderContainer">
                <h4 className="Header-title">{props.data.name}</h4>
                <img src={props.data.avatar} alt="ProfilePic" />
                {props.children}
            </div>
        </>
    )
}

export default Header