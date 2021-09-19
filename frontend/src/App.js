import { useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Nav from './components/Nav/Nav';
import SignOut from './components/Forms/SignOut/SignOut';
import SignIn from './components/Forms/SignIn/SignIn';
import { useDispatch } from 'react-redux';
import { checkAuthStart } from './redux/actions/user.ac';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkAuthStart())
  }, [])

  return (
    <div className="container">
      <Router>
        <Nav />

        <div className="container py-5">
          <Switch>

            <Route exact path="/">
              <Header />
              <Main />
            </Route>

            <Route path="/user/notesList">
              <Header />
              <Main />
            </Route>

            <Route path="/auth/signin">
              <SignIn />
            </Route>

            <Route path="/auth/signout">
              <SignOut />
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
