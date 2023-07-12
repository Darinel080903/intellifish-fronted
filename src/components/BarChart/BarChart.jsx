import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    useEffect(() => {
            const ctx = chartRef.current.getContext('2d');    
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
            chartInstance.current = new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['Etiqueta 1', 'Etiqueta 2', 'Etiqueta 3'],
                    datasets: [
                        {
                            label: 'Ejemplo de datos',
                            data: [12, 19, 8],
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                        },
                    ],
                },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    }, []);
    return <canvas ref={chartRef} />;
};

export default BarChart;
