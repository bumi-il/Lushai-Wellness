import { useState } from 'react';
import './Contact.css';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Form = () => {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='contact-form-container'>
            <div>
                <h1>Get in Touch</h1>
                <p>
                    Have a question or just want to say hi? We'd love to hear from
                    you.
                </p>
                <p>Fill up the form and our Team will get back to you soon.</p>
            </div>
            <form
                onSubmit={handleSubmit}
                className='contact-form'
            >
                <div>
                    <input
                        placeholder='First Name'
                        name='firstName'
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Last Name'
                        name='lastName'
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <input
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                    />
                    <input
                        placeholder='Subject'
                        name='subject'
                        onChange={handleChange}
                    />
                </div>
                <textarea
                    placeholder='Message'
                    name='message'
                    onChange={handleChange}
                />
                <button
                    type='submit'
                    onSubmit={handleSubmit}
                >
                    Send Message
                </button>
            </form>
        </div>
    );
};

const Contact = () => {
    return (
        <div className='contact'>
            <Form />
            {/* map with location of the spa*/}
            <div className='map'>
                <MapContainer
                    center={[23.7271, 92.7197]}
                    zoom={16}
                    style={{ height: '400px', width: '100%' }}
                >
                    <TileLayer
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                        attribution='&copy; OpenStreetMap contributors'
                    />
                    <Marker position={[23.7271, 92.7197]}>
                        <Popup>
                            Lalhmingthanga Building, Zarkawt, Aizawl, Mizoram
                            796007, India
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Contact;
