import React from 'react';
import './main.css'
import {Item_1} from "../items/item1/Item_1";
import {Item_2} from "../items/item2/Item_2";
import {Item_3} from "../items/item3/Item_3";
import {Item_4} from "../items/item4/Item_4";
import {Item_5} from "../items/item5/Item_5";
import {Item_6} from "../items/item6/Item_6";



const Main = () => {
    return (
        <div>
            <Item_1/>
            <Item_2/>
            <Item_3/>
            <Item_4/>
            <Item_5/>
            <Item_6/>
        </div>
    )
};
export default Main;