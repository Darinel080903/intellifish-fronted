import Navbar from "../containers/Navbar/Navbar";
import Card from "../containers/Card/Card";

function Fishes() {
    return(
        <div>
            <Navbar/>
            <div  className="w-full h-1/2 bg-sky-600">
            <div className="grid grid-cols-3 gap-4 p-4">
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
            <div  className="w-full h-1/2 bg-white">
                <div className="grid grid-cols-3 gap-4 p-4">
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
    );
}

export default Fishes;