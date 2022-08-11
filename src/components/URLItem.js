
import Card from '../UI/Card'
import './URLItem.css'

function URLItem(props){

    return( 
        <li>
        <Card className = "url-item">
            <div className = "column-wrapper">
            {props.fullUrl}
            </div>
            <div className = "column-wrapper">
            <a className = "links" href = {props.shortUrl} target = "_blank">{props.shortUrl}</a>
            </div>
        </Card>
        </li>
    )
}

export default URLItem;