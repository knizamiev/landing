import React from 'react';
import girl from '../../assets/AdobeStock.jpg';
import styled from 'styled-components';
import metropolice from '../../assets/tc_icons/metropolice.png';
import atrium from '../../assets/tc_icons/atrium.png';
import kapitol from '../../assets/tc_icons/kapitol.png';
import vegas from '../../assets/tc_icons/vegas.png';
import kalita from '../../assets/tc_icons/kalita.png';
import columbus from '../../assets/tc_icons/columbus.png';
import riv from '../../assets/tc_icons/rivera.png';


const Footer = styled.div`
    height: 741px;
    display: flex;
    justify-content: center;
`;

const Footer_logo = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
`;

const Footer_img = styled.img`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    width: 100%;
`;

const Places = styled.div`
    position: absolute;
    top: 7.5%;
    right: 1%;
    width: 444px;
    height: 478px;
    background-color:#FFF;  
`;

const Place_in = styled.div`
    height:60px;
    width:100%;
    display: flex; 
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 2px;
`;

const GridItems = styled.div`
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-gap: 5px; 
   
`;

const Item = styled.div`
    width: 218px;
    height: 100px;
    display: flex;
    justify-content:center;
    align-items :center;
`;

const Special =styled.div`
    display: flex;
    justify-content:center;
    align-items :center;
    grid-row: 4;
    grid-column: 1 / span 2;
`;

const Icons = styled.img`
    max-width: 216px;
    max-height: 100px;
`;

const Contacts = styled.div`
    height: 183px;
    position: absolute;
    width:100%;
    bottom:0;
    display: flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    font-size: 22px;
    font-weight: 500;
    letter-spacing: 1px;
`;

export const Item_6 = () => {
    return(
        <Footer>
            <Footer_logo>
                <Footer_img src={girl}/>
                <Places>
                    <Place_in>
                        <span>мы размещаемся в:</span>
                    </Place_in>
                    <GridItems>
                        <Item><Icons src={metropolice}/></Item>
                        <Item><Icons src={atrium}/></Item>
                        <Item><Icons src={vegas}/></Item>
                        <Item><Icons src={kapitol}/></Item>
                        <Item><Icons src={kalita}/></Item>
                        <Item><Icons src={columbus}/></Item>
                        <Special><Icons src={riv}/></Special>
                    </GridItems>
                </Places>

                <Contacts>
                    <span>НАШИ КОНТАКТЫ</span>
                    <span>+7 909 623-70-36 Ксения</span>
                    <span>goodplace_info@bk.ru</span>
                    <span>ОФИС:</span>
                    <span>ул. Годовикова, 9, стр. 1, Москва</span>
                </Contacts>
            </Footer_logo>
        </Footer>
    )
};
