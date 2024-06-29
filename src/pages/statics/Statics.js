import React from 'react';
import { Bar } from 'react-chartjs-2';
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
        ],
        datasets: [
            {
                label: 'Número de vezes que pratiquei esporte',
                data: [3, 1, 3, 4, 2, 5],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const total = data.datasets[0].data.reduce((acc, curr) => acc + curr, 0);

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            tooltip: {
                callbacks: {
                    label: function (tooltipItem) {
                        return tooltipItem.label + ': ' + tooltipItem.raw.toFixed(2);
                    }
                }
            }
        }
    };

    return (
        <div style={{ padding: '50px' }}>
            <div className="page-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
                <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Estatísticas</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ flex: 1, maxWidth: '1200px' }}>
                    <Bar
                        options={options}
                        data={data}
                        {...props}
                        height={500}
                        width={1200}
                    />
                </div>
                <div style={{
                    marginLeft: '40px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        backgroundColor: '#88bdbc',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        fontSize: '40px',
                        fontWeight: 'bold',
                        border: '1px solid black'
                    }}>
                        {total}
                    </div>
                    <p style={{ marginTop: '10px', textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }}>
                        Partidas no ano
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Statics;
