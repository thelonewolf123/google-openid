import React, { Component } from 'react';
import Authenticate from 'react-openidconnect';
import OidcSettings from './oidcsettings';
 
class App extends Component {
 
  constructor(props) {
    super(props);
    this.userLoaded = this.userLoaded.bind(this); 
    this.userUnLoaded = this.userUnLoaded.bind(this);
 
    this.state = { user: undefined };
  }  
 
  userLoaded(user) {
    if (user)
      this.setState({ "user": user });
      console.log(user);
      this.parseUserData(user)
  } 
  
  userUnLoaded() {
    this.setState({ "user": undefined });
  } 
 
  NotAuthenticated() {
    return <div>You are not authenticated, please click here to authenticate.</div>;
  }

  parseUserData(user) {
    const user_data = JSON.parse(atob(user.id_token.split('.')[1]));
    console.log(user_data);
    this.setState({ "user": user_data });
    return user_data;
  }
  
  
  render() {
      return (
        <Authenticate OidcSettings={OidcSettings} userLoaded={this.userLoaded} userunLoaded={this.userUnLoaded} renderNotAuthenticated={this.NotAuthenticated}>
            <div> You are authenticated. </div>
        </Authenticate>
      )
  }
}

export default App;