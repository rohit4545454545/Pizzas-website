import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import "../styles/About.css";

function About() {
  return (
    <div className="about">
        <div className="aboutTop"style={{ backgroundImage: `url(${MultiplePizzas})` }} >
            About list
        </div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>
Welcome to [Roshan's pizza ghar], where passion meets pizza! We're dedicated to crafting delicious pizzas using the finest ingredients and traditional recipes. Our story began with a love for authentic Italian flavors and a commitment to quality. Each pizza is handcrafted with care, from dough to toppings. Whether you're craving a classic Margherita or a specialty creation, we have something for everyone. Join us for a slice of Italy right here in [Location]. Taste the difference at [Roshan's pizza ghar]!</p>
        </div>
      
    </div>
  )
}

export default About
