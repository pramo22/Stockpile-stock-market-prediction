Chart.defaults.color= "#6C7293";
Chart.defaults.borderColor = "#000000";

var ctxl = $(#worldwide-sales).get(0).getContext("2d");
var Chart = new Chart(ctxl,{
    type:"bar",
    data:{
        labels : ["2017","2018","2019","2020","2021","2022"],
        dataset : [{
            label: "USA",
            data: [15, 30, 55, 65, 60, 80, 95],
            backgroundColor: "rgba(235, 22, 22, .7)"
        },
        {
            label : "UK",
            data : [8, 35, 40, 60, 70, 55, 75],
            backgroundColor: "rgba(235, 22, 22, .5)"
        },
        {
            label : "AU",
            data : [12, 25, 45, 55, 65, 70, 60],
            backgroundColor: "rgba(235, 22, 22, .3)"
        }
        ]
    },
    options: {
        responsive : true
    }
});
