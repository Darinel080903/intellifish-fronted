import Navbar from "../containers/Navbar/Navbar"
import Input from "../components/Input/Input"
import Button from "../components/Button/Button"
import AddFishImage from "../assets/img/AddFish-image.jpg"

function AddFish() {
    return(
        <>
            <Navbar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">             
                <div className="max-w-full">
                    <img className='w-full h-full object-cover' src={AddFishImage} alt="120" style={{ height: '720px' }} />
                </div>

                <div className='flex flex-col justify-center'>
                    <form className='max-w-[400px] w-full mx-auto p-8 px-8 rounded-lg'>
                        <h2 className='text-4xl font-bold text-center m-4 -p4'>Agregar Pez</h2>

                        <div className='flex flex-col py-2'>
                            <label>Nombre del Pez</label>
                            <Input/>
                        </div>

                        <div className='flex flex-col py-2'>
                            <label>Especie del Pez</label>
                            <Input/>
                        </div>

                        <div className='flex flex-col py-2'>
                            <label>Url de la imagen</label>
                            <Input/>
                        </div>

                        <div className='flex flex-col py-2'>
                            <Button>Agregar Pez</Button>
                        </div>            
                    </form>
                </div>
            </div>
    </>
    )
}

export default AddFish