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
    image:"./alejandra-cifre-gonzalez-ylyn5r4vxcA-unsplash.jpg",
  },
    {
    id: 2,
    name: "Beautiful House",
    price: "$14,500",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "4200 sqft",
    image:"./r-architecture-2gDwlIim3Uw-unsplash.jpg"
  },
    {
    id: 3,
    name: "Beautiful House",
    price: "$31,000",
    bedroom: 2, 
    bathroom: 2,
    squarefeet: "3000 sqft",
    image:"./stephen-leonardi-XKIO6ZgCObo-unsplash.jpg"
  },
    {
    id: 4,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    image:"./zac-gudakov-FH3zlDsY4Z4-unsplash.jpg"
  },
  {
    id: 5,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    image:"./zac-gudakov-FH3zlDsY4Z4-unsplash.jpg"
  },
  {
    id: 6,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    image:"./zac-gudakov-FH3zlDsY4Z4-unsplash.jpg"
  },
  {
    id: 7,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    image:"./zac-gudakov-FH3zlDsY4Z4-unsplash.jpg"
  },
  {
    id: 8,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4 , 
    bathroom: 2 ,
    squarefeet: "5200 sqft",
    image:"./zac-gudakov-FH3zlDsY4Z4-unsplash.jpg"
  },
  {
    id: 9,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    image:"./zac-gudakov-FH3zlDsY4Z4-unsplash.jpg"
  },
  {
    id: 10,
    name: "Beautiful House",
    price: "$25,000",
    bedroom: 4, 
    bathroom: 2,
    squarefeet: "5200 sqft",
    image:"./zac-gudakov-FH3zlDsY4Z4-unsplash.jpg"
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
              <p class="card-text">${property.price}, ${property.bedroom}, ${property.bathroom},${property.squarefeet}
                </p>
            </div>
        `;
      });
  }

  showItems(properties);    