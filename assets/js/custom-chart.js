const ctx = document.getElementById('myChart').getContext('2d');

const myChart = new Chart(ctx, {
    type: 'line',  
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'], 
        datasets: [{
            data: [100, 120, 150, 170, 200, 220, 260, 300, 350, 400, 450, 500],  
            borderColor: '#ff0000',  
            backgroundColor: 'rgba(255, 0, 0, 0.1)', 
            tension: 0.4,  
            fill: true, 
            borderWidth: 3,  
            pointBackgroundColor: '#ff0000',  
            pointRadius: 5,  
            pointHoverRadius: 7  
        }]
    },
    options: {
        responsive: true,  
        scales: {
            x: {
                grid: {
                    color: '#333',  
                },
                ticks: {
                    color: '#fff',  
                }
            },
            y: {
                grid: {
                    color: '#333',  
                },
                ticks: {
                    color: '#fff',  
                    beginAtZero: true, 
                    callback: function(value) {
                        return value + '$';  
                    }
                }
            }
        },
        plugins: {
            legend: {
                display: false  
            }
        }
    }
});
