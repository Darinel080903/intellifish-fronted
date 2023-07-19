import Navbar from "../containers/Navbar/Navbar";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import AddFishImage from "../assets/img/AddFish-image.jpg";
import React, { useState } from 'react';
import { axiosAPIInstance } from "../api/axios";

function AddFish() {
    const [fishData, setFishData] = useState({
        name: '',
        spices: '',
        imageUrl: '',
    });

    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFishData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();
            formData.append('name', fishData.name);
            formData.append('spices', fishData.spices);
            formData.append('imageUrl', fishData.imageUrl);

        await axiosAPIInstance.post('/api/fish', formData, {
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
            'Content-Type': 'application/json',
            },
        });

        setIsSuccess(true);
        setFishData({ name: '', spices: '', imageUrl: '' });
        } catch (error) {
            setIsError(true);
            console.error('Error al enviar la solicitud POST:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="max-w-full">
                    <img className='w-full h-full object-cover' src={AddFishImage} alt="120" style={{ height: '720px' }} />
                </div>

                <div className='flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
                        <h2 className='text-4xl font-bold text-center m-4 -p4'>Agregar Pez</h2>

                        <div className='flex flex-col py-2'>
                            <label>Nombre del Pez</label>
                            <Input
                                type='text'
                                name="name"
                                value={fishData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label>Especie del Pez</label>
                            <Input
                                type='text'
                                name="spices"
                                value={fishData.spices}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <label>Url de la imagen</label>
                            <Input
                                type="url"
                                name="imageUrl"
                                value={fishData.imageUrl}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className='flex flex-col py-2'>
                            <Button onClickHandler={handleSubmit}>Agregar Pez</Button>
                        </div>
                    </form>
                    {isSuccess && (
                        <div className="text-green-500 font-bold text-center mt-4">
                            ¡Pez agregado exitosamente!
                        </div>
                    )}
                    {isError && (
                        <div className="text-red-500 font-bold text-center mt-4">
                            ¡Ocurrió un error al agregar el pez!
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default AddFish;
