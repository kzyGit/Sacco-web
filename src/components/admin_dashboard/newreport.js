import React, { Component } from 'react'
import * as d3 from 'd3'
import BarChart from './barchart'

class Myreport extends Component {
render() {

    const temperatureData = [ 8, 5, 13, 9, 12 ]
    d3.select(this.refs.myDiv)
        .selectAll("h2")
        .data(temperatureData)
        .enter()
            .append("h2")
            .text((datapoint) => datapoint + " degrees")

    // d3.select(this.refs.myDiv).style("background-color", "grey").append("li").text("bananas")
        return (
            <div style={{ textAlign: 'left' }} ><br />
                <BarChart />
            </div>
        )
    }
}

export default Myreport;