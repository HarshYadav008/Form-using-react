import React, { useState, useEffect } from 'react';

const App = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        id: '',
        password: '',
        phone: '',
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^[0-9]{10}$/;

        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.email || !emailRegex.test(formData.email)) tempErrors.email = 'Valid email is required';
        if (!formData.id) tempErrors.id = 'ID is required';
        if (!formData.password || formData.password.length < 6) tempErrors.password = 'Password must be at least 6 characters';
        if (!formData.phone || !phoneRegex.test(formData.phone)) tempErrors.phone = 'Phone must be a 10-digit number';

        return tempErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const tempErrors = validate();
        setErrors(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            setIsSubmitted(true);
        }
    };

    useEffect(() => {
        if (isSubmitted) {
            alert('Form submitted successfully');
        }
    }, [isSubmitted]);

    const formStyle = {
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f9f9f9',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '5px',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        backgroundColor: '#007BFF',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    };

    const errorStyle = {
        color: 'red',
        fontSize: '12px',
    };

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <h1>Form</h1>
            <form style={formStyle} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Name"
                    value={formData.name}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.name && <p style={errorStyle}>{errors.name}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.email && <p style={errorStyle}>{errors.email}</p>}

                <input
                    type="text"
                    name="id"
                    placeholder="Enter ID"
                    value={formData.id}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.id && <p style={errorStyle}>{errors.id}</p>}

                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.password && <p style={errorStyle}>{errors.password}</p>}

                <input
                    type="text"
                    name="phone"
                    placeholder="Enter Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    style={inputStyle}
                />
                {errors.phone && <p style={errorStyle}>{errors.phone}</p>}

                <button type="submit" style={buttonStyle}>
                    Submit
                </button>
            </form>
        </div>
    );
};

export default App;
