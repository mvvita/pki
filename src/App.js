import './style.sass'
import Header from './components/Header'
import {Outlet} from 'react-router'


const App = props => {
  return (
    <div className="App">
      <Header />
        <div className="App__content"><Outlet {...props} /></div>
    </div>
  );
}

export default App;
