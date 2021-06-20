import "./App.css";
import React from "react";
import { useState } from "react";

function App() {
  let [data, setData] = useState(null);
  let [count, setCount] = useState(0);
  let [massage, setMassage] = useState("");
  let [random, setRandom] = useState();
  const [equals, setEquals] = useState("");
  const [fire, setFire] = useState(false);
  const [hot, setHot] = useState(false);
  const [warm, setWarm] = useState(false);
  const [cold, setCold] = useState(true);
  const [winner, setWinner] = useState(false);
  const [error, setError] = useState("");

  const getData = (event) => {
    setData(event.target.value);
    console.log(event.target.value);
  };

  let handleSubmit = () => {
    if (data <= 100 && data >= 1) {
      setMassage(data);
      setEquals("try Again");
    } else setError("Error : out of Range !");
    // if (count <= 19 && count >= 0 && random == data && data != null) {
    //   setEquals({});
    if (count <= 19 && count >= 0) {
      setCount(count + 1);
    } else setMassage(" You Lose !");

    // if (data == null || count == 0 || data == 0) setCold(true);
    // else setCold(false);

    if (
      data == random + 15 ||
      data == random - 15 ||
      data == random + 14 ||
      data == random - 14 ||
      data == random + 13 ||
      data == random - 13 ||
      data == random + 12 ||
      data == random - 12 ||
      data == random + 11 ||
      data == random - 11
    ) {
      setWinner(false);
      setHot(false);
      setCold(false);
      setFire(false);
      setWarm(true);
    } else if (
      data == random + 10 ||
      data == random - 10 ||
      data == random + 9 ||
      data == random - 9 ||
      data == random + 8 ||
      data == random - 8 ||
      data == random + 7 ||
      data == random - 7 ||
      data == random + 6 ||
      data == random - 6 ||
      data == random + 5 ||
      data == random - 5
    ) {
      setHot(true);
      setCold(false);
      setFire(false);
      setWarm(false);
      setWinner(false);
    } else if (
      data == random + 4 ||
      data == random - 4 ||
      data == random + 3 ||
      data == random - 3 ||
      data == random + 2 ||
      data == random - 2 ||
      data == random + 1 ||
      data == random - 1
    ) {
      setFire(true);
      setCold(false);
      setHot(false);
      setWarm(false);
      setWinner(false);
    } else if (
      data > random ||
      data < random ||
      data == 0 ||
      data == null ||
      data != random
    ) {
      setCold(true);
      setFire(false);
      setHot(false);
      setWarm(false);
      setWinner(false);
    } else {
      setWinner(true);
      setCold(false);
      setFire(false);
      setHot(false);
      setWarm(false);
    }
  };

  let randomNumber = (min, max) => {
    if (count === 0) {
      setRandom(Math.floor(Math.random() * (100 - 1) * 1));
    } else if (count === 20) {
      console.log(equals);
    }
  };

  const reStart = () => {
    window.location.reload();
  };

  // let hintButton = (random) => {
  //   let arr = [random + 3, random - 2, random + 5, random - 4];
  // };

  return (
    <div className="App">
      <div class="page">
        <div class="card">
          <h3>{cold}</h3>
          {/* <h3>{random}</h3> */}
          <h2 id="error">{error}</h2>

          <h3> {equals}</h3>
          {fire ? (
            <div class="fire">
              <h1>Very Hot</h1>
            </div>
          ) : null}
          {hot ? (
            <div class="hot">
              <h1>Hot</h1>
            </div>
          ) : null}
          {warm ? (
            <div class="warm">
              <h1>Warm</h1>
            </div>
          ) : null}
          {cold ? (
            <div class="cold">
              <h1>Cold</h1>
            </div>
          ) : null}
          {winner ? (
            <div class="Winner">
              <h1>Winner</h1>
            </div>
          ) : null}

          <h3>Number of Attempt ={count}</h3>
          <h3>{massage}</h3>
          <h3> Enter a Number :</h3>
          <input type="number" placeholder="1 - 100" onChange={getData} />
          <div>
            <button
              class="button button5"
              onClick={() => {
                handleSubmit();
                randomNumber(1, 100);
              }}
            >
              Submit
            </button>
            <div>
              <button class="button button5" onClick={reStart}>
                Reset
              </button>
              {/* <button onClick={hintButton()}>Hint</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
