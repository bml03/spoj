const root = document.getElementById("root");
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

const todoTitle = document.createElement("h2");
todoTitle.setAttribute("class", "todoTitle");
todoTitle.innerText = "To Do list";
container.appendChild(todoTitle);
const todoAdd = document.createElement("div");
todoAdd.setAttribute("class", "todoAdd");

const inputBox = document.createElement("input");
inputBox.setAttribute("id", "inputData");
inputBox.setAttribute("type", "text");
inputBox.setAttribute("placeholder", "Add your text");
const addBtn = document.createElement("button");
addBtn.innerText = "Add";
addBtn.setAttribute("class", "addBtn");
todoAdd.appendChild(inputBox);
todoAdd.appendChild(addBtn);
container.appendChild(todoAdd);

const todoList = document.createElement("ul");
todoList.setAttribute("class", "todoList");
container.appendChild(todoList);

addBtn.addEventListener("click", () => {
  inputBox.value == "" ? alert("hooson bn") : addlist();
});

let todoArr = [];
function addlist() {
  todoList.innerHTML = "";
  todoArr[todoArr.length] = inputBox.value;
  console.log("hi", todoArr);
  for (let i = 0; i < todoArr.length; i++) {
    const checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.setAttribute("class", "checkboxInput");
    checkInput.setAttribute("id", `checkInput`);
    const li = document.createElement("li");
    const txt = document.createElement("input");
    txt.value = todoArr[i];
    txt.disabled = true;
    txt.setAttribute("id", `${i + 1}`);
    const edit = document.createElement("label");
    edit.innerText = "Edit";
    edit.setAttribute("for", "check");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "checkboxs");
    check.setAttribute("id", `check`);
    checkInput.addEventListener("click", (e) => {
      console.log(e.target.checked);
      if (e.target.checked) {
        txt.style.textDecoration = "line-through";
      } else {
        txt.style.textDecoration = "none";
      }
    });

    edit.addEventListener("click", (e) => {
      let check = document.getElementById("check");
      if (!check.checked) {
        if (!checkInput.checked) {
          txt.disabled = false;
          e.target.innerText = "Done";
          checkInput.style.display = "none";
        } else {
          checkInput.style.display = "block";
          alert("Songogdson text baina");
        }
      } else {
        checkInput.style.display = "block";
        txt.disabled = true;
        e.target.innerText = "Edit";
      }
    });
    const remove = document.createElement("button");
    remove.innerText = "\u00d7";
    remove.addEventListener("click", (e) => {
      console.log(todoArr, todoArr.length);
      todoArr.splice(i, 1);
      console.log(todoArr, todoArr.length);
      update();
    });
    inputBox.value = "";
    console.log("check", checkInput);

    li.appendChild(checkInput);
    li.appendChild(txt);
    li.appendChild(edit);
    li.appendChild(check);
    li.appendChild(remove);
    todoList.appendChild(li);
  }
}

function update() {
  todoList.innerHTML = "";

  for (let i = 0; i < todoArr.length; i++) {
    const checkInput = document.createElement("input");
    checkInput.setAttribute("type", "checkbox");
    checkInput.setAttribute("class", "checkboxInput");
    checkInput.setAttribute("id", `checkInput`);
    const li = document.createElement("li");
    const txt = document.createElement("input");
    txt.value = todoArr[i];
    txt.disabled = true;
    txt.setAttribute("id", `${i + 1}`);
    const edit = document.createElement("label");
    edit.innerText = "Edit";
    edit.setAttribute("for", "check");
    const check = document.createElement("input");
    check.setAttribute("type", "checkbox");
    check.setAttribute("class", "checkboxs");
    check.setAttribute("id", `check`);
    // edit.addEventListener("keyup", () => {
    //   console.log(a.checked);
    //   console.log(a.checked);
    // });
    edit.addEventListener("click", (e) => {
      let check = document.getElementById("check");
      //   let a = document.getElementById("1");
      //   let a = document.getElementById("1");
      if (!check.checked) {
        txt.disabled = false;
        e.target.innerText = "Done";
        // console.log(a.value);
      } else {
        txt.disabled = true;
        e.target.innerText = "Edit";
      }
      // console.log(a);
    });
    const remove = document.createElement("button");
    remove.innerText = "\u00d7";
    remove.addEventListener("click", (e) => {
      console.log(todoArr, todoArr.length);
      todoArr.splice(i, 1);
      console.log(todoArr, todoArr.length);
      update();
    });
    inputBox.value = "";
    console.log("check", checkInput);
    li.appendChild(checkInput);
    li.appendChild(txt);
    li.appendChild(edit);
    li.appendChild(check);
    li.appendChild(remove);
    todoList.appendChild(li);
  }
}
