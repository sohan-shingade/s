import {FC, useEffect, useState} from 'react'
import {db} from './firebase'
import {ComposedChart, XAxis, YAxis, CartesianGrid, Bar} from 'recharts'

const DisplayMatches:FC = () => {
    const [matchData, setMatchData] = useState<any[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const matchRef = await db.collection('regionals')
                .doc('cc')
                .collection('matches')
                .get()
            setMatchData(matchRef.docs.map(doc => doc.data()))
        }
        fetchData();
    }, [])
    return (
        <div>
            <ComposedChart data={matchData} width={700} height={700}>
                <XAxis dataKey={'matchNum'}/>
                <YAxis />
                <CartesianGrid />
                <Bar dataKey={'teleopBottom'} />
            </ComposedChart>
        </div>
    )
}

export default DisplayMatches