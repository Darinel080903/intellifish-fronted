import Navbar from "../containers/Navbar/Navbar";
import Card from "../containers/Card/Card";
import { axiosAPIInstance } from "../api/axios";
import React, { useEffect, useState } from 'react';

function Fishes() {
        const [fishData, setFishData] = useState([]);
        useEffect(() => {
            axiosAPIInstance.get('/api/fish')
            .then(response => {
                setFishData(response.data);
                console.log(data)
            })
            .catch(error => {
                console.error('Error al obtener peces:', error);
            });
        }, []);
    return(
        
        <div>
            <Navbar/>
            <div className="bg-white min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-items-center">
                        <Card
                            title= {fishData.name}
                            content="Contenido de ejemplo para la tarjeta"
                            imageUrl="https://images.unsplash.com/photo-1515474594679-6a13c25afb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                        <Card
                            title="Título de la tarjeta"
                            content="Contenido de ejemplo para la tarjeta"
                            imageUrl="https://images.unsplash.com/photo-1515474594679-6a13c25afb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                        <Card
                            title="Título de la tarjeta"
                            content="Contenido de ejemplo para la tarjeta"
                            imageUrl="https://images.unsplash.com/photo-1515474594679-6a13c25afb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                    
                        <Card
                            title="Título de la tarjeta"
                            content="Contenido de ejemplo para la tarjeta"
                            imageUrl="https://images.unsplash.com/photo-1515474594679-6a13c25afb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                        <Card
                            title="Título de la tarjeta"
                            content="Contenido de ejemplo para la tarjeta"
                            imageUrl="https://images.unsplash.com/photo-1515474594679-6a13c25afb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                        <Card
                            title="Título de la tarjeta"
                            content="Contenido de ejemplo para la tarjeta"
                            imageUrl="https://images.unsplash.com/photo-1515474594679-6a13c25afb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Fishes;