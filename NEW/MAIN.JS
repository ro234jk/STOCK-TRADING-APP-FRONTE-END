var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    theme: "light2", // Options: "light1", "light2", "dark1", "dark2"
    exportEnabled: true,
    title: {
        text: "Stock Performance Overview"
    },
    subtitles: [{
        text: "Candlestick and Line Data Comparison - 2016"
    }],
    axisX: {
        valueFormatString: "MMM",
        lineThickness: 1,
        gridThickness: 0.5,
        tickLength: 5,
        labelFontColor: "#333"
    },
    axisY: {
        prefix: "$",
        title: "Stock Prices",
        labelFontColor: "#3d30bb",
        lineThickness: 1,
        gridThickness: 0.5
    },
    axisY2: {
        prefix: "",
        suffix: " BTC",
        title: "Market Value (in BTC)",
        tickLength: 5,
        lineThickness: 1,
        gridThickness: 0.5,
        labelFontColor: "#28a745"
    },
    toolTip: {
        shared: true,
        content: "{name}: {y}"
    },
    legend: {
        reversed: false,
        cursor: "pointer",
        fontSize: 14,
        itemclick: toggleDataSeries,
    },
    data: [
        {
            type: "candlestick",
            color: "#3d30bb",
            risingColor: "#28a745",
            showInLegend: true,
            name: "Stock Price",
            yValueFormatString: "$#,##0.00",
            xValueFormatString: "MMMM YYYY",
            dataPoints: [
                { x: new Date(2016, 0), y: [101.95, 112.84, 89.37, 112.21] },
                { x: new Date(2016, 1), y: [112.27, 117.59, 96.82, 106.92] },
                { x: new Date(2016, 2), y: [107.83, 116.99, 104.4, 114.1] },
                { x: new Date(2016, 3), y: [113.75, 120.79, 106.31, 117.58] },
                { x: new Date(2016, 4), y: [117.83, 121.08, 115.88, 118.81] },
                { x: new Date(2016, 5), y: [118.5, 119.44, 108.23, 114.28] },
                { x: new Date(2016, 6), y: [114.2, 128.33, 112.97, 123.94] },
                { x: new Date(2016, 7), y: [123.85, 126.73, 122.07, 126.12] },
                { x: new Date(2016, 8), y: [126.38, 131.98, 125.6, 128.27] },
                { x: new Date(2016, 9), y: [128.38, 133.5, 126.75, 130.99] },
                { x: new Date(2016, 10), y: [131.41, 131.94, 113.55, 118.42] },
                { x: new Date(2016, 11), y: [118.38, 122.5, 114.0, 115.05] }
            ]
        },
        {
            type: "line",
            color: "#28a745",
            showInLegend: true,
            name: "Revenue",
            axisYType: "secondary",
            yValueFormatString: "$#,##0.00bn",
            xValueFormatString: "MMMM YYYY",
            dataPoints: [
                { x: new Date(2016, 2), y: 1.51 },
                { x: new Date(2016, 5), y: 2.055 },
                { x: new Date(2016, 8), y: 2.379 },
                { x: new Date(2016, 11), y: 3.568 }
            ]
        },
        {
            type: "line",
            color: "#ff4500",
            showInLegend: true,
            name: "Profit",
            axisYType: "secondary",
            yValueFormatString: "$#,##0.00bn",
            xValueFormatString: "MMMM YYYY",
            dataPoints: [
                { x: new Date(2016, 2), y: 5.382 },
                { x: new Date(2016, 5), y: 6.436 },
                { x: new Date(2016, 8), y: 7.011 },
                { x: new Date(2016, 11), y: 8.809 }
            ]
        }
    ]
});
chart.render();

function toggleDataSeries(e) {
    if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
        e.dataSeries.visible = false;
    } else {
        e.dataSeries.visible = true;
    }
    e.chart.render();
}
