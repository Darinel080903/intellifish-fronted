import AdminSideBar from "../containers/AdminSideBar/AdminSideBar";
import Card from "../containers/Card/Card";

function Fishes() {
    return(
        <div>
            <AdminSideBar/>
            <div  className="w-full h-1/2 bg-cyan-500">
            <div className="grid grid-cols-3 gap-4 p-4">
                <Card
                    title="Título de la tarjeta"
                    content="Contenido de ejemplo para la tarjeta"
                    imageUrl="https://m.media-amazon.com/images/I/91YWJ31n0TL._AC_SL1500_.jpg"
                />
                <Card
                    title="Título de la tarjeta"
                    content="Contenido de ejemplo para la tarjeta"
                    imageUrl="https://m.media-amazon.com/images/I/91YWJ31n0TL._AC_SL1500_.jpg"
                />

                <Card
                    title="Título de la tarjeta"
                    content="Contenido de ejemplo para la tarjeta"
                    imageUrl="https://m.media-amazon.com/images/I/91YWJ31n0TL._AC_SL1500_.jpg"
                />
            </div>
            
            </div>
            <div  className="w-full h-1/2 bg-white">
                <div className="grid grid-cols-3 gap-4 p-4">
                    <Card
                        title="Título de la tarjeta"
                        content="Contenido de ejemplo para la tarjeta"
                        imageUrl="https://m.media-amazon.com/images/I/91YWJ31n0TL._AC_SL1500_.jpg"
                    />

                    <Card
                        title="Título de la tarjeta"
                        content="Contenido de ejemplo para la tarjeta"
                        imageUrl="https://m.media-amazon.com/images/I/91YWJ31n0TL._AC_SL1500_.jpg"
                    />

                    <Card
                        title="Título de la tarjeta"
                        content="Contenido de ejemplo para la tarjeta"
                        imageUrl="https://m.media-amazon.com/images/I/91YWJ31n0TL._AC_SL1500_.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default Fishes;