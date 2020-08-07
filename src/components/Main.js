import React from 'react';
import './main.css'
import Logo from '../assets/background-gradient.jpg';
import Mall from '../assets/mall.jpg';



const Main = () => {

    const [state, setState] = React.useState({loaded: false});

    // const Logo = '../assets/background-gradient.jpg';
    // const Mall = '../assets/mall.jpg';

    // React.useEffect(()=>{
    //     let imageList = [Logo, Mall];
    //     console.log(imageList);
    //     imageList.forEach((image) => {
    //         new Image().src = image
    //     });
    //
    //     imageList.onload=()=>{
    //         setState({ imageIsReady: true });
    //     };
    //
    //
    // },[state]);

    const onImageLoaded = () => {
        setState({loaded: true });
    };

    const { loaded } = state;

      console.log('loaded ',loaded)
            return (
                <div>
                    <div className='logo'>
                        <img src={Logo} on onLoad={onImageLoaded}/>
                        <div className='info'>
                            <p>ps</p>
                            <p>best logo og logos</p>
                        </div>
                    </div>

                    <div className='aboutUs'>

                        <img src={Mall} />
                        <div className='item1'></div>
                        <div className='item2'>2</div>
                        <div className='item3'>3</div>
                    </div>
                </div>
            )


};
export default Main;