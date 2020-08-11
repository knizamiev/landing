import React from 'react';
import styled from 'styled-components';
import Mall from "../../assets/mall.jpg";
import icon1 from '../../assets/icon1.png';


const AboutUs = styled.div`
    height: 320px;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
`;


const AboutUs_BackGround = styled.div`
    width: 80%;
    height: 100%;
    display: grid;
    grid-template-columns: 50%  50%;
`;


const Group_1 = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    position: relative;
`;


const Item2 = styled.div`
  z-index: 1;
    background-color: white;
    opacity: 0.75;
    display: flex;
    flex-direction: column;
`;

const Group_1_img = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
`;

const Score_Project = styled.div`
height: 45px;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 0;
    font-weight: 500;
    padding: 0 10px 0 10px;
`;

const Score_Project_1 = styled.div`
    display: flex;
    flex-direction: column;
`;

const Group_2 = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
`;

const Items = styled.div`
    margin:0 10px 0 10px;
    height:65px;
    display:flex;
    align-items: center;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
`;

const About_us_title = styled.div`
    height: 85px;
    font-size: 28px;
    font-weight: 400;
    letter-spacing: -1px;
    display:flex;
    display: flex;
    align-items: center; 
`;

const Numbers = styled.span`
    font-size: 38px;
    font-weight: 600;
    letter-spacing: -2px;
    margin-right:10px;
`;


export const Item_2 = () => {
    return(
        <AboutUs>
            <AboutUs_BackGround>
                <Group_1>
                    <Group_1_img src={Mall} />
                    <div />
                    <Item2>
                        <Score_Project>
                            <span>у нас на счету более:</span>
                        </Score_Project>
                        <Score_Project_1>
                            <Items><img src={icon1}/><Numbers>4</Numbers><span>лет опыта работы </span></Items>
                            <Items><img src={icon1}/><Numbers>40</Numbers><span>реализованных проектов</span></Items>
                            <Items><img src={icon1}/><Numbers>10</Numbers><span>актуальных площадок за год</span></Items>
                            <Items><img src={icon1}/><Numbers>200</Numbers><span>арендаторов</span></Items>
                        </Score_Project_1>
                    </Item2>
                </Group_1>
                <Group_2>
                    <About_us_title>
                        <span>о нас :</span>
                    </About_us_title>
                    <span>Миссия Good Place заключается в создании ярмарок и
                            фестивалей на лучших площадках торговых центров города Москвы.</span>
                    <span>Наша команда создает уникальные, неповторимые проекты, проделывая масштабную работу,
                            начиная с поиска локации, и заканчивая реализацией проекта.</span>
                    <span>А так же, мы всегда в поиске уникальных участников, которые
                            смогут продемонстрировать свою продукцию на наших маркетах!</span>
                    <span>Мы всегда нацелены на результат и качество, поэтому
                            совершенствуемся изо дня в день!</span>
                </Group_2>
            </AboutUs_BackGround>
        </AboutUs>
    )
};