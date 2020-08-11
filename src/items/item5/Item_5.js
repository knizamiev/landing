import React from 'react';
import friends from "../../assets/friends.jpg";
import styled from 'styled-components';


const Promise = styled.div`
    height: 422px;
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
    max-height: 100%;
    display:flex;
    width: 309px;
    justify-content: flex-end;
`;

export const Item_5 = () => {
    return(
        <Promise>
            <Promise_logo>
                <Promise_img src={friends}/>
                <Promise_info>qweqwe</Promise_info>
            </Promise_logo>
        </Promise>
    )
};
