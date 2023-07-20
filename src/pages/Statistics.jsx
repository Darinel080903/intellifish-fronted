import Navbar from "../containers/Navbar/Navbar";
import BarChartPhSensorMeanDeviation from "../components/BarChart/BarChartPhSensorMeanDeviation";
import LineChart from "../components/LineChart/LineChart";
import BarChartTemperatureMeanDeviation from "../components/BarChart/BarChartTemperatureMeanDeviation";
import LineChartPhAverage from "../components/LineChart/LineChartPhAverage";
import LineChartWaterFlow from "../components/LineChart/LineChartWaterFlow";
import BarChartWaterFlowMeanDeviation from "../components/BarChart/BarChartWaterFlowMeanDeviation";

function Statistics() {
    return(
        <>
            <Navbar/>
            <div className="bg-white min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Temperatura del Agua</h2>
                            <LineChart/>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Ph del agua</h2>
                            <LineChartPhAverage/>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Flujo de Agua</h2>
                            <LineChartWaterFlow/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Desviacion Estandar Temperatura</h2>
                            <BarChartTemperatureMeanDeviation/>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Desviacion Estandar Ph</h2>
                            <BarChartPhSensorMeanDeviation/>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Desviacion Estandar Flujo de Agua</h2>
                            <BarChartWaterFlowMeanDeviation/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Statistics;