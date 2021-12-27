import {FC, useState} from 'react'
import {db} from './firebase'

const ContributorInput:FC = () => {
    const [name, setName] = useState<string>('')

    const handleSubmit = async () => {
        await db.collection('contributors').doc(name).set({
            name: name
        })
        console.log("done")
    }

    return <div>
        <input onChange={(e) => setName(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
    </div>
}

export default ContributorInput;