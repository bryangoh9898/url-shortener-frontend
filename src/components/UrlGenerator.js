import './UrlGenerator.css';
import { useState, useEffect } from 'react';
import { TailSpin } from  'react-loader-spinner'

function UrlGenerator(){
    
    const [fullUrl, setFullUrl] = useState('');
    const [shortenedUrl, setShortenedUrl] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [showFullUrl, setShowFullUrl] = useState('');
    const [loading, setLoading] = useState(false);

    // const BASE_URL = "http://localhost:5000";
    const BASE_URL = "https://url-backend1.herokuapp.com";

    const handleFullUrl = event => {
        setFullUrl(event.target.value);
    }

    const handleLoading = value => {
        setLoading(value)
    }

    const handleShortenedUrl = value => {
        setShortenedUrl(value);
    }

    const handleErrorMsg = value => {
        setErrorMsg(value);
    }

    const handleShowFullUrl = value => {
        setShowFullUrl(value);
    }

    
    function submitHandler(){
        handleLoading(true);
        var objBody = {
            "fullUrl": fullUrl
        }

        fetch( BASE_URL + "/url/short" , {
            method: "POST",
            headers: {'Content-Type': 'application/json' },
            body: JSON.stringify(objBody)
            })
            .then((res) =>{
                handleLoading(false);
                if(res.status === 200){
                    res.json().then((data) => {
                        handleShortenedUrl(data["short"]);
                        handleShowFullUrl(data["fullUrl"])
                        handleErrorMsg('');
                    })
                }
                else{
                    res.json().then((data) => {
                        handleErrorMsg(data["error"]);
                        handleShortenedUrl('');
                    })
                }
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

            <ul className = "vertical-wrapper">
                <li className = "list-wrapper">
                <h2>URL-Shortener Web App</h2>
                </li>
                <li className = "list-wrapper">
                <input className = "input-wrapper" placeholder = "Shorten Your Url" onChange = {handleFullUrl}></input>
                <button className = "button-wrapper" onClick = {submitHandler} >Shorten</button>
                </li>
                {loading && 
                    <li className = "list-wrapper">
                    <TailSpin
                    height = "80"
                    width = "80"
                    radius = "9"
                    color = 'blue'
                    ariaLabel = 'three-dots-loading'     
                    /> 
                    </li>
                }
                {shortenedUrl && 
                <li className = "list-wrapper">
                    <div className = "result-wrapper">
                    <div className = "test-full">Full Url: {showFullUrl}</div>
                    <div> Shortened URL: 
                    <a className = "short-full" style = {{marginLeft : "10px", color: "#0236b9"}} href = {shortenedUrl} target = "_blank">{shortenedUrl}</a>
                    </div>
                    </div>
                    {/* <div className = "space-wrapper">{showFullUrl}</div>
                    <a className = "link-wrapper" href = {shortenedUrl} target = "_blank">{shortenedUrl}</a> */}
                 
                </li>
                }
                {errorMsg &&
                <li className = "list-wrapper">
                {errorMsg}
                </li>
                }

            </ul>

        
        </div>
    )
}

export default UrlGenerator;