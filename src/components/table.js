import React from "react";
import "./table.css"

export default function Table({heartrate}) {

    return (
        <div className="table__container">
            <h2 className="table__title">Table View</h2>
            <table className="table__list">
                <tr className="table__headerrow">
                    <th className="tablee__headercell">Date</th>
                    <th className="tablee__headercell">Minimum BPM</th>
                    <th className="tablee__headercell">Maximum BPM</th>
                    <th className="tablee__headercell">Average BPM</th>
                </tr>
                {
                    heartrate.map(el => (
                        <tr className="table__row">
                            <td className="table__cell">{el.dateTime.getDate()+"/"+(el.dateTime.getMonth()+1)+"/"+el.dateTime.getFullYear()}</td>
                            <td className="table__cell">{el.minimum}</td>
                            <td className="table__cell">{el.maximum}</td>
                            <td className="table__cell">{el.meanAverage}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}