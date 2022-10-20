import { setupCounter } from "./components/counter";
import { usersList } from "./components/usersList";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    TOP PAGE
    <button id="counter" type="button"></button>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

usersList();
