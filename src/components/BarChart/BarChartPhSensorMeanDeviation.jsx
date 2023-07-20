import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { axiosAPIInstance } from '../../api/axios';

const BarChartPhSensorMeanDeviation = () => {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const phSensorMeanDeviation = async () => {
        try {
            const response = await axiosAPIInstance.get("/phSensor/meanDeviation", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
        });
        return response.data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
        try {
            const data = await phSensorMeanDeviation();
            setChartData(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        fetchData();
    }, []);

    useEffect(() => {
        if (chartRef.current && chartData) {
            if (chartInstance.current) {
                chartInstance.current.data.labels = chartData.map((_, index) => (index + 1).toString());
                chartInstance.current.data.datasets[0].data = chartData;
                chartInstance.current.update();
            } else {
                const ctx = chartRef.current.getContext('2d');
                chartInstance.current = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: chartData.map((_, index) => (index + 1).toString()), // Usamos los índices como etiquetas
                        datasets: [
                            {
                                label: 'Desviacion Estandar del Ph',
                                data: chartData,
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
            }
        }
    }, [chartData]);

return <canvas ref={chartRef} />;
};

export default BarChartPhSensorMeanDeviation;
