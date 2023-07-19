import Navbar from "../containers/Navbar/Navbar"
import Input from "../components/Input/Input"
import SecondaryButton from "../components/Button/SecondaryButton"
import PlantImage from "../assets/img/AddPlant-image.jpg"  
import React, { useState } from 'react';
import { axiosAPIInstance } from "../api/axios";

function AddPlants() {
    const [PlanData, setPlantData] = useState({
        species: '',
        imageUrl: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPlantData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('species', PlanData.species);
            formData.append('imageUrl', PlanData.imageUrl);

        await axiosAPIInstance.post('/api/plant', formData, {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
            },
        });

        setIsSuccess(true);
        setplantData({ species: '', imageUrl: '' });
        } catch (error) {
            setIsError(true);
            console.error('Error al enviar la solicitud POST:', error);
        }
    };
    return(
        <>
            <Navbar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">             
                <div className="max-w-full">
                    <img className='w-full h-full object-cover' src={PlantImage} alt="120" style={{ height: '720px' }} />
                </div>

                <div className='flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
                        <h2 className='text-4xl font-bold text-center m-4 -p4'>Agregar Plantas</h2>

                        <div className='flex flex-col py-2'>
                            <label>Especie de la planta</label>
                            <Input
                                type='text'
                                name="name"
                                value={PlanData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label>Url de la imagen</label>
                            <Input
                                type="url"
                                name="imageUrl"
                                value={PlanData.imageUrl}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <SecondaryButton onClick={handleSubmit}>Agregar Planta</SecondaryButton>
                        </div>            
                    </form>
                    {isSuccess && (
                        <div className="text-green-500 font-bold text-center mt-4">
                            ¡Planta agregada exitosamente!
                        </div>
                    )}
                    {isError && (
                        <div className="text-red-500 font-bold text-center mt-4">
                            ¡Ocurrió un error al agregar la Planta!
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default AddPlants