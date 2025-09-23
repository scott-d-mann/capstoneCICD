import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
        <h1>About Us</h1>
        <p>
            Welcome to our application! This project was created to demonstrate modern web development practices using React.
        </p>
        <p>
            Our goal is to deliver a simple, intuitive, and effective user experience. Thank you for visiting our About page.
        </p>
        <p>
            <Link to="/">← Back to Home</Link>
        </p>
    </div>
);

export default About;