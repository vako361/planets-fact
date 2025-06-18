import data from '../data.json'
import { useParams } from 'react-router-dom'
import { useMemo } from 'react'

export default function Planet(){ 
    let  planet  = useParams()
    const filteredData = useMemo(
        () => data.find((data) => data.name === planet.planet),
        [planet]
    )
console.log(planet)
    return (
        <main>
            <h2>{filteredData ? filteredData.name : "Planet not found"}</h2>
        </main>
    )
}