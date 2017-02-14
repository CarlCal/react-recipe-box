
// check webpack comiling times,
// look for optimization

// CSS via Loaders

import React from "react"
import ReactDOM from "react-dom"

import "../css/main.css"

import Layout from "./components/Layout"

const app = document.getElementById('app')
ReactDOM.render(<Layout/>, app)
