import "./Lane.css";

function Lane(props) {
    return (
        <div className="lane">
            {props.children}
        </div>
    )
}

export default Lane;
