import { ChangeEvent, useState } from 'react'
import styles from './MyFrogs.module.css'
import greenFrogImg from './media/frogGreen.png'
import brownFrogImg from './media/frogBrown.png'
import poisonFrogImg from './media/frogPoison.png'


type Frog = {
    name: string,
    species?: Species
}
enum Species {
    green,
    brown,
    poison
}

export const MyFrogs = () => {

    const [myFrogs, setMyFrogs] = useState<Frog[]>([
        {
            name:"froggi",
            species: Species.green
        },
        {
            name:"frogette",
            species: Species.brown
        },
        {
            name:"frogley",
            species: Species.poison
        },
        {
            name:"frogson",
            species: Species.green
        }
    ])
    const [frogName, setFrogName] = useState("")
    const onChangeInput = (value: ChangeEvent<HTMLInputElement>) => {
        setFrogName(value.target.value)
    }
    const [currentFrogSpecies, setCurrentFrogSpecies] = useState(Species.green)
    const onSpeciesChange = (value: ChangeEvent<HTMLSelectElement>) => {
        console.log(value.target.value)
        let selValue: Species = currentFrogSpecies
        if (parseInt(value.target.value) == Species.green){
            console.log("GREEN FROG :0 ")
            selValue = Species.green
        }
        else if (parseInt(value.target.value) == Species.brown){
            selValue = Species.brown
        }
        else if (parseInt(value.target.value) == Species.poison){
            selValue = Species.poison 
        }
        setCurrentFrogSpecies(selValue)
    }

    const getFrogImage = (frogToConvert?:Species) => {
        if (frogToConvert == Species.green){
            return greenFrogImg
        }
        else if (frogToConvert == Species.brown){
            return brownFrogImg
        }
        else if (frogToConvert == Species.poison){
            return poisonFrogImg
        }
        return undefined

    }

    const addFrog = () => {
        console.log("Frog added :)")
        setMyFrogs((myCurrentFrogs) => {
            const newFrog: Frog = {
                name: frogName,
                species: currentFrogSpecies
            }
            const newArray = myCurrentFrogs.concat(newFrog)
            return newArray
        })
    }

    return (<div className={styles.container}>
        <div className={styles.frogContainer}>
            {myFrogs.map( (frobject, i) => {
                return <div key={i} className={styles.frogCard}>
                        <div>{frobject.name}</div>
                        <img className={styles.frogThumbnail} src={getFrogImage(frobject.species)}/>
                     </div>
            } )}
        </div>
        <input type="text" className={styles.nameInput} value={frogName} onChange={onChangeInput}/>
        <label htmlFor="frog-select">Choose a pet:</label>
        <select name="frogs" id="frog-select" onChange={onSpeciesChange}>
            <option value="">--Please choose a frog species--</option>
            <option value={Species.green}>Green</option>
            <option value={Species.brown}>Brown</option>
            <option value={Species.poison}>Poison</option>
        </select>
        <div className={`${styles.newFrogBtn} buttonCursor`} onClick={() => {return addFrog()}} >Add New Frog</div>
    </div>
    )
}