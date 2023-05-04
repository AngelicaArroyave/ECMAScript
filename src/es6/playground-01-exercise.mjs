import { getData } from "./playground-01-api.mjs";

export function solution() {
    getData().then(response => console.log(response))
}

solution()