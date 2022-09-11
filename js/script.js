const ctx = document.getElementById('myChart');

fetch('./data.json').then(response => {
    return response.json();
}).then(data => {
    function getDayName(dateStr, locale) {
        const date = new Date(dateStr);
        return date.toLocaleDateString(locale, { weekday: 'long' });        
    }

    const dateStr = new Date();
    const day = getDayName(dateStr, 'en-US');
    const today = day.slice(0,3).toLowerCase();

    const labels = [];
    const amount = [];
    for(const datas of data) {
        labels.push(datas.day);
        amount.push(datas.amount);
    }
    const datas = {
        labels,
        datasets: [
            {
                data: amount,
                backgroundColor: 
                [
                    (labels[0] == today) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
                    (labels[1] == today) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
                    (labels[2] == today) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
                    (labels[3] == today) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
                    (labels[4] == today) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
                    (labels[5] == today) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)',
                    (labels[6] == today) ? 'hsl(186, 34%, 60%)' : 'hsl(10, 79%, 65%)'
                ],
            }
        ]
    };

    const config = {
        type: "bar",
        data: datas,
        options: {
            responsive: true,
            hoverBackgroundColor: 'hsl(186, 34%, 60%)',
            borderRadius: 5,
            borderSkipped: false,
            scales: {
                y: {
                    display: false,
                },
                x: {
                    grid: {
                        display: false,
                        offset: true,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                tooltip: {
                    callbacks: {
                        labelColor: function() {
                            return {
                                backgroundColor: 'hsl(186, 34%, 60%)',
                            };
                        }
                    }
                }
            }
        },
    };
    const myChart = new Chart(ctx, config);
});

