import React from 'react';
import Card from './components/Card';
import style from "./style.css";
import { data } from './data';


export default function App() {
    const DataShow = data.map((item,index) => {
        return (
            <Card key={index} title={item.title} img={item.img } reviweCard={item.reviweCard} Creation_date={item.Creation_date}  price={item.price}  />
        );
    });

    return <div style={{display:"flex",justifyContent:"space-around" ,alignItems:"center" , flexDirection:"row",flexWrap:"wrap" }}>{DataShow}</div>;
}
