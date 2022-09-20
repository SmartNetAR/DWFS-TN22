import React, {Component} from 'react'
import './App.css';
import Avatar from './perfil/components/Avatar';
import Footer from './layout/footer/components/Footer';

class App extends Component {

  constructor() {
    super();
    this.state = {
      usuarios: [
        {id: 0, name: "marcelo", isBot: false, following: false}, 
        {id: 1, name: "lucas", isBot: true, following: false}, 
        {id: 2, name: "lucas", isBot: true, following: true}, 
        {id: 3, name: "juan", isBot: false, following: false}, 
        {id: 4, name: "martin", isBot: false, following: true}, 
        {id: 5, name: "cristian", isBot: true, following: true}, 
      ]
    }
  }

  handleOnToggleSeguir(usuario) {
    return () => {
      let followingNewValue = !usuario.following;

      const newUsersArray = Array.from(this.state.usuarios);
      newUsersArray[usuario.id].following = followingNewValue;

      this.setState({
        usuarios: newUsersArray
      })

    }
  }

  render() {

    return (
      <>
        <div className="App">
          <header className="App-header">
            {/* <Avatar/> */}
            {this.state.usuarios.map((usr, idx)=> (
              <Avatar
                nombre={usr.name} 
                esRobot={usr.isBot}
                esSeguido={usr.following}
                key={usr.name + idx}
                onToggleSeguir={this.handleOnToggleSeguir(usr)}
              />))}
            {/* {usuarios.map((usr)=> <p>{usr}</p>)} */}
          </header>
        </div>
        <Footer/>
      </>
    );

  }
}

export default App;
