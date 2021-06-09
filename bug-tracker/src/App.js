import { Route, Switch } from 'react-router-dom';

import { GlobalProvider } from './context/GlobalState';

import { Home } from './components/Home';
import { AddBug } from './components/AddBug';
import { EditBug } from './components/EditBug';

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/add" component={AddBug} exact />
          <Route path="/edit/:id" component={EditBug} exact />
        </Switch>
      </div>
    </GlobalProvider>
  );
}

export default App;