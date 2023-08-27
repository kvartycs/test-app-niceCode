import './index.sass'
import { Filter, Header, Personal, UsersList, MainPanel } from './components'

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="leftcol">
          <Filter />
          <UsersList />
        </div>
        <div className="rightcol">
          <Personal />
          <MainPanel />
        </div>
      </div>
    </div>
  )
}

export default App
