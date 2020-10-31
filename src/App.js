import './App.css';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Upload from './screens/Upload';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/upload_xlsx" component={Upload}/>
        </Switch>
      </div>
  );
}

export default App;
