import React from 'react';
import './Home.css';
import heroImage from '../images/hero-image.png';
import { Link } from 'react-router-dom';

const Homepage = () => {
    return (
        <div className='homepage'>
            <div className='booking-row'>
                <div className='booking-text'>
                    <h3>Book EKS study at your convenience</h3>
                    <p>Skip the line at the desk and have fun studying</p>
                </div>
                
                <div className='search-wrapper'>
                    <form id='roomSearchForm'>
                        <div className='input-container'>
                            <input type='text' id='room' required></input>
                            <label for='room'>Room</label>
                        </div>
                        <div className='input-container'>
                            <input type='time' id='checkin' name='checkin' required/>
                            <label for='checkin'>Check-in</label>
                        </div>
                        <div className='input-container'>
                            <input type='number' id='guests' min='1' value='1' required/>
                            <label for='guests'>Guests</label>
                        </div>
                        <button type='submit'>Search</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Homepage;