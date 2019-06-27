import React, { Component } from 'react'
import * as d3 from 'd3'

class BarChart extends Component {
    componentDidMount() {
        const data = [2, 4, 2, 6, 8]
        const names = ["Kezzy", "Ann", "Tom", "Ken", "Jack"]
        this.drawBarChart(data, names)
    }
    drawBarChart(data, names) {

        const canvasHeight = 400
        const canvasWidth = 600
        const scale = 40
        const svgCanvas = d3.select(this.refs.canvas)
            .append("svg")
            .attr("width", canvasWidth)
            .attr("height", canvasHeight)
            .attr("class", "graph")

        const bar = svgCanvas.selectAll("rect")
            .data(data).enter()
            .append("rect")
            .attr("width", 60)
            .attr("height", (datapoint) => datapoint * scale)
            .attr("fill", "orange")
            .attr("x", (datapoint, iteration) => iteration * 80 + 5)
            .attr("y", (datapoint) => canvasHeight - datapoint * scale - 30)

        svgCanvas.selectAll("text")
            .data(names)
            .enter()
            .append("text")
            .attr("x", (dataPoint, i) => i * 80 + 5)
            .attr("y", (dataPoint, i) => canvasHeight - 10)
            .text(dataPoint => dataPoint)
            .html(String);
            
        bar
            .on('mouseenter', function (actual, i) {
                d3.select(this).attr('opacity', 0.5)
            })
            .on('mouseleave', function (actual, i) {
                d3.select(this).attr('opacity', 1)
            })
    }
    render() { 
    return <div ref="canvas"></div> }

}

export default BarChart;