let table = document.getElementById("tableBody");

class user {
  constructor(name, lastName, birthday) {
    this.name = name;
    this.lastName = lastName;
    this.birthday = birthday;
  }
}

const submitUser = () => {
  let newUser = new user(document.querySelector("#name").value, document.querySelector("#lastName").value, document.querySelector("#birthday").value);
  let row = document.createElement("tr");
  row.innerHTML = `<th scope="row"><i class="bi bi-caret-right"></i></th><td>${newUser.name}</td><td>${newUser.lastName}</td><td>${newUser.birthday}</td>`;
  table.appendChild(row);
  document.querySelector("#name").value = "";
  document.querySelector("#lastName").value = "";
  document.querySelector("#birthday").value = "";
};

document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
});
