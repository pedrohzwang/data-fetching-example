import { useState } from "react";
import { useQuery } from "react-query";
import { GridItemProps, GridProps, Todo } from "./types";

function App() {
  const [dark, setDark] = useState<boolean>(false);
  const [regNumber, setRegNumber] = useState<number>(0);

  // const getTodos = useCallback(async () => {
  //   console.log("exec");

  //   return await fetch("http://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((data) => data.slice(0, regNumber));
  // }, [regNumber]);

  const { data, isLoading } = useQuery("todos", () => {
    return fetch("http://jsonplaceholder.typicode.com/todos").then((response) =>
      response.json().then((data) => data.slice(0, regNumber))
    );
  });

  const theme = {
    backgroundColor: dark ? "black" : "#FFF",
    color: dark ? "#FFF" : "black",
  };

  return (
    <div style={theme}>
      <div style={{ height: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <button onClick={() => setDark(!dark)}>Set Theme</button>
          <input
            type="number"
            onChange={(e) => setRegNumber(Number.parseInt(e.target.value))}
          />
        </div>

        {isLoading ? <></> : <Grid regNumber={regNumber} todoList={data} />}
      </div>
    </div>
  );
}

const Grid = ({ todoList, regNumber }: GridProps) => {
  return (
    <div
      style={{
        margin: "auto",
        justifyContent: "center",
        alignContent: "center",
        maxWidth: "980px",
      }}
    >
      {todoList.map((todo: Todo) => (
        <GridItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
};

const GridItem = ({ todo }: GridItemProps) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        alignItems: "center",
        justifyContent: "start",
        height: "40px",
        display: "flex",
        margin: "8px",
        paddingLeft: "15px",
      }}
    >
      <span>{todo.title}</span>
    </div>
  );
};

export default App;
