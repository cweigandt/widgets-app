import './App.css'

import { Route, Switch } from 'react-router-dom'

import SideBar from './components/sidebar/SideBar'
import Clock from './components/widgets/Clock'

const Home = () => null

const App = () => {
  const renderRoutes = () => (
    <Switch>
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
