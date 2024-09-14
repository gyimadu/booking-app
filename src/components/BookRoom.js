import React from 'react';
import './BookRoom.css';
import libraryImage from '../images/library.jpg'
import privateImage from '../images/private.jpg'

const BookRoom = () => {
    return (
        // ROOM BOOKING PAGE
        <div>
            <div class="book-room-container">
                <div className='main-page'>
                    <div class="sidebar">
                        <ul>
                            <li>Individual Spaces</li>
                            <li>Group Spaces</li>
                            <li>Conference Spaces</li>
                        </ul>
                    </div>

                    <div class="gallery">
                    </div>
                </div>


                <div class="room-options">
                    <div class="room-option">Room 1</div>
                    <div class="room-option">Room 2</div>
                    <div class="room-option">Room 3</div>
                    <div class="room-option">Room 4</div>
                    <div class="room-option">Room 5</div>
                    <div class="room-option">Room 6</div>
                    <div class="room-option">Room 7</div>
                    <div class="room-option">Room 8</div>
                </div>
            </div>
        </div>
          
    );
}


export default BookRoom;