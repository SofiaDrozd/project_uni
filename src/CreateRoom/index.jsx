import React from "react";
import "./index.css";

const CreateRoom = () => {
  return (
    <>
      <div className="createRoom">
        <div className="createRoomPhrase">Створення заходу</div>
        <form className="createRoomForm">
          <input
            type="text"
            placeholder="Назва гри"
            name="nameGame"
            required
          ></input>

          <input type="text" placeholder="Місто" name="city" required></input>
          <input
            type="number"
            placeholder="Кількість місць"
            name="numberOfSeats"
            required
          ></input>

          <input
            type="number"
            min="0"
            step={0.1}
            placeholder="Вартість"
            name="price"
            required
          ></input>
          <input type="date" name="dateOfGame" required></input>
          <input type="time" name="timeOfStart" required></input>

          <input
            type="file"
            accept="image/*"
            name="photo"
            required
           
          />

          <button type="submit" className="createRoomButton">
            Створити
          </button>
        </form>
        <button className="logoutBtn">Вийти</button>
      </div>
    </>
  );
};

export default CreateRoom;
