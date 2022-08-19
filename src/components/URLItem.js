
import Card from '../UI/Card'
import './URLItem.css'

function URLItem(props){

    function onClickUrl(){
        //We might need to set a timeout for database to load before refreshing the page
        setTimeout(() => {
            props.getUrlInfo()
            // this.setState({ render : !this.state.render })
         }, 1000)
        props.getUrlInfo()
    }


    return( 
        <Card className = "url-item">
            <div className = "column-wrapper">
            {props.fullUrl}
            </div>
            <div className = "column-wrapper">
            <a className = "links" onClick = {onClickUrl} href = {props.shortUrl} target = "_blank">{props.shortUrl}</a>
            </div>
            <div className = "column-wrapper">
                {props.clicks}
            </div>
        </Card>
    )
}

export default URLItem;