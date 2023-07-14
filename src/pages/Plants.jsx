import Navbar from "../containers/Navbar/Navbar";
import PlantCard from "../containers/Card/PlantCard";


function Plants(params) {
    return(
        <div>
            <Navbar/>
            <div className="bg-white min-h-screen">
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 justify-items-center">
                        <PlantCard
                            title="Título de la tarjeta"
                            content=""
                            imageUrl="https://images.unsplash.com/photo-1589820744723-216e76967832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        />
                        <PlantCard
                            title="Título de la tarjeta"
                            content=""
                            imageUrl="https://images.unsplash.com/photo-1589820744723-216e76967832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        />
                        <PlantCard
                            title="Título de la tarjeta"
                            content=""
                            imageUrl="https://images.unsplash.com/photo-1589820744723-216e76967832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        />
                    
                        <PlantCard
                            title="Título de la tarjeta"
                            content=""
                            imageUrl="https://images.unsplash.com/photo-1589820744723-216e76967832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        />
                        <PlantCard
                            title="Título de la tarjeta"
                            content=""
                            imageUrl="https://images.unsplash.com/photo-1589820744723-216e76967832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        />
                        <PlantCard
                            title="Título de la tarjeta"
                            content=""
                            imageUrl="https://images.unsplash.com/photo-1589820744723-216e76967832?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                        />
                    </div>
                </div>
            </div>
        </div>
    ) 
}
export default Plants;