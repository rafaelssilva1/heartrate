import React from "react";
import "./avgweek.css";

export default function AvgWeek({heartrate, filter2}) {
    let min = 0;
    let max = 0; 
    let todayAvg = "n/a";
    let yesterdayAvg = "n/a";

    heartrate.map((el, i, arr) => {
        el.minimum = parseInt(el.minimum);
        min += el.minimum
        el.maximum = parseInt(el.maximum);
        max += el.maximum

        if(i + 1 === arr.length) {
            todayAvg = el.meanAverage;
        }
        if(i + 1 === arr.length - 1) {
            yesterdayAvg = el.meanAverage;
        }

        return true;
    });
    const avg = Math.round((max+min)/heartrate.length);

    const filterShow = () => {
        switch (filter2) {
            case -90:
                return "3 months"
            case -30:
                return "month"
            case -14:
                return "2 weeks"
            default:
                return "week"
        }
    }
    
    return (
        <div className="avgweek__container">
            <p className="avgweek__title">Average heartrate for the last {filterShow()}</p>
            <h2 className="avgweek__heartrate">{avg}</h2>
            <span className="avgweek__icon material-symbols-outlined">
                show_chart
            </span>
            <div>
                <div className="avgweek__value">
                    <div className="avgweek__pointer avgweek__yellow"></div>
                    Today: {todayAvg} bpm
                </div>
                <div className="avgweek__value">
                    <div className="avgweek__pointer avgweek__green"></div>
                    Yesterday: {yesterdayAvg} bpm
                </div>
            </div>
        </div>
    );
}