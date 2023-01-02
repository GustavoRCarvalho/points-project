import { useState } from "react";
import "./App.css";
import { Button } from "./components/Button/Button";
import { Circle } from "./components/Circle/Circle";

function App() {
  const [circles, setCircles] = useState([])
  const [circlesTrash, setCirclesTrash] = useState([])

  function onClickApp(props) {
    const newCircle = {
        X: props.clientX,
        Y: props.clientY,
        key: `X:${props.clientX}, Y:${props.clientY}`
      }
    const isUniqueKey = circles.findIndex(({key}) => newCircle.key === key) === -1

    if(props.target.id === 'App' && isUniqueKey) {
      setCircles((list) => [...list, newCircle])
      setCirclesTrash([])
    }
  }

  return (
    <main onClick={onClickApp} id="App">
      <Button title="Undo" listToPop={circles} setListToPop={setCircles} setListToAdd={setCirclesTrash}/>
      <Button title="Redo" listToPop={circlesTrash} setListToPop={setCirclesTrash} setListToAdd={setCircles}/>
      <Circle circles={circles}/>
    </main>
  );
}

export default App;
