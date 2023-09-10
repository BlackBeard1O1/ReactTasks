import React, { useState } from 'react';

const UserProfile = () => {
    // Initial user information
    const initialUser = {
        name: 'Henok Z',
        email: 'henok@gmail.com',
        contact: '123-456-999',
        profilePhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcdsC6_g4tHOfg6UsEMCzvW4cqwK6nXUCljg&usqp=CAU'
    };

    const [user, setUser] = useState(initialUser);
    const [editMode, setEditMode] = useState(false);
    const [tempProfilePhoto, setTempProfilePhoto] = useState(user.profilePhoto);

    const handleEditClick = () => {
        setEditMode(true);
    };

    const handleSaveClick = () => {
        setEditMode(false);
        setUser({
            ...user,
            profilePhoto: tempProfilePhoto,
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleProfilePhotoChange = (e) => {
        const url = e.target.value;
        setTempProfilePhoto(url);
    };

    return (
        <div style={containerStyle}>
            <h1>User Profile</h1>
            <div style={profileStyle}>
                <div style={profileImageContainerStyle}>
                    <img
                        src={tempProfilePhoto}
                        alt="Profile"
                        style={profileImageStyle}
                    />
                </div>
                {editMode && (
                    <div style={inputContainerStyle}>
                        <label style={labelStyle}>Image:</label>
                        <input
                            type="text"
                            name="profilePhoto"
                            value={tempProfilePhoto}
                            onChange={handleProfilePhotoChange}
                            placeholder="Enter Profile Photo URL"
                            style={inputStyle}
                        />
                    </div>
                )}
                <form style={formStyle}>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Name:</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="name"
                                value={user.name}
                                onChange={handleInputChange}
                                placeholder="Enter Name"
                                style={inputStyle}
                            />
                        ) : (
                            <div style={valueStyle}>{user.name}</div>
                        )}
                    </div>

                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Email:</label>
                        {editMode ? (
                            <input
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInputChange}
                                placeholder="Enter Email"
                                style={inputStyle}
                            />
                        ) : (
                            <div style={valueStyle}>{user.email}</div>
                        )}
                    </div>
                    <div style={inputGroupStyle}>
                        <label style={labelStyle}>Contact:</label>
                        {editMode ? (
                            <input
                                type="text"
                                name="contact"
                                value={user.contact}
                                onChange={handleInputChange}
                                placeholder="Enter Contact"
                                style={inputStyle}
                            />
                        ) : (
                            <div style={valueStyle}>{user.contact}</div>
                        )}
                    </div>
                </form>
                {editMode ? (
                    <button onClick={handleSaveClick} style={buttonStyle}>Save</button>
                ) : (
                    <button onClick={handleEditClick} style={buttonStyle}>Edit Profile</button>
                )}
            </div>
        </div>
    );
};

const containerStyle = {
    textAlign: 'center',
};

const profileStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #ccc',
    padding: '20px',
    borderRadius: '5px',
};

const profileImageContainerStyle = {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    overflow: 'hidden',
    marginBottom: '10px',
};

const profileImageStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
};

const inputContainerStyle = {
    marginBottom: '10px',
};

const labelStyle = {
    display: 'inline-block',
    width: '120px',
    fontWeight: 'bold',
};

const formStyle = {
    width: '20%',
};

const inputGroupStyle = {
    marginBottom: '10px',
    display: 'flex',
    alignItems: 'center',
};

const inputStyle = {
    flex: '1',
    padding: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
};

const valueStyle = {
    flex: '1',
    display: 'inline-block',
    paddingLeft: '5px',
};

const buttonStyle = {
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
};

export default UserProfile;
