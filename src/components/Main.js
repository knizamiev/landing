import React from 'react';
import './main.css'
import Logo from '../assets/Slice_2.png';
import Mall from '../assets/mall.jpg';
import Join from '../assets/find-us-2880x1440px-compressor.jpg';
import {Img} from 'react-image'



const Main = () => {

    const [state, setState] = React.useState({loaded: false});



    const onImageLoaded = () => {
        setState({loaded: true });
    };

    const { loaded } = state;

            return (
                <div>
                    <div className='logo'>
                        <Img src={Logo}/>

                    </div>

                    <div className='aboutUs'>

                        <Img src={Mall} loader={onImageLoaded} />
                        <div className='item1' />
                        <div className='item2'>2</div>
                        <div className='item3'>3</div>
                    </div>
                    <div className='join'>
                        <img src={Join} />
                        <div className='item_1'>
                            <div className='item_2'>
                            <span>Присоединяйся!</span>
                            </div>
                            <div className='item_3'>
                            <span>Это</span>
                            <span>Отличная</span>
                            <span>Возможность:</span>
                            </div>
                        </div>
                    </div>
                </div>
            )


};
export default Main;