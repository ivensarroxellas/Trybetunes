import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileEdit from './pages/ProfileEdit';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Album from './pages/Album';
import Search from './pages/Search';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <p>TrybeTunes</p>
        <Switch>
          <Route path="/profile/edit" render={ () => <ProfileEdit /> } />
          <Route path="/profile" render={ () => <Profile /> } />
          <Route path="/favorites" render={ () => <Favorites /> } />
          <Route path="/album/:id" render={ () => <Album /> } />
          <Route path="/search" render={ () => <Search /> } />
          <Route exact path="/" render={ () => <Login /> } />
          <Route exact path="" component={ NotFound } />
        </Switch>
      </>
    );
  }
}

export default App;
