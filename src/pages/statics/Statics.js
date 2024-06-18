import React from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
);

function Statics(props) {
    const data = {
        labels: [
            'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
            'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
        ],
        datasets: [
            {
                label: 'Número de vezes que pratiquei esporte',
                data: [3, 1, 3, 4, 2, 5, 4, 1, 1, 3, 4, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    // Calculate total number of times sports were practiced
    const total = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

    // Pie chart data with total only
    const pieChartData = {
        labels: ['Total'],
        datasets: [
            {
                label: 'Total de vezes que pratiquei esporte',
                data: [total],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                    }
                }
            }
        }
    };

    return (
        <div>
            <div className="page-header">
                <p>Estatísticas</p>
            </div>
            <Bar
                options={options}
                data={data}
                {...props}
                height="60px"
            />
        </div>
    );
}

export default Statics;
