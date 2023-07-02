import AdminSideBar from "../containers/AdminSideBar/AdminSideBar";
import Card from "../containers/Card/Card"

function Home() {
    return(
        <>
            <AdminSideBar/>
            <div className="grid grid-cols-1 sm:grid-cols-2 h-screen w-full">
                <div className="w-full h-full bg-cyan-500">

                </div>
            </div>
        </>
    )
}

export default Home;