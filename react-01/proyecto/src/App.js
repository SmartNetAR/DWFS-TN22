import logo from './logo.svg';
import './App.css';
import Avatar from './perfil/components/Avatar';
import Footer from './layout/footer/components/Footer';

function App() {
  const usuarios = [
    {name: "lucas", isBot: true, following: true}, 
    {name: "lucas", isBot: true, following: true}, 
    {name: "juan", isBot: false, following: false}, 
    {name: "martin", isBot: false, following: true}, 
    {name: "cristian", isBot: true, following: true}, 
  ];

  function handleOnToggleSeguir(event) {
    console.log(event)
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <Avatar/> */}
          {usuarios.map((usr, idx)=> (
            <Avatar
              nombre={usr.name} 
              esRobot={usr.isBot}
              esSeguido={usr.following}
              key={usr.name + idx}
              onToggleSeguir={handleOnToggleSeguir}
            />))}
          {/* {usuarios.map((usr)=> <p>{usr}</p>)} */}
        </header>
      </div>
      <Footer/>
    </>
  );
}

export default App;
