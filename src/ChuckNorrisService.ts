import { ChuckNorris } from "./types";

export const fetchChuckNorris = async (): Promise<ChuckNorris> => {
  return await fetch("https://api.chucknorris.io/jokes/random").then(
    (response) => response.json().then((data) => data)
  );
};
