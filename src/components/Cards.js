import React from 'react';
import CardItem from './CardItem';
import './Cards.css'

const Cards = () => {
    return ( 
        <div className="cards">
        <div className="cards__container">
            <h1>Our Vision and Mission</h1>
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem 
                    src='./images/oromo-art-1.jpg'
                    text="Oromo Arts Development"
                    label='Arts'
                    path='/oromo-arts'
                    />
                    <CardItem 
                    src='./images/oromo-unity.jfif'
                    text="Forstering Unity"
                    label='Unity'
                    path='/oromo-unity'
                    />
                </ul>
                <ul className="cards__items">
                    <CardItem 
                    src='./images/peace-democracy.jpg'
                    text="Strengthening Peace and Democracy"
                    label='Peace'
                    path='/peace'
                    />
                    <CardItem 
                    src="./images/fundraising.jpg"
                    text="Fundraising"
                    label='Charity'
                    path='/fundraising'
                    />
                    <CardItem 
                    src="./images/oromo-charity.jpg"
                    text="Advancing Charitable Causes"
                    label='Charity'
                    path='/charity'
                    />
                </ul>
            </div>
        </div>
        </div>
     );
}
 
export default Cards;