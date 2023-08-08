import { useState } from "react"

function Input({ setUserData }) {
    const [username, setUsername] = useState('')

    const fetchUser = async (e) => {
        e.preventDefault()
        const url = `https://api.github.com/users/${username}` 
        const response = await fetch(url)
        const data = await response.json()
    
        setUserData(data)
        console.log(data)
    }
    return (
        <form onSubmit={fetchUser}>
            <input onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <input type='submit' />
        </form>
    )
}

export default Input