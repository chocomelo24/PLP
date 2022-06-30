const properties = JSON.parse(localStorage.getItem("item"))
  ? JSON.parse(localStorage.getItem("item"))
  : [ 
    {
    id: 1,
    name: "Beautiful House",
    price: "$15,900",
    bedroom: 6, 
    bathroom: 3,
    squarefeet: "4500 sqft",
    location: "12207 S Eggleston Ave, Chicago, IL 60628",
    image:"https://i.postimg.cc/SNt18b07/Home1.jpg",
  },
    {
    id: 2,
    name: "Beautiful House",
    price: "$14,500",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "4200 sqft",
    location: "9958 Westwanda Dr",
    image:"https://i.postimg.cc/503n2Zqz/Home2.jpg"
  },
    {
    id: 3,
    name: "Beautiful House",
    price: "$31,000",
    bedroom: 2, 
    bathroom: 2,
    squarefeet: "3000 sqft",
    location: "4940 SW 89th Pl, Miami, FL 33165",
    image:"https://i.postimg.cc/vZf7mJGm/Home3.jpg"
  },
    {
    id: 4,
    name: "Beautiful House",
    price: "$45,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    location: "7039 Plato Road, East Otto, Cattaraugus County, NY, 14729",
    image:"https://i.postimg.cc/3NNCJWwM/Home4.jpg"
  },
  {
    id: 5,
    name: "Beautiful House",
    price: "$10,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    location: "7039 Plato Road, East Otto, Cattaraugus County, NY, 14729",
    image:"https://i.postimg.cc/hjp1BVcb/Home5.jpg"
   },
  {
    id: 6,
    name: "Beautiful House",
    price: "$32,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    location: "7039 Plato Road, East Otto, Cattaraugus County, NY, 14729",
    image:"https://i.postimg.cc/V6YWpKQk/Home6.jpg"
  },
  {
    id: 7,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    location: "7039 Plato Road, East Otto, Cattaraugus County, NY, 14729",
    image:"https://i.postimg.cc/26m0mzvm/Home7.jpg"
  },
  {
    id: 8,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4 , 
    bathroom: 2 ,
    squarefeet: "5200 sqft",
    location: "7039 Plato Road, East Otto, Cattaraugus County, NY, 14729",
    image:"https://i.postimg.cc/g0yKgf77/Home8.jpg"
  },
  {
    id: 9,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    location: "7039 Plato Road, East Otto, Cattaraugus County, NY, 14729",
    image:"https://i.postimg.cc/d0cBmq5d/Home9.jpg"
  },
  {
    id: 10,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    location: "7039 Plato Road, East Otto, Cattaraugus County, NY, 14729",
    image:"https://i.postimg.cc/bYV9V06q/Home10.jpg"
  },
];

// Making the local storage a function
function addToStorage(properties) {
    localStorage.setItem("item", JSON.stringify(properties));
  }

  function showItems(properties) {
    document.querySelector("#property-container").innerHTML = "";
    properties.forEach((property) => {
        console.log(property);
        document.querySelector("#property-container").innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${property.image}" class="card-img-top" alt="house">
            <div class="card-body">
              <h5 class="card-title">
              ${property.name}</h5>
              <p class="card-text">${property.price}, ${property.bedroom}, ${property.bathroom}, ${property.squarefeet}, ${property.location}
                </p>
            </div>
        `;
      });
  }

  showItems(properties);    