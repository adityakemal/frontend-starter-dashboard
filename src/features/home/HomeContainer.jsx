import React from 'react'

export default function HomeContainer() {

    const handleLogout = ()=>{
        localStorage.clear()
        window.location.reload()
    }
    return (
        <div>
            <h1>
                home
            </h1>

            <button onClick={handleLogout}>logout</button>
        </div>
    )
}
