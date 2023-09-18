const apiEp = "https://randomuser.me/api/?results=20";

let userList = [];

const fetchUser = (url) => {
  //promise using fetch to fetch dat from any server,

  fetch(url)
    .then((dt) => {
      return dt.json();
    })
    .then((data) => {
      userList = data.results;
      display(userList);
    });
};

fetchUser(apiEp);

const display = (users) => {
  console.log(users);
};
