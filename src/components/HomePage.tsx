import { useState } from "react"
import styles from './HomePage.module.css'
import headerImage from './media/frogHeader.png'

import myFrogNavImg from './media/myFrogsNav.png'
import myFrogNavImgHover from './media/myFrogsNav_hover.png'
import myFrogNavImgActive from './media/myFrogsNav_active.png'

import frogShopNavImg from './media/frogShopNav.png'
import frogShopNavImgHover from './media/frogShopNav_hover.png'
import frogShopNavImgActive from './media/frogShopNav_active.png'


import frogpediaNavImg from './media/frogpediaNav.png'
import frogpediaNavImgHover from './media/frogpediaNav_hover.png'
import frogPediaNavImgActive from './media/frogpediaNav_active.png'


import frogGamesNavImg from './media/frogGameNav.png'
import frogGamesNavImgHover from './media/frogGameNav_hover.png'
import frogGamesNavImgActive from './media/frogGameNav_active.png'
import { stat } from "fs"
import { Link, Outlet } from "react-router-dom"

const stringington: String | Number = 2

export const HomePage = () => {

    const [numberOfFrogs, setNumberOfFrogs] = useState(0)
    const [bgRed, setBgRed] = useState(0)
    const [bgGreen, setBgGreen] = useState(255)
    const [bgColour, setBgColour] = useState("rgb(255,0,0)")
    const [frogGamesSrc, setFrogGamesSrc] = useState(frogGamesNavImg)
    const [myFrogsSrc, setMyFrogsSrc] = useState(myFrogNavImg)
    const [frogShopSrc, setFrogShopSrc] = useState(frogShopNavImg)
    const [frogpediaSrc, setFrogpediaSrc] = useState(frogpediaNavImg)

    const onIncreaseFrogs = () => {
        console.log(`Frog :) ${bgRed} and ${bgGreen})`)
        setNumberOfFrogs((n) => n + 1)
        setBgRed((r) => {
            if (r>9){
                return r-10
            }
            return r 
        })
        setBgGreen((g) => {
            if (g<255){
                return g+10
            }
            return g
        })
    }

    const updateFrogGamesSrc = (state: "hover" | "active" | null) => {

        setFrogGamesSrc( state == "hover"
            ?  frogGamesNavImgHover
            : state == "active"
                ? frogGamesNavImgActive
                : frogGamesNavImg)
    }

    const updateMyFrogsSrc = (state: "hover" | "active" | null) => {

        setMyFrogsSrc( state == "hover"
            ?  myFrogNavImgHover
            : state == "active"
                ? myFrogNavImgActive
                : myFrogNavImg)
    }

    const updateFrogpediaSrc = (state: "hover" | "active" | null) => {

        setFrogpediaSrc( state == "hover"
            ?  frogpediaNavImgHover
            : state == "active"
                ? frogPediaNavImgActive
                : frogpediaNavImg)
    }

    const updateFrogShopSrc = (state: "hover" | "active" | null) => {

        setFrogShopSrc( state == "hover"
            ?  frogShopNavImgHover
            : state == "active"
                ? frogShopNavImgActive
                : frogShopNavImg)
    }

    const onReduceFrogs = () => {
        console.log(`No Frog :( ${bgRed} and ${bgGreen})`)
        setNumberOfFrogs((n) => n - 1)
        setBgRed((r) => {
            if (r<255){
                return r+10
            }
            return r 
        })
        setBgGreen((g) => {
            if (g>9){
                return g-10
            }
            return g
        })
    }

    return (<div className={styles.bg} style={{
        backgroundColor: `rgb(${bgRed}, ${bgGreen}, 255)`,
    }}> 

        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <Link to="/" className={styles.header} style={{backgroundImage: `url(${headerImage})`}}></Link>
                <div className={styles.navBar}>
                    <Link to="/myfrogs" className={`${styles.navBtn2} ${styles.myFrogs}`}></Link>
                    <Link to="/frogshop" className={`${styles.navBtn2} ${styles.frogShop}`}></Link>
                    <Link to="/frogpedia" className={`${styles.navBtn2} ${styles.frogpedia}`}></Link>
                    <Link to="/froggames" className={`${styles.navBtn2} ${styles.frogGames}`}></Link>
                </div>
                <div className={styles.body}>
                    <div className={styles.bodyColumnLeft}>
                        <div>
                            Number of Frogs :) {numberOfFrogs}
                        </div>
                        <button onClick={()=> onIncreaseFrogs()}> New Frog</button>
                        <button onClick={()=> onReduceFrogs()}> Remove Frog</button>
                    </div>
                    <div className={styles.bodyColumnMiddle}>
                        <Outlet />
                    </div>
                    <div className={styles.bodyColumnRight}>
                        <div className={`${styles.navBtn2} ${styles.frogpedia}`}/>
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
            </div>
        </div>
    </div>
    )
}

