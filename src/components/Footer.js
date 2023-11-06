import { useContext } from "react"

import { UserContext } from "../App"

export default function Footer() {
    const userInfo = useContext(UserContext)
    const today = new Date()
    const year = today.getFullYear()

    
    return (
        <>
            <footer>
                <small>Deborina Dávila 🦩 copyright © 2023 | all rights reserved</small>
            </footer>
        </>
    )
}