import React, { useState } from 'react';

const FormValidationApp = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        hobbies: [],
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        hobbies: '',
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            if (checked) {
                setFormData({
                    ...formData,
                    hobbies: [...formData.hobbies, value],
                });
            } else {
                setFormData({
                    ...formData,
                    hobbies: formData.hobbies.filter((hobby) => hobby !== value),
                });
            }
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm(formData);
        if (Object.keys(validationErrors).length === 0) {
            alert('Form submitted successfully!');
            setFormData({
                name: '',
                email: '',
                age: '',
                gender: '',
                hobbies: [],
            });
        } else {
            setErrors(validationErrors);
        }
    };

    const validateForm = (data) => {
        const errors = {};

        if (!data.name) {
            errors.name = 'Name is required';
        }

        if (!data.email) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(data.email)) {
            errors.email = 'Invalid email format';
        }

        if (!data.age || data.age <= 0) {
            errors.age = 'Age must be a positive number';
        }

        if (!data.gender) {
            errors.gender = 'Gender is required';
        }

        if (data.hobbies.length === 0) {
            errors.hobbies = 'At least one hobby should be selected';
        }

        return errors;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div style={{ textAlign: 'center' }}>
            <h1>Form Validation</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <div style={{ color: 'red' }}>{errors.name}</div>
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    <div style={{ color: 'red' }}>{errors.email}</div>
                </div>
                <div>
                    <label>Age:</label>
                    <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleChange}
                    />
                    <div style={{ color: 'red' }}>{errors.age}</div>
                </div>
                <div>
                    <label>Gender:</label>
                    <select name="gender" value={formData.gender} onChange={handleChange}>
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                    <div style={{ color: 'red' }}>{errors.gender}</div>
                </div>
                <div>
                    <label>Hobbies:</label>
                    <div>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="Reading"
                                checked={formData.hobbies.includes('Reading')}
                                onChange={handleChange}
                            />
                            Reading
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="Sports"
                                checked={formData.hobbies.includes('Sports')}
                                onChange={handleChange}
                            />
                            Sports
                        </label>
                        <label>
                            <input
                                type="checkbox"
                                name="hobbies"
                                value="Music"
                                checked={formData.hobbies.includes('Music')}
                                onChange={handleChange}
                            />
                            Music
                        </label>
                    </div>
                    <div style={{ color: 'red' }}>{errors.hobbies}</div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default FormValidationApp;
