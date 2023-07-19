function Input({
    type,
    placeholder,
    id,
    name,
    value,
    onChange,
    handleBlur,
    required
}) {
    return (
        <input
            value={value}
            type={type}
            id={id}
            name={name}
            placeholder={placeholder}
            onChange={onChange}
            required={required}
            onBlur={handleBlur}
            className='rounded-lg mt-2 p-2  placeholder-gray-400 focus:outline-none focus:outline-principal-color'
        />
    );
}
export default Input;