import Navbar from "../containers/Navbar/Navbar";
import SecondaryCard from "../containers/SecondaryCard/SecondaryCard";
import Gota from "../assets/svg/gota.svg"
import Flujo from "../assets/svg/flujo.svg"
import TemperaturaImage from "../assets/svg/temperatura-image.svg"
import { axiosAPIInstance } from "../api/axios";
import React, { useEffect, useState } from 'react';

function Fishbowl(params) {
    const [TemperatureSensorData, setTemperatureSensorData] = useState(null);
    const [TemperatureSensorMeanDeviationData, setTemperatureSensorMeanDeviationData] = useState(null);
    const [TemperatureSensorVarianceData, setTemperatureSensorVarianceData] = useState(null);
    const [phSensorData, setphSensorData] = useState(null);
    const [phSensorSensorMeanDeviationData, setphSensorSensorMeanDeviationData] = useState(null);
    const [phSensorVarianceData, setphSensorVarianceData] = useState(null);
    const [waterFlowSensorData, setwaterFlowSensorData] = useState(null);
    const [waterFlowSensorMeanDeviationData, setwaterFlowSensorMeanDeviationData] = useState(null);
    const [waterFlowSensorVarianceData, setwaterFlowSensorVarianceData] = useState(null);

    const waterTemperatureAverage = async () => {
        try {
            const response = await axiosAPIInstance.get("/watertemperaturesensor/average", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching temperature data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await waterTemperatureAverage();
                console.log("temperature data from API:", data);
                setTemperatureSensorData(data); 
            } catch (error) {
                console.error("Error fetching temperature data:", error);
            }
        };
        fetchData();
    }, []);

    const waterTemperatureMeanDeviation = async () => {
        try {
            const response = await axiosAPIInstance.get("/watertemperaturesensor/meanDeviation", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching temperature data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await waterTemperatureMeanDeviation();
                console.log("mean deviation temperature data from API:", data);
                setTemperatureSensorMeanDeviationData(data); 
            } catch (error) {
                console.error("Error mean deviation temperature data:", error);
            }
        };
        fetchData();
    }, []);

    const waterTemperatureVariance = async () => {
        try {
            const response = await axiosAPIInstance.get("/watertemperaturesensor/variance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching temperature variance data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await waterTemperatureVariance();
                console.log("temperature variance data from API:", data);
                setTemperatureSensorVarianceData(data); 
            } catch (error) {
                console.error("Error temperature variance data:", error);
            }
        };
        fetchData();
    }, []);

    const phAverage = async () => {
        try {
            const response = await axiosAPIInstance.get("/phSensor/average", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching ph data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await phAverage();
                console.log("ph data from API:", data);
                setphSensorData(data); 
            } catch (error) {
                console.error("Error fetching ph data:", error);
            }
        };
        fetchData();
    }, []);

    const phMeanDeviation = async () => {
        try {
            const response = await axiosAPIInstance.get("/phSensor/meanDeviation", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching ph mean deviation data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await phMeanDeviation();
                console.log("ph mean deviation data from API:", data);
                setphSensorSensorMeanDeviationData(data); 
            } catch (error) {
                console.error("Error fetching ph mean deviation data:", error);
            }
        };
        fetchData();
    }, []);

    const phVariance = async () => {
        try {
            const response = await axiosAPIInstance.get("/phSensor/variance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching ph variance data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await phVariance();
                console.log("ph variance data from API:", data);
                setphSensorVarianceData(data); 
            } catch (error) {
                console.error("Error fetching ph variance data:", error);
            }
        };
        fetchData();
    }, []);

    const waterFlowAverage = async () => {
        try {
            const response = await axiosAPIInstance.get("/waterflowsensor/average", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching water flow data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await waterFlowAverage();
                console.log("water flow  data from API:", data);
                setwaterFlowSensorData(data); 
            } catch (error) {
                console.error("Error fetching water flow data:", error);
            }
        };
        fetchData();
    }, []);

    const waterFlowMeanDeviation = async () => {
        try {
            const response = await axiosAPIInstance.get("/waterflowsensor/meanDeviation", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching water flowsensor mean deviation data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await waterFlowMeanDeviation();
                console.log("water flowsensor  mean deviation data from API:", data);
                setwaterFlowSensorMeanDeviationData(data); 
            } catch (error) {
                console.error("Error fetching water flowsensor  mean deviation data:", error);
            }
        };
        fetchData();
    }, []);

    const waterFlowVariance = async () => {
        try {
            const response = await axiosAPIInstance.get("/waterflowsensor/variance", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                'Content-Type': 'multipart/form-data',
            },
            });
            console.log(response.data)
            return response.data;
        } catch (error) {
            console.error("Error fetching water flowsensor variance data:", error);
            return [];
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await waterFlowVariance();
                console.log("water flowsensor variance data from API:", data);
                setwaterFlowSensorVarianceData(data); 
            } catch (error) {
                console.error("Error water flowsensor variance data:", error);
            }
        };
        fetchData();
    }, []);
    return(
        <>
            <Navbar/>
            <div className="bg-white min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <p className="text-2xl font-bold tracking-tight text-gray-900 text-center">Sensor de Temperatura</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        
                        <SecondaryCard
                            title='Temperatura'
                            image={TemperaturaImage}
                            text={`${TemperatureSensorData}°C`}
                        />

                        <SecondaryCard
                            title='Desviacion Media'
                            image={TemperaturaImage}
                            text={TemperatureSensorMeanDeviationData !== null ? TemperatureSensorMeanDeviationData.toFixed(4) : "N/A"}
                        />

                        <SecondaryCard
                            title='Varianza'
                            image={TemperaturaImage}
                            text={TemperatureSensorVarianceData !== null ? TemperatureSensorVarianceData.toFixed(4) : "N/A"}
                        />
                    </div>
                    <p className="text-2xl font-bold tracking-tight text-gray-900 text-center p-4">Sensor de Ph</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        
                        <SecondaryCard
                            title='Ph del Agua'
                            image={Gota}
                            text={Math.round(`${phSensorData}`)}
                        />

                        <SecondaryCard
                            title='Desviacion Media'
                            image={Gota}
                            text={phSensorSensorMeanDeviationData !== null ? phSensorSensorMeanDeviationData.toFixed(4) : "N/A"}
                        />

                        <SecondaryCard
                            title='Varianza'
                            image={Gota}
                            text={phSensorVarianceData !== null ? phSensorVarianceData.toFixed(4) : "N/A"}
                        />
                    </div>
                    <p className="text-2xl font-bold tracking-tight text-gray-900 text-center p-4">Sensor de Flujo de Agua</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <SecondaryCard
                            title='Flujo del Agua'
                            image={Flujo}
                            text={`Q =${waterFlowSensorData}`}
                        />

                        <SecondaryCard
                            title='Desviacion Media'
                            image={Flujo}
                            text={waterFlowSensorMeanDeviationData !== null ? waterFlowSensorMeanDeviationData.toFixed(4) : "N/A"}
                        />
                        
                        <SecondaryCard
                            title='Varianza'
                            image={Flujo}
                            text={waterFlowSensorVarianceData !== null ? waterFlowSensorVarianceData.toFixed(4) : "N/A"}
                        />

                    </div>
                </div>
            </div>
        </>
    )
}
export default Fishbowl;