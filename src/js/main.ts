import { setupCounter } from "./components/counter";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    TOP PAGE
    <button id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

export {};
