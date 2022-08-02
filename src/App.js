import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileEdit from './pages/ProfileEdit';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';
import Album from './pages/Album';
import Search from './pages/Search';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import Header from './component/Header';

class App extends React.Component {
  state ={
    nameEntered: '',
    isButtonDisabled: true,
  }

  handleChange = (event) => {
    this.setState(() => ({ [event.target.name]: event.target.value }),
      this.handledButton);
  };

  handledButton = () => {
    const { nameEntered } = this.state;
    const tres = 3;
    const button = nameEntered.length < tres;
    this.setState({
      isButtonDisabled: button,
    });
  }

  render() {
    const { isButtonDisabled, nameEntered } = this.state;
    return (
      <>
        <p id="app">TrybeTunes</p>
        <Switch>
          <Route path="/profile/edit" render={ () => <ProfileEdit /> } />
          <Route path="/profile" render={ () => <Profile /> } />
          <Route path="/favorites" render={ () => <Favorites /> } />
          <Route path="/album/:id" render={ () => <Album /> } />
          <Route path="/search" render={ () => <Search /> } />
          <Route
            exact
            path="/"
            render={ () => (<Login
              nameEntered={ nameEntered }
              isButtonDisabled={ isButtonDisabled }
              onInputChange={ this.handleChange }
            />) }
          />
          <Route exact path="" component={ NotFound } />
        </Switch>
      </>
    );
  }
}

export default App;
