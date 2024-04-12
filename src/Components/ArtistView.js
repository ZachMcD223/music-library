import { useState, useEffect } from "react"; 
import { useParams } from 'react-router-dom'
import './ArtistView.css'
function ArtistView() {
    const { id } = useParams
    const [ artistData, setArtistData ] = useState([])
    
   

    return (
        <div>
            
            <h2 className="bigOrangeText">The id passed was: {id}</h2>
            <p style={{'color': 'pink', fontSize: "40", fontWeight: 600}}>Artist Data Goes Here</p>
        </div>
    )
}

export default ArtistView