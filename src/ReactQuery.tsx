import { useQuery } from "react-query";
import { fetchChuckNorris } from "./ChuckNorrisService";
import { NewGridProps } from "./types";

export default function ReactQuery() {
  const {
    data: joke,
    isLoading,
    isError,
  } = useQuery(
    "todos",
    () => {
      return fetchChuckNorris();
    },
    {
      staleTime: 1000 * 8,
      refetchOnWindowFocus: false
    }
  );

  return (
    <div>
      <div style={{ height: "100vh" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        ></div>
        {isLoading ? <span>Carregando...</span> : <Grid joke={joke!} />}
      </div>
    </div>
  );
}

const Grid = ({ joke }: NewGridProps) => {
  return (
    <div
      style={{
        margin: "auto",
        justifyContent: "center",
        alignContent: "center",
        maxWidth: "980px",
      }}
    >
      <h2>{joke.value}</h2>
      <span>Disponível em: {joke.url}</span>
    </div>
  );
};
