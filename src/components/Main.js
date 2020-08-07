import React from 'react';
import './main.css'
import Logo from '../assets/background-gradient.jpg';
import Mall from '../assets/mall.jpg';
import {Img} from 'react-image'



const Main = () => {

    const [state, setState] = React.useState({loaded: false});



    const onImageLoaded = () => {
        setState({loaded: true });
    };

    const { loaded } = state;

            return (
                <div>
                    {      console.log('loaded ',loaded)
                    }
                    <div className='logo'>
                        <Img src={Logo}/>
                        <div className='info'>
                            <p>ps</p>
                            <p>best logo og logos</p>
                        </div>
                    </div>

                    <div className='aboutUs'>

                        <Img src={Mall} loader={onImageLoaded} />
                        <div className='item1' />
                        <div className='item2'>2</div>
                        <div className='item3'>3</div>
                    </div>
                </div>
            )


};
export default Main;