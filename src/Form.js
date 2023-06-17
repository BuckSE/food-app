import React from "react"

function Form() {
    return (
        <form>
            <input type="name" placeholder="first name"/>
            <input type="name" placeholder="last name"/>
            <input type="email" placeholder="email" />
            <input type="password" placeholder="password"/>
            <input type="password" placeholder="verify password"/>
            <button>Sign up</button>
        </form>
    )
}

export default Form 