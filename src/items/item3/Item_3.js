import React from 'react';
import styled from 'styled-components';
import Join from "../../assets/find-us-2880x1440px-compressor.jpg";
import icon_2 from '../../assets/icon2.png';

const Joinn = styled.div`
    height: 422px;
    background: rgb(158,126,177);
    background: linear-gradient(to bottom, rgba(158,126,177,1) 0%, #9e7eb0 98%);
    opacity: 0.95;
    display: flex;
    justify-content: center;
`;

const Join_Background = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
`;

const Join_Background_img = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    height: 100%;
    width: 100%;
`;

const Join_Logo_1 = styled.div`
    width: 500px;
    height: 227px;
    background-color: white;
    opacity: 0.75;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    text-transform:uppercase;
`;

const Join_Logo_2 = styled.div`
    width: 165px;
    height: 89px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
`;

const GroupItem_1 = styled.div`
    display: flex;
    justify-content: center;
    width:100%;
    height:calc(100%/2);
    align-items: center;
    font-size: 48px;
    font-weight:500;
`;

const GroupItem_2 = styled.div`
    display: flex;
    flex-direction: column;
    width:100%;
    align-items: center;
    height: calc(100%/2);
    font-size: 26px;
    font-weight: 500;
`;

export const Item_3 = () => {
    return (
        <Joinn>
            <Join_Background>
                <Join_Background_img src={Join}/>
                <Join_Logo_1>
                    <GroupItem_1>
                        <span>Присоединяйся!</span>
                    </GroupItem_1>
                    <GroupItem_2>
                    <span>это</span>
                    <span>отличная</span>
                    <span>возможность:</span>
                    </GroupItem_2>
                </Join_Logo_1>
                <Join_Logo_2><img src={icon_2} alt=""/></Join_Logo_2>
            </Join_Background>
        </Joinn>
    )
};
