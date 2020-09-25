import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import One from './components/One'
import Two from './components/Two'
import Error from './components/Error'

const App = () => {
  return (
    <div className="App">
      <h1>App.js</h1>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/one" component={One} />
          <Route path="/two" component={Two} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
