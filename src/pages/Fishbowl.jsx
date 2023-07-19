import Navbar from "../containers/Navbar/Navbar";
import SecondaryCard from "../containers/SecondaryCard/SecondaryCard";
import Gota from "../assets/svg/gota.svg"
import Flujo from "../assets/svg/flujo.svg"
import TemperaturaImage from "../assets/svg/temperatura-image.svg"
import PlantImage from "../assets/svg/plant-image.svg"
import FishImage from "../assets/svg/fish-image.svg"
import { axiosAPIInstance } from "../api/axios";
import React, { useEffect, useState } from 'react';

function Fishbowl(params) {
    const [phSensorData, setphSensorData] = useState([]);
    const phAverage = async () => {
        try {
            const response = await axiosAPIInstance.get("/phSensor/average", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response.data.data || [];;
        } catch (error) {
            console.error("Error fetching ph data:", error);
            return [];
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await phAverage();
            console.log("ph data from API:", data);
            console.log(data)
            if (Array.isArray(data)) { 
                setphSensorData(data);
            } else {
                console.warn("ph data is not an array:", data);
            }
        };
        fetchData();
    }, []);
    return(
        <>
            <Navbar/>
            <div className="bg-white min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <SecondaryCard
                            title='Temperatura'
                            image={TemperaturaImage}
                            text='10°C'
                        >
                        </SecondaryCard>
                        {phSensorData.map((ph, index) => (
                            <SecondaryCard
                                key={index}
                                title='Ph del agua'
                                content={Gota}
                                text={ph.data}
                            />
                        ))}
                        <SecondaryCard
                            title='Flujo del Agua'
                            image={Flujo}
                            text='Q = 8'
                        >
                        </SecondaryCard>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <SecondaryCard
                            title='Plantas en la Pecera'
                            image={PlantImage}
                            text='2'
                        >
                        </SecondaryCard>
                        <SecondaryCard
                            title='Peces en la Pecera'
                            image={FishImage}
                            text='12'
                        >
                        </SecondaryCard>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Fishbowl;