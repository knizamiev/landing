import React from 'react';
import Logo from "../../assets/Slice_2.png";
import styled from 'styled-components';

const Header = styled.div`
    width: 1194px;
    height: 525px;
    background: linear-gradient(to bottom, #451b5b 2%, #ffffff 30% , #c3d8d9 );
    display: flex;
    justify-content: center;
`;

const Header_logo = styled.div`
    width: 80%;
    height: 100%;
    position: relative;
`;

const Header_img = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-height: 100%;
    width: 100%;
`;

export const Item_1 = () => {
    return(
        <Header>
            <Header_logo>
                <Header_img src={Logo}/>
            </Header_logo>
        </Header>
    )
};
