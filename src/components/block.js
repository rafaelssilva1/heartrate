import React from "react";
import "./block.css";

export default function Block({heartrate, type}) {
    const max = Math.max(...heartrate.map(el => el.maximum));
    const min = Math.min(...heartrate.map(el => el.minimum));

    let maxDate;
    let minDate;

    heartrate.map(el => {
        el.minimum = parseInt(el.minimum);
        el.maximum = parseInt(el.maximum);
        if(max === el.maximum) {
            maxDate = el.dateTime
        }
        if(min === el.minimum) {
            minDate = el.dateTime
        }

        return true;
    });
    let maxDate2 = new Date(maxDate);
    let maxDate3 = maxDate2.getDate()+"-"+(maxDate2.getMonth()+1)+"-"+maxDate2.getFullYear()
    let minDate2 = new Date(minDate);
    let minDate3 = minDate2.getDate()+"-"+(minDate2.getMonth()+1)+"-"+minDate2.getFullYear()

    return (
        <div className="block__container">
            <span className={`block__icon block__${type} material-symbols-outlined`}>
                {type === "max" ? "trending_up" : "trending_down"}
            </span>
            <div className="block__values">
                <p className="block__day">{type === "max" ? maxDate3 : minDate3}</p>
                <p className="block__title">{type === "max" ? "Highest" : "Lowest"} BPM</p>
                <p className={`block__bpm block__${type}`}>{type === "max" ? max : min}</p>
            </div>
        </div>
    )
}