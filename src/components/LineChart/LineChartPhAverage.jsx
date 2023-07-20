import React, { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';
import { axiosAPIInstance } from '../../api/axios';

const LineChartPhAverage = () => {
    const [chartData, setChartData] = useState(null);
    const chartRef = useRef(null);
    const chartInstance = useRef(null);

    const PhAverage = async () => {
        try {
            const response = await axiosAPIInstance.get("/phSensor/average", {
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
            const data = await PhAverage();
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
                    type: 'line',
                    data: {
                        labels: chartData.map((_, index) => (index + 1).toString()),
                        datasets: [
                            {
                                label: 'Ocultar',
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

export default LineChartPhAverage;
