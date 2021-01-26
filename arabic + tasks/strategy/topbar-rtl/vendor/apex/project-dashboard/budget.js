var options = {
    chart: {
        width: 220,
        type: 'donut',
    },
    labels: ['الميزانية الإجمالية', 'المبلغ المستخدم', 'الكمية المتبقية'],
    series: [60000, 45000, 15000],
    legend: {
        position: 'bottom',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 0,
    },
    colors: ['#f77979', '#5cace1', '#33ac94', '#63686f', '#868a90'],
    tooltip: {
        y: {
            formatter: function(val) {
                return "$" + val
            }
        }
    },
}
var chart = new ApexCharts(
    document.querySelector("#budget"),
    options
);
chart.render();