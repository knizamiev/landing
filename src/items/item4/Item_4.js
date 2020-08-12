import React from 'react';
import styled from 'styled-components';
import party_festival from '../../assets/Party-festival.jpg';
import coma from '../../assets/coma.png';

const Items_todo = styled.div`
    height: 776px;
    display: flex;
    justify-content: center;
    text-transform: uppercase;

`;

const Items_Logo = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
    display:flex;
    justify-content: center;
`;

const Items_img = styled.img`
    position: absolute;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    height:540px;
    width: 100%;
`;

const Todos = styled.div`
    background-color:#d5d4e2;
    position: absolute;
    opacity: 0.80;
    width: 619px;
    height:540px;
    top: 37%;
    left: 50%;
    transform: translate(-50%, -50%);
    display:flex;
    flex-direction:column;
    padding: 0 0 0 0;
    justify-content: center;
`;

const Item = styled('div')`
    height: 55px;
    width: 95%;
    font-size:18px;
    font-weight:500;
    display: flex;
    align-items: center;
    margin: 0 10px 0 10px;
    margin-top:15px;
    &&:first-child{
        margin-top: 25px;
    }
`;

const Comas = styled.img`
    margin-right:20px;  
`;

const Description = styled.div`
    width: 619px;
    height: 200px;
    position: absolute;
    bottom: 0%;
    display:flex;
    flex-direction: column;   
     &&:last-child{
    margin-bottom:20px;
    }
`;

    const Descr_1 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:80px;
    width:100%;
    font-size:26px;
    font-weight: 500;
`;

const Descr_2 = styled.div`
    margin-top:5px;
    width:100%;
    display: flex;
    justify-content: center;
    font-size: 16px;
    font-weight: 500;
    
`;


export const Item_4 = () => {
    return (
        <Items_todo>
            <Items_Logo>
                <div>
                <Items_img src={party_festival}/>
                    <Todos>
                        <Item><Comas src={coma}/>протестировать выбранную нишу,не производя или не закупая большой объем товара</Item>
                        <Item><Comas src={coma}/>стоять на точке с максимальным потоком трафика тц</Item>
                        <Item><Comas src={coma}/>получение показателей продаж и произведение анализа, для понимания спроса в данном тц</Item>
                        <Item><Comas src={coma}/>у вас будет место "под ключ", не нужно вложение в изготовление оборудования или иных доп. расходов</Item>
                        <Item><Comas src={coma}/>участие в сезонных маркетах (новогодний, осенний и т.д.)</Item>
                        <Item><Comas src={coma}/>работа с соседями, которые были собеседованы лично нами</Item>
                        <Item><Comas src={coma}/>получить торговое место на площадке, которая художественно оформлена командой креативных дизайнеров</Item>
                    </Todos>
                </div>
                <Description>
                    <Descr_1>
                        <span>для сравнения</span>
                    </Descr_1>
                    <Descr_2><span>чтобы запустить свой собственный островок в тц, тебе нужно</span></Descr_2>
                    <Descr_2><span>-разработать дизайн проект (от 50000 т.р.)</span></Descr_2>
                    <Descr_2><span>-оплатить аренду за площадь (от 300000 т.р.)</span></Descr_2>
                    <Descr_2><span>-внести депозит (от 300000 т.р.)</span></Descr_2>
                    <Descr_2><span>-реализовать дизайн проект, собрать площадку (от 100000 т.р.)</span></Descr_2>
                    <Descr_2><span>итого: 700000 т.р.</span></Descr_2>
                </Description>



            </Items_Logo>
        </Items_todo>
    )
};