// დავალება 1 მოცემული შემდეგი მასივი
// 1. გარდაქმენით იმგვარ სტრუქტრად რომ მივიღოთ დაჯგუფეგული
// ინფორმაცია category ს მიხედვით

const data = [
  {
    id: 1,
    category: "sport",
    title: "sport post 1",
    views: 200,
  },
  {
    id: 2,
    category: "sport",
    title: "sport post 1",
    views: 400,
  },
  {
    id: 3,
    category: "movies",
    title: "movie post 1",
    views: 500,
  },
  {
    id: 4,
    category: "movies",
    title: "movie post 1",
    views: 150,
  },
];

const result = {
  sport: data.filter((obj) => obj.category === "sport"),
  movies: data.filter((obj) => obj.category === "movies"),
};

console.log(result);
// //////////////////////////////////////////////////////////
const users = [
  {
    id: 1,
    name: "george",
    surname: "batsiashvili",
    is_admin: false,
    total_sales: 150,
  },
  {
    id: 2,
    name: "alex",
    surname: "abesadze",
    is_admin: false,
    total_sales: 190,
  },
  {
    id: 3,
    name: "nino",
    surname: "shubladze",
    is_admin: false,
    total_sales: 80,
  },
];
function sort_by_sales(users) {
  users.sort((a, b) => b.total_sales - a.total_sales);
}

sort_by_sales(users);
console.log(users);
// ///////////////////////////////////////////////////
function generateFullName(users) {
  return users.map((user) => {
    const { name, surname, ...rest } = user;
    return {
      ...rest,
      full_name: user.name + " " + user.surname,
    };
  });
}

const usersWithFullName = generateFullName(users);
console.log(usersWithFullName);

/////////////////////////////////////////////////////
function highestSales(users) {
  return users.filter((user) => user.total_sales > 80);
}

const highestSalesUsers = highestSales(users);
console.log(highestSalesUsers);

// ////////////////////////////
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const bodyElement = document.body;

    posts.forEach((post) => {
      const postDiv = document.createElement("div");
      const postIdDiv = document.createElement("div");
      const postTitleH1 = document.createElement("h1");
      const postBodyP = document.createElement("p");

      postIdDiv.textContent = `Post ID: ${post.id}`;
      postTitleH1.textContent = post.title;
      postBodyP.textContent = post.body;

      postDiv.appendChild(postIdDiv);
      postDiv.appendChild(postTitleH1);
      postDiv.appendChild(postBodyP);

      bodyElement.appendChild(postDiv);
    });
  });
