import React from 'react';
import EventItem from './EventItem'
import './Events.css'

const Events = () => {
    return ( 
    <>
        <div className="cards">
        <div className="cards__container">
            <h1>Strengthing Arts</h1>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <EventItem 
                    src='./images/oromo-art-1.jpg'
                    text="Oromo Arts Development"
                    label='Arts'
                    path='/oromo-arts'
                    />
                    <EventItem 
                    src='./images/oromo-unity.jfif'
                    text="Forstering Unity"
                    label='Unity'
                    path='/oromo-unity'
                    />
                </ul>
                <ul className="cards__items">
                    <EventItem 
                    src='./images/peace-democracy.jpg'
                    text="Strengthening Peace and Democracy"
                    label='Peace'
                    path='/peace'
                    />
                    <EventItem 
                    src="./images/fundraising.jpg"
                    text="Fundraising"
                    label='Charity'
                    path='/fundraising'
                    />
                    <EventItem 
                    src="./images/oromo-charity.jpg"
                    text="Advancing Charitable Causes"
                    label='Charity'
                    path='/charity'
                    />
                </ul>
            </div>
        </div>
        </div>
    </>
     );
}
 
export default Events;