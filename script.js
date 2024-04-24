// Data retrieved https://en.wikipedia.org/wiki/List_of_cities_by_average_temperature
Highcharts.chart('container', {
    chart: {
        type: 'spline'
    },
    title: {
        text: '淡水宜蘭嘉義月平均溫度圖'
    },
    
    xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        accessibility: {
            description: 'Months of the year'
        }
    },
    yAxis: {
        title: {
            text: 'Temperature'
        },
        labels: {
            format: '{value}°'
        }
    },
    tooltip: {
        crosshairs: true,
        shared: true
    },
    plotOptions: {
        spline: {
            marker: {
                radius: 4,
                lineColor: '#666666',
                lineWidth: 1
            }
        }
    },
    series: [{
        name: '淡水',
        marker: {
            symbol: 'square'
        },
        data: [15.4, 15.7, 17.7, 21.4, 24.7,27.3, 29.0, 
             28.7, 26.9,23.6, 21.0,
        17.3]

    }, {
        name: '宜蘭',
        marker: {
            symbol: 'diamond'
        },
        data: [
           
         16.6, 17.1, 19.0, 21.9,24.7, 27.3, 28.9, 28.6,26.8 , 23.8, 21.1,17.9]
    }, {

        name: '嘉義',
        marker: {
            symbol: 'circle'
        },
        data: [
           
        16.8, 17.7, 20.2, 23.5,, 26.3, 28.3, 28.9,28.9, 27.4, 24.8,22.0,18.4]
    }]
});