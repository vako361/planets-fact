import data from '../data.json'
import { useParams } from 'react-router-dom'
export default function Planet(){
    let { planetName } = useParams()
    const filteredData = data.find((data) => data.name === planetName)
return(
    <main>
        
    </main>
)
} 