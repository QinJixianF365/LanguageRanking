var dataObject = [
    {
        name: "Java",
        rank: 1,
        change: '降',
        onedChng: -0.0001
    },
    {
        name: "C",
        rank: 2,
        change: '升',
        onedChng: +0.0244
    },
    {
        name: "Python",
        rank: 3,
        change: '升',
        onedChng: +0.0141
    },
    {
        name: "C++",
        rank: 4,
        change: '降',
        onedChng: -0.0258
    },
    {
        name: "C#",
        rank: 5,
        change: '升',
        onedChng: +0.0207
    },
    {
        name: "Visual Basic .NET",
        rank: 6,
        change: '降',
        onedChng: -0.0117
    },
    {
        name: "JavaScript",
        rank: 7,
        change: '降',
        onedChng: -0.0085
    }
]


var hotElement = document.querySelector('#rank');
var hotElementContainer = hotElement.parentNode;
var hotSettings = {
    data: dataObject,
    columns: [
        {
            data: 'name',
            type: 'text',
        },
        {
            data: 'rank',
            type: 'numeric',
        },
        {
            data: 'change',
            type: 'text'
        },
        {
            data: 'onedChng',
            type: 'numeric',
            numericFormat: {
                pattern: '0.00%'
            }
        }
    ],
    stretchH: 'all',
    width: 600,
    maxRows: 20,
    manualRowMove: true,
    manualColumnMove: true,
    colHeaders: [
        '语言名称',
        '排名',
        '升或降',
        '变化幅度'
    ],
    contextMenu: true,
    filters: true,
    manualRowResize: true,
    manualColumnResize: true
};
var hot = new Handsontable(hotElement, hotSettings);


var myChart = echarts.init(document.getElementById('jsrank'));

var option = {
    title: {
        text: 'JavaScript语言排名变化'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['排名']
    },
    xAxis: {
        data: ["2000", "2005", "2010", "2015", "2020"]
    },
    yAxis: {},
    series: [{
        name: '排名',
        type: 'line',
        data: [6, 9, 8, 8, 7]
    }]
};

myChart.setOption(option);