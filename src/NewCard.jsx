import React, { useEffect } from 'react'
import firebase from './firebase'

function NewCard() {
    const [DataOfCards,setDataOfCards] = useState('')

    useEffect(()=>{
        const dataRef = firebase.database().ref('Cards')
        dataRef.on('value',(snapshot)=>{
            const data = snapshot.val();
            const DataOfCards = []
            for(let id in data){
                DataOfCards.push(data[id])
            }
            console.log(DataOfCards)
            setDataOfCards(DataOfCards)
        })
    },[])
    return (
        <div>
            
        </div>
    )
}

export default NewCard
