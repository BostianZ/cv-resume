export default function Input(props) {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type}></input>
        </div>
    )
}