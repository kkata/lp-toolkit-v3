import template from "../../template/usersList.html?raw";
import dataUsersList from "../../data/usersList.json";

export const usersList = () => {
  const div = document.createElement("div");

  dataUsersList.forEach((entry) => {
    const element = document.createElement("div");
    element.innerHTML = template;

    element.querySelector(".name")!.innerHTML = entry.name;
    element!.querySelector(".phone")!.innerHTML = entry.phone;

    div.appendChild(element);
  });

  document.body.appendChild(div);
};
