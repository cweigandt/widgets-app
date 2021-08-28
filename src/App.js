import './App.css'

import { Route, Switch } from 'react-router-dom'

import Home from './components/home/Home'
import SideBar from './components/sidebar/SideBar'
import Clock from './components/widgets/clock'
import Weather from './components/widgets/weather'

const App = () => {
  const renderRoutes = () => (
    <Switch>
      <Route path='/weather' component={Weather} />
      <Route path='/clock' component={Clock} />
      <Route exact path='/' component={Home} />
    </Switch>
  )
  return (
    <div className='App'>
      <SideBar />
      <div className='page'>{renderRoutes()}</div>
    </div>
  )
}

export default App
