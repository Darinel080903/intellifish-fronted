import Navbar from "../containers/Navbar/Navbar";
import PlantCard from "../containers/Card/PlantCard";
import { axiosAPIInstance } from "../api/axios";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Route } from "routes";
import routes from "../consts/routes";


function Plants(params) {
    const [PlantData, setPlantData] = useState([]);
    const plantInfo = async () => {
        try {
            const response = await axiosAPIInstance.get("/plant", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching plants data:", error);
            return [];
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await plantInfo();
            console.log("Plant data from API:", data);
            if (Array.isArray(data)) { 
                setPlantData(data);
            } else {
                console.warn("Plant data is not an array:", data);
            }
        };
        fetchData();
    }, []);
    return(
        <div>
            <Navbar/>
            <div className="bg-white min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-items-center">
                        {PlantData.map((plants, index) => (
                            <Link to={routes.fishbowl}>
                                <PlantCard
                                    key={index}
                                    title={plants.species}
                                    content={plants.spices}
                                    imageUrl={plants.imageUrl}
                                />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    ) 
}
export default Plants;