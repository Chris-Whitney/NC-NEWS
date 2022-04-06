import '../Styling/Error.css';

export function Error(props) {


    return (
        <div className="error-container">
            <h1 className="err-status">{props.error.status}</h1>
            <h2 className="error-msg">{props.error.data.message}</h2>
        </div>
    )
}