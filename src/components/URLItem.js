
import Card from '../UI/Card'
import './URLItem.css'

function URLItem(props){

    return( 
        <Card className = "url-item">
            <div className = "column-wrapper">
            {props.fullUrl}
            </div>
            <div className = "column-wrapper">
            <a className = "links" href = {props.shortUrl} target = "_blank">{props.shortUrl}</a>
            </div>
        </Card>
    )
}

export default URLItem;