//Displays the full lists 
import { useEffect, useState } from 'react';
import URLItem from './URLItem';
import Card from '../UI/Card'
import './UrlFullList.css'
function UrlFullList(){
    const [urlInfo, setUrlInfo] = useState();

    const BASE_URL = "https://localhost:5000"

    useEffect(() => {
        getUrlInfo();
    }, [])

    const handleUrlInfo = value => {
        setUrlInfo(value);
    }

    function getUrlInfo(){
        //API call to fetch everything 
        //Fetch num of total document count - To determine how many pages for tthe reult to use in pagination
        fetch("http://localhost:5000/url/short" , {
        method: "GET",
        headers: {
            "accept": "application/json",
        },
        })
        .then((res) =>{
            console.log(res)
            return res.json();
        }).then(data => {
            console.log(data)
            handleUrlInfo(data)
            return
        })

    }



    return( 
        <div className = "container">
 
            {
                urlInfo &&  
                <ul className = "vertical-wrapper">
                    <li>
                        <Card className = "header-card">
                        <div className = "header-wrapper">Full URL</div>
                        <div className = "header-wrapper">Shortened URL</div>
                        </Card>
                    </li>
                    {       
                        urlInfo.map(urlInfo => (
                            <URLItem key = {urlInfo.short} shortUrl = {urlInfo.short} fullUrl = {urlInfo.fullUrl}></URLItem>
                        ))
    
                    }
                </ul>
            }
               
        </div>
 
 
    )


}

export default UrlFullList;