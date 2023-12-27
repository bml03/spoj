const box = [{ progress: "To do" }];
const root = document.getElementById("root");
const bigBox = document.createElement("div");
const progress = document.createElement("div");
const addBtn = document.createElement("button");

addBtn.innerText = "+ Add card";

progress.setAttribute("class", "card");
root.appendChild(progress);
root.appendChild(addBtn);
addBtn.addEventListener("click", () => {});
progress = addBtn + minusBtn;
