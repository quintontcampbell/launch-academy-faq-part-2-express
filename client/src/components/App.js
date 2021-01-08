import React from 'react'
import {BrowserRouter, Switch, Route} from "react-router-dom"
import { hot } from "react-hot-loader/root"

import FAQList from "./FAQList"

const App = (props) => {
  return (
    <BrowserRouter>
      <Route path="/" component={FAQList} />
    </BrowserRouter>
  )
}

export default hot(App)
