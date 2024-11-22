export default function ReadOnlyPost(props) {
    return(
        <div className="ReadOnlyPost">
            <h1>{props.author}</h1>

            <h4>Created on: {props.dateCreated}</h4>
            {
                props.lastUpdate !== props.dateCreated ?
                <h6>Last edited on: {props.lastUpdate}</h6>
                :null

            }
            <h3>{props.location}</h3>
            <p>{props.content}</p>
        </div>
    )
}