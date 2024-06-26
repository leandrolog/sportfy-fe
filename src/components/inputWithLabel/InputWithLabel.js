const InputWithLabel = ({
                            type, defaultValue, title, onChange, placeholder,
                            className, value, disabled, style, inputClassName
                        }) => {
    const inputStyle = {
        ...style
    };
    return (
        <div className={inputClassName}>
            <label className="label-title">{title}</label>
            <input
                type={type}
                value={value}
                disabled={disabled}
                placeholder={placeholder}
                onChange={onChange}
                className={className}
                defaultValue={defaultValue}
                style={inputStyle}
            >
            </input>
        </div>
    )
}
export default InputWithLabel
