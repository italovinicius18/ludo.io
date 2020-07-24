import React from "react";
import "./Home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="Home">
        <div className="Title">
          <h1> Ludo.io </h1>
        </div>
        <div className="Form">
          <input className="Username" type="text" name="username" placeholder="Digite seu username"></input>
          <div className="Buttons">
            <button className="Button" >Criar sala</button>
            <button className="Button" >Entrar em sala</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
