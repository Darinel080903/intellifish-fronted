import Navbar from "../containers/Navbar/Navbar";
import BarChart from "../components/BarChart/BarChart";
import LineChart from "../components/LineChart/LineChart";
import SecondaryCard from "../containers/SecondaryCard/SecondaryCard";

function Statistics() {
    return(
        <>
            <Navbar/>
            <div className="bg-white min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Estadisticas</h2>
                            <LineChart></LineChart>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Estadisticas</h2>
                            <LineChart></LineChart>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Estadisticas</h2>
                            <LineChart></LineChart>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Estadisticas</h2>
                            <BarChart></BarChart>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Estadisticas</h2>
                            <BarChart></BarChart>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Estadisticas</h2>
                            <BarChart></BarChart>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Statistics;