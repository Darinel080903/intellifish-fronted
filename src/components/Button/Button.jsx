const Button = ({width, onClickHandler, type, children}) => {
    return <button onClick={onClickHandler} type={type} className={`${width} bg-cyan-400 text-white rounded-lg w-full my-5 py-2 shadow-lg hover:bg-cyan-500`}>
        {children}
    </button>;
};
export default Button;