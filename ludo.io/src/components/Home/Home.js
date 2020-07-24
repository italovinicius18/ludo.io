import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends React.Component {
  
  constructor(props) {
    super(props);
    this.enterRoomPopUp = this.enterRoomPopUp.bind(this);
    this.generateRoomCode = this.generateRoomCode.bind(this);
    this.state = {
      name: "",
      room: this.generateRoomCode()
    };
  }


  enterRoomPopUp () {
    console.log('Foi')
  };

  generateRoomCode(){
    var roomCode = Math.random().toString(36).substring(2, 15);
    console.log(roomCode)
    return roomCode;
  }

  render() {
    return (
      <div className="Home">
        <div className="Title">
          <h1> Ludo.io </h1>
        </div>

        <div className="Form">
          <input
            className="Username"
            type="text"
            name="username"
            onChange={(event) => {this.setState({name: event.target.value})}}
            placeholder="Digite seu username"
          ></input>

          <div className="Buttons">
            <Link
              onClick={(e) => (!this.state.name ? e.preventDefault() : null)}
              to={`/Game?name=${this.state.name}&room=${this.state.room}`}
            >
              <button className="Button" type="submit">
                Criar sala
              </button>
            </Link>

              <button
                className="Button"
                onClick = {this.enterRoomPopUp}
              >
                Entrar em sala
              </button>
          </div>
        </div>
      </div>
    );
  }

}

export default Home;
