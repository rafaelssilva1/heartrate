import React  from "react";
import "./chart.css";

import { VictoryChart, VictoryScatter, VictoryTheme, VictoryTooltip, VictoryAxis } from 'victory';

export default function Chart({heartrate}) {

    heartrate.map(el => {
        el.minimum = parseInt(el.minimum);
        el.maximum = parseInt(el.maximum);
        el.meanAverage = parseInt(el.meanAverage);
        el.dateTime = new Date(el.dateTime);

        return true;
    });

    return (
        <div id="chart__container">
            <VictoryChart
                theme={VictoryTheme.grayscale}
                domainPadding={{x:10, y:10}}
            >
                <VictoryScatter
                    data={heartrate}
                    labels={({ datum }) => `
                        ${datum.dateTime.getDate()}/${datum.dateTime.getMonth()+1}/${datum.dateTime.getFullYear()}
                        Min: ${datum.minimum}
                    `}
                    style={{
                        data: {fill: "#5251FA"}
                    }}
                    labelComponent={
                        <VictoryTooltip
                          flyoutWidth={50}
                          flyoutHeight={35}
                          cornerRadius={5}
                          pointerLength={10}
                          flyoutStyle={{
                            stroke: "#5251FA",
                            strokeWidth: 1,
                            fill: "#5251FA"
                          }}
                          style={{
                            fill: "#fff",
                            fontSize: 8,
                            fontWeight: 500,
                            textAnchor: "middle"
                          }}
                        />
                    }
                    x= "dateTime"
                    y= "minimum"
                    size={2}
                />
                <VictoryScatter
                    data={heartrate}
                    labels={({ datum }) => `
                        ${datum.dateTime.getDate()}/${datum.dateTime.getMonth()+1}/${datum.dateTime.getFullYear()}
                        Max: ${datum.maximum}
                    `}
                    style={{
                        data: {fill: "#F7B500"}
                    }}
                    labelComponent={
                        <VictoryTooltip
                          flyoutWidth={50}
                          flyoutHeight={35}
                          cornerRadius={5}
                          pointerLength={10}
                          flyoutStyle={{
                            stroke: "#F7B500",
                            strokeWidth: 1,
                            fill: "#F7B500"
                          }}
                          style={{
                            fill: "#fff",
                            fontSize: 8,
                            fontWeight: 500,
                            textAnchor: "middle"
                          }}
                        />
                    }
                    x= "dateTime"
                    y= "maximum"
                    size={2}
                />
                <VictoryScatter
                    data={heartrate}
                    labels={({ datum }) => `
                        ${datum.dateTime.getDate()}/${datum.dateTime.getMonth()+1}/${datum.dateTime.getFullYear()}
                        Avg: ${datum.meanAverage}
                    `}
                    style={{
                        data: {fill: "#FB3E08"}
                    }}
                    labelComponent={
                        <VictoryTooltip
                          flyoutWidth={50}
                          flyoutHeight={35}
                          cornerRadius={5}
                          pointerLength={10}
                          flyoutStyle={{
                            stroke: "#FB3E08",
                            strokeWidth: 1,
                            fill: "#FB3E08"
                          }}
                          style={{
                            fill: "#fff",
                            fontSize: 8,
                            fontWeight: 500,
                            textAnchor: "middle"
                          }}
                        />
                    }
                    x= "dateTime"
                    y= "meanAverage"
                    size={2}
                />
            </VictoryChart>
        </div>
    );
}