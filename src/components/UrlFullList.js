//Displays the full lists 
import { useEffect, useState } from 'react';
import URLItem from './URLItem';
import Card from '../UI/Card'
import './UrlFullList.css'
import { TailSpin } from  'react-loader-spinner'

function UrlFullList(){
    const [urlInfo, setUrlInfo] = useState();
    const [loading, setLoading] = useState(false);

    // const BASE_URL = "http://localhost:5000"
    const BASE_URL = "https://url-backend1.herokuapp.com";


    const handleLoading = value => {
        setLoading(value)
    }

    useEffect(() => {
        getUrlInfo();
    }, [])

    const handleUrlInfo = value => {
        setUrlInfo(value);
    }

    function getUrlInfo(){
        //API call to fetch everything 
        //Fetch num of total document count - To determine how many pages for tthe reult to use in pagination
        handleLoading(true);
        fetch( BASE_URL + "/url/short" , {
        method: "GET",
        headers: {
            "accept": "application/json",
        },
        })
        .then((res) =>{
            console.log(res)
            return res.json();
        }).then(data => {
            handleLoading(false);
            console.log(data)
            handleUrlInfo(data)
            return
        })

    }


    if(loading){
        document.body.classList.add('active-popUp')
    }
    else{
        document.body.classList.remove('active-popUp')
    }


    return( 
        <div className = "container">
            <ul className = "vertical2-wrapper">
            <li>
                        <Card className = "header-card">
                        <div className = "header-wrapper">Full URL</div>
                        <div className = "header-wrapper">Shortened URL</div>
                        </Card>
            </li>
            {
                urlInfo &&  <li>
                    {       
                        urlInfo.map(urlInfo => (
                            <URLItem key = {urlInfo.short} shortUrl = {urlInfo.short} fullUrl = {urlInfo.fullUrl}></URLItem>
                        ))
    
                    }
                    </li>
            }

            {
                loading && <li style = {{  justifyContent: "center",display:"flex"}}>
                <TailSpin
                    height = "80"
                    width = "80"
                    radius = "9"
                    color = 'blue'
                    ariaLabel = 'three-dots-loading'     
                    /> 
                    </li>
            }
            </ul>
               
        </div>
 
 
    )


}

export default UrlFullList;