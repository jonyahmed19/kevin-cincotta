import React from "react"
import { navigate } from "@reach/router"

export default function H1(props) {
    return <h1 onClick={() => navigate(-1)}>{props.children}</h1>
}
