import Navbar from "../containers/Navbar/Navbar";
import LineChart from "../components/LineChart/LineChart"
import BarChart from "../components/BarChart/BarChart";
import Card from "../containers/Card/Card"
import Button from "../components/Button/Button";
import { Link } from 'react-router-dom';
import { Route } from "routes";
import routes from "../consts/routes";
import PlantCard from "../containers/Card/PlantCard"

function Home() {
    return(
        <>
            <Navbar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="w-full h-full flex flex-row">
                    <div className="container mx-auto px-4 py-8 ">
                            <div className="bg-white p-8 rounded-lg shadow-md h-[454px]">
                                <h2 className="text-2xl font-bold mb-4 text-center">Estadisticas</h2>
                                <BarChart/>
                            </div> 
                            <div className="bg-white p-8 rounded-lg shadow-md mt-[6%] h-[454px]">
                                <h2 className="text-2xl font-bold  text-center">Estadisticas</h2>
                                <LineChart/>
                            </div> 
                    </div> 
                </div>
                <div>
                    <div className="grid place-items-center">
                        <div className="px-4 py-8">
                            <Link to={routes.addfish}>      
                                <Card
                                    title="Agregar Peces"
                                    content=""
                                    imageUrl="https://images.unsplash.com/photo-1515474594679-6a13c25afb99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            />
                            </Link>
                        </div>
                        <div className="px-4 py-4">
                            <Link to={routes.addplants}>            
                                <PlantCard
                                    title="Agregar Plantas"
                                    content=""
                                    imageUrl="https://images.unsplash.com/photo-1589820744723-216e76967832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>        
        </>
    )
}

export default Home;