import React from 'react'

const Profile = (props) => {
    return (
        <div className="ProfileContainer">
            <h4 className="Header-title">{props.data.Profile}</h4>
        </div>
    )
}

export default Profile