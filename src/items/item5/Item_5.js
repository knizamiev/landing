import React from 'react';
import friends from "../../assets/friends.jpg";
import styled from 'styled-components';


const Promise = styled.div`
    height: 422px;
    width: 1194px;
    background: linear-gradient(to bottom, #89688e 0%, #866687 98%);
    display: flex;
    justify-content: center;
`;

const Promise_logo = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
`;

const Promise_img = styled.img`
    position: absolute;
    right: 0;
    max-height: 100%;
`;

const Promise_info = styled.div`
    position: absolute;
    left: 0;
    height: 100%;
    display:flex;
    width: 250px;
    justify-content: flex-end;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    font-size: 20px;
    letter-spacing:2px;
    font-weight: 500;
`;

const Item_Promise = styled.span`
margin-bottom: 10px;
`;

export const Item_5 = () => {
    return(
        <Promise>
            <Promise_logo>
                <Promise_img src={friends}/>
                <Promise_info>
                        <Item_Promise>С нами всё просто!</Item_Promise>
                        <Item_Promise>Ты начинаешь</Item_Promise>
                        <Item_Promise>зарабатывать</Item_Promise>
                        <Item_Promise>и развиваться в ТЦ</Item_Promise>
                        <Item_Promise>после подписания</Item_Promise>
                        <Item_Promise>договора!</Item_Promise>
                </Promise_info>
            </Promise_logo>
        </Promise>
    )
};
