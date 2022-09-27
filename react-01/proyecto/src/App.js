import React, {Component} from 'react'
import About from './about/components/About';
import './App.css';
import Contact from './contact/components/Contact';
import Home from './home/components/Home';
import Container from './layout/container/componets/Container';
import Footer from './layout/footer/components/Footer';
import TopBar from './topBar/components/TopBar';
import UserList from './users/components/UserList';

class App extends Component {

  constructor() {
    super();
    this.state = {
      currentSection: "home"
    }
  }

  handleNavigate = (sectionName) => {
    this.setState({
      currentSection: sectionName
    })
  }


  render() {
    return (
      <div className='main'>
        <TopBar onNavigate={this.handleNavigate} />
        <Container>
            {this.state.currentSection === 'home' && <Home title="Mi web en React"/>}
            {this.state.currentSection === 'users' && <UserList/>}
            {this.state.currentSection === 'about' && <About/>}
            {this.state.currentSection === 'contact' && <Contact/>}
        </Container>
        <Footer/>
      </div>
    );

  }
}

export default App;
