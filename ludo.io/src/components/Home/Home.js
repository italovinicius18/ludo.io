import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

function generateRoomCode() {
  var roomCode = Math.random().toString(36).substring(2, 15);
  return roomCode;
}

const Home = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState(generateRoomCode);
  const [displayRoomPopUp, setDisplayRoomPopUp] = useState(false);

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
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="Digite seu username"
        ></input>

        <div className="Buttons">
          <Link
            onClick={(e) => (!name ? e.preventDefault() : null)}
            to={`/Game?name=${name}&room=${room}`}
          >
            <button className="Button">Criar sala</button>
          </Link>

          <button
            className="Button"
            onClick={() => {
              setDisplayRoomPopUp(!displayRoomPopUp);
            }}
          >
            Entrar em sala
          </button>
        </div>

        <div>
          {displayRoomPopUp ? (
            <div>
              <input
                type="text"
                name="roomCode"
                onChange={(event) => {
                  setRoom(event.target.value);
                }}
                placeholder="Digite o código da sala"
              ></input>

              <Link
                onClick={(e) => (!name ? e.preventDefault() : null)}
                to={`/Game?name=${name}&room=${room}`}
              >
                <button className="Button">Entrar</button>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Home;
