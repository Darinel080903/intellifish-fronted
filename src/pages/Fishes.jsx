import Navbar from "../containers/Navbar/Navbar";
import Card from "../containers/Card/Card";
import { axiosAPIInstance } from "../api/axios";
import React, { useEffect, useState } from 'react';

function Fishes() {
    
    const [fishData, setFishData] = useState([]);
    const fishInfo = async () => {
        try {
            const response = await axiosAPIInstance.get("/api/fish", {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                },
            });
            return response.data.data;
        } catch (error) {
            console.error("Error fetching fish data:", error);
            return [];
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const data = await fishInfo();
            console.log("Fish data from API:", data);
            if (Array.isArray(data)) { 
                setFishData(data);
            } else {
                console.warn("Fish data is not an array:", data);
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
                        {fishData.map((fish, index) => (
                            <Card
                                key={index}
                                title={fish.name}
                                content={fish.spices}
                                imageUrl={fish.imageUrl}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fishes;