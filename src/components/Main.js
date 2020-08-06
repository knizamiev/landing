import React from 'react';
import './main.css'
import Logo from '../assets/background-gradient.jpg';

const Main = () => {

    return (
<div>
        <div className='logo'>
            <img src={Logo} alt=""/>
            <div className='info'>
                <p>ps</p>
                <p>best logo og logos</p>
            </div>
        </div>

    <div className='aboutUs'>
        <div className='item'>1</div>
        <div className='item'>2</div>
        <div className='item'>3</div>

    </div>
</div>
    )

};

export default Main;