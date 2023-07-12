import AdminSideBar from "../containers/AdminSideBar/AdminSideBar";
import Card from "../containers/Card/Card"
import Button from "../components/Button/Button";

function Home() {
    return(
        <>
            <AdminSideBar/>
            <div className="bg-sky-600 min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Peceras</h2>
                            <Card
                                title="Título de la tarjeta"
                                content="Contenido de ejemplo para la tarjeta"
                                imageUrl="https://images.unsplash.com/photo-1687482383862-aaa7360e8a57?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            />
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4 text-center">Plantas</h2>
                            <Card
                                title="Título de la tarjeta"
                                content="Contenido de ejemplo para la tarjeta"
                                imageUrl="https://images.unsplash.com/photo-1561990488-0e16d60eaa79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1810&q=80"
                            />
                        </div>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-bold mb-4">Peces</h2>
                            <Card
                                title="Título de la tarjeta"
                                content="Contenido de ejemplo para la tarjeta"
                                imageUrl="https://images.unsplash.com/photo-1558287959-9ef29358d6ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;