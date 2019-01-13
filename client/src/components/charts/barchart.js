import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import CanvasJSReact from './canvasjs.react';
const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;

var dataPoints =[];
class BarChart extends PureComponent{
    constructor() {
		super();
		this.toggleDataSeries = this.toggleDataSeries.bind(this);
	}
	toggleDataSeries(e) {
		if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
			e.dataSeries.visible = false;
		}
		else {
			e.dataSeries.visible = true;
		}
		this.chart.render();
	}
	render() {
		const d1 = new Date(2018, 11, 17);
		const d2 = new Date(2018, 11, 18);
		const d3 = new Date(2018, 11, 19);
		const d4 = new Date(2018, 11, 20);
		const d5 = new Date(2018, 11, 21);
		const d6 = new Date(2018, 11, 22);
		const d7 = new Date(2018, 11, 23);
		const options = {
			animationEnabled: true,
			theme: "light2",
			// title:{
			// 	text: "Most Popular Social Networking Sites"
			// },
			axisX: {
				title: "Social Network",
				reversed: true,
			},
			axisY: {
				title: "Monthly Active Users",
				labelFormatter: this.addSymbols
			},
			data: [{
				type: "bar",
				dataPoints: [
					{ y:  2200000000, label: "Facebook" },
					{ y:  1800000000, label: "YouTube" },
					{ y:  800000000, label: "Instagram" },
					{ y:  563000000, label: "Qzone" },
					{ y:  376000000, label: "Weibo" },
					{ y:  336000000, label: "Twitter" },
					{ y:  330000000, label: "Reddit" }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}

BarChart.propTypes = {

}

export default BarChart;