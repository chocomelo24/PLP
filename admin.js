let properties = JSON.parse(localStorage.getItem("properties"))
  ? JSON.parse(localStorage.getItem("properties"))
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
        location: "",
        image:"https://i.postimg.cc/hjp1BVcb/Home5.jpg"
       },
      {
        id: 6,
        name: "Beautiful House",
        price: "$32,000",
        bedroom: 4, 
        bathroom: 2,
        squarefeet: "5200 sqft",
        location: "",
        image:"https://i.postimg.cc/V6YWpKQk/Home6.jpg"
      },
      {
        id: 7,
        name: "Beautiful House",
        price: "$25,000",
        bedroom: 4, 
        bathroom: 2,
        squarefeet: "5200 sqft",
        location: "",
        image:"https://i.postimg.cc/26m0mzvm/Home7.jpg"
      },
      {
        id: 8,
        name: "Beautiful House",
        price: "$25,000",
        bedroom: 4 , 
        bathroom: 2 ,
        squarefeet: "5200 sqft",
        location: "",
        image:"https://i.postimg.cc/g0yKgf77/Home8.jpg"
      },
      {
        id: 9,
        name: "Beautiful House",
        price: "$25,000",
        bedroom: 4, 
        bathroom: 2,
        squarefeet: "5200 sqft",
        location: "",
        image:"https://i.postimg.cc/d0cBmq5d/Home9.jpg"
      },
      {
        id: 10,
        name: "Beautiful House",
        price: "$25,000",
        bedroom: 4, 
        bathroom: 2,
        squarefeet: "5200 sqft",
        location: "",
        image:"https://i.postimg.cc/bYV9V06q/Home10.jpg"
      },
    ];
let asc = true;
const propertiesContainer = document.querySelector("#tableItems");
function showproperties(properties) {
  propertiesContainer.innerHTML = "";
  console.log(properties);
  properties.forEach((property) => {
    propertiesContainer.innerHTML += `
      <tr>
        <th scope="row">${listing.id}</th>
        <td>${properties.id}</td>
        <td>${properties.name}</td>
        <td>${properties.price}</td>
        <td>${properties.bedroom}</td>
        <td>${properties.bathroom}</td>
        <td>${properties.squarefeet}</td>
        <td>${properties.location}</td>
        <td>${properties.image}</td>
        <td><i class="fa-solid fa-pen-to-square p-3"></i>
        <i onclick="deleteTask(${property.id})" class="fa-solid fa-trash-can p-3"></i></td>
      </tr>
       `;
  });
}
showproperties(properties);
//add function
function addproperty() {
  const newproperty = {
    name: document.querySelector("#name").value,
    price: document.querySelector("#price").value,
    bedroom: document.querySelector("#bedroom").value,
    bathroom: document.querySelector("#bathroom").value,
    squarefeet: document.querySelector("#squarefeet").value,
    location: document.querySelector("#location").value,
    image: document.querySelector("#image").value,
    id: properties.length + 1,
  };
  properties.push(newproperty);
  localStorage.setItem("properties", JSON.stringify(properties));
  showproperty(properties);
}
document.querySelector("#addNewItem").addEventListener("click", addproperty);
//delete function
function deleteTask(id) {
  properties = properties.filter((property) => property.id !== id);
  localStorage.setItem("properties", JSON.stringify(properties));
  showproperties(property);
}






