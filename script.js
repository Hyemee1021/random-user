const apiEp = "https://randomuser.me/api/?results=20";

let userList = [];

const listElm = document.getElementById("list");

const fetchUser = async (url) => {
  try {
    const dt = await fetch(url);

    const data = await dt.json();

    userList = data.results;

    display(userList);
  } catch (error) {
    console.log(error);
  }
};

fetchUser(apiEp);

const display = (users) => {
  let str = ``;
  userList.map((item, i) => {
    console.log(item);
    str += `<div class="card flex-grow-1" style="width: 18rem">
    <img src="${item?.picture?.large}" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">${item?.name?.title} ${item?.name?.first} ${item?.name?.last}</h5>
      <div class="card-text">
        <ul class="list-unstyled">
          <li>
          <i class="fa-solid fa-phone"></i>
          ${item?.phone}
          </li>
          
          <li>
          <i class="fa-solid fa-envelope"></i>
          ${item?.email}
          </li>
          <li>
          <i class="fa-solid fa-address-book"></i>
          ${item?.location?.postcode}
          ${item?.location?.street}
          ${item?.location?.postcode}
          ${item?.location?.country}</li>
          
        </ul>
      </div>
    </div>
  </div>`;

    listElm.innerHTML = str;
  });
};
