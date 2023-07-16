const SecondaryButton = ({width, onClickHandler, type, children}) => {
    return <button onClick={onClickHandler} type={type} className={`${width} bg-lime-700 text-white rounded-lg w-full my-5 py-2 shadow-lg hover:bg-cyan-500`}>
        {children}
    </button>;
};
export default SecondaryButton;