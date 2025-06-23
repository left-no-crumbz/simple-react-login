export default function Input(props) {
    const Icon = props.icon;
    return (
        <>
            <label htmlFor={props.id}>{props.label}</label>
            <div className="custom-input">
                <Icon className='icon' />
                <input
                    id={props.id}
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder} 
                    value={props.value}
                    onChange={props.onChange} />
            </div>
        </>
    );
}