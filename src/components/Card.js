import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faStar } from '@fortawesome/free-solid-svg-icons';

export default function Card(props) {
    return (
        <div dir={"rtl"}  >

            <img style={{
                width: '300px',
                height: '300px',
                borderRadius: '10px'
            }} src={props.img} alt={props.title} />
            <div>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: "50px"
                }}>
                    <h2>{props.title}</h2>
                    <p style={{ fontSize: "18px", marginTop: "23px" }}>{props.reviweCard} <FontAwesomeIcon icon={faStar}  style={{ fontSize: '24px', color: "yellow" }} /></p>
                </div>
                <p>{props.Creation_date}</p>
                <p style={{ fontSize: "21px", }} >{props.price}</p>

            </div>
        </div>
    );
}
