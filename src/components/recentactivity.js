import React from "react";
import "./recenteactivity.css";

import AvgWeek from "./avgweek";
import Block from "./block";

export default function RecentActivity({heartrate, filter}) {
    return (
        <>
            <h2 className="recent__title">Recent Activity</h2>
            <div className="recent__grid">
                <AvgWeek heartrate={heartrate} filter2={filter}/>
                <div className="recent__blocks">
                <Block heartrate={heartrate} type={"max"}/>
                <Block heartrate={heartrate} type={"min"}/>
                </div>
            </div>
        </>
    )
}