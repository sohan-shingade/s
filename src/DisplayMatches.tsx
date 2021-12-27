import {FC, useEffect, useState} from 'react'
import {db} from './firebase'

const DisplayMatches:FC = () => {
    const [matchData, setMatchData] = useState<any[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const matchRef = await db.collection('regionals').doc('cc').collection('matches').get()
            matchRef.forEach((doc) => {
                setMatchData([...matchData, doc.id])
            })
            // setMatchData(matchRef.docs.map(doc => doc.data()))
        }
        fetchData();
    }, [])
    return (<div>
        <ul>
            {matchData.map(match => <li>{JSON.stringify(match)}</li>)}
        </ul>
    </div>)
}

export default DisplayMatches