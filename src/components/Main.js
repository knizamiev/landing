import React from 'react';
import './main.css'
import Logo from '../assets/Slice_2.png';
import Mall from '../assets/mall.jpg';
import Join from '../assets/find-us-2880x1440px-compressor.jpg';



const Main = () => {


            return (
                <div>
                    <div className='logo'>
                        <div className='logo_background'>
                            <img src={Logo}/>
                        </div>
                    </div>

                    <div className='aboutUs'>
                    <div className='aboutUs_background'>
                        <div className='group_1'>
                            <img src={Mall} />
                            <div className='item1' />
                            <div className='item2'>
                                <div className='score_project'>
                                <span>у нас на счету более:</span>
                                </div>
                                <div className='score_project_1'>
                                <span>4 лет опыта работы </span>
                                <span>40 реализованных проектов</span>
                                <span>10 актуальных площадок за год</span>
                                <span>200 арендаторов</span>
                                </div>
                            </div>
                        </div>
                        <div className='group_2'>
                            <div className='aboutUs_title'>
                                <span>о нас :</span>
                            </div>
                            <span className='aboutUs_item'>Миссия Good Place заключается в создании ярмарок и
                            фестивалей на лучших площадках торговых центров города Москвы.</span>
                            <span className='aboutUs_item'>Наша команда создает уникальные, неповторимые проекты, проделывая масштабную работу,
                            начиная с поиска локации, и заканчивая реализацией проекта.</span>
                            <span className='aboutUs_item'>А так же, мы всегда в поиске уникальных участников, которые
                            смогут продемонстрировать свою продукцию на наших маркетах!</span>
                            <span className='aboutUs_item'>Мы всегда нацелены на результат и качество, поэтому
                            совершенствуемся изо дня в день!</span>
                        </div>
                    </div>
                    </div>

                    <div className='join'>
                    <div className='join_background'>
                        <img src={Join} />
                        <div className='join_logo_1'> w   qw</div>
                        <div className='join_logo_2'> w   qw</div>
                    </div>
                    </div>

                    {/*<div className='join'>*/}
                    {/*    <img src={Join} />*/}
                    {/*    <div className='item_1'>*/}
                    {/*        <div className='item_2'>*/}
                    {/*        <span>Присоединяйся!</span>*/}
                    {/*        </div>*/}
                    {/*        <div className='item_3'>*/}
                    {/*        <span>Это</span>*/}
                    {/*        <span>Отличная</span>*/}
                    {/*        <span>Возможность:</span>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className='comparison'>*/}
                    {/*    qweqwe*/}
                    {/*</div>*/}
                </div>
            )


};
export default Main;