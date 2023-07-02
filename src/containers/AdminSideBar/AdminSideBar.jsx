import Homesvg from '../../assets/svg/home.svg'

const AdminSideBar = () => {
    return (
        <nav className="bg-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-gray font-bold text-xl">IntelliFish</div>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Buscar"
                        className="py-1 px-2 rounded bg-gray-200 text-white"
                    />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 absolute top-1/2 right-2 transform -translate-y-1/2 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M11 0a9 9 0 100 18 9 9 0 000-18zm0 17.1A8.1 8.1 0 1119.1 9 8.1 8.1 0 0111 17.1z"
                            clipRule="evenodd"
                        />
                        <path
                            fillRule="evenodd"
                            d="M16.853 15.146l-4.598-4.598A6.9 6.9 0 1011 14.9a6.9 6.9 0 005.853-3.354l4.598 4.598a.5.5 0 01-.708.708z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
                <ul className="flex space-x-4">
                    <li>
                        <a href="#" className="text-gray-700 hover:text-gray-300">Home</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-gray-300">Fishes</a>
                    </li>
                    <li>
                        <a href="#" className="text-gray-700 hover:text-gray-300">Statics</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};
export default AdminSideBar;
