export default function Button(props) {
    return (
        <button type={props.type}>
            {props.name}
        </button>
    )
}
