const names = ["Iron Man", "Captain America", "Thor", "Black Widow", "Hulk", "Hawkeye", "Scarlet Witch", "Dr. Strange", "Captain Marvel", "Ant-Man"];
const occupations = ["Genius Inventor", "Strategic Leadership", "God of Thunder", "Master Spy", "Incredible Strength", "Master Archer", "Reality Manipulation", "Master of Mystic Arts", "Cosmic Power", "Size Manipulation"];

let freelancers = [
  { name: "Iron Man", occupation: "Genius Inventor", price: 100 },
  { name: "Captain America", occupation: "Strategic Leadership", price: 80 },
];

const freelancersDiv = document.querySelector("#freelancers");
const averagePriceDisplay = document.querySelector("#average-price");

function renderFreelancers() {
  freelancersDiv.innerHTML = "";
  freelancers.forEach((freelancer) => {
    const freelancerDiv = document.createElement("div");
    freelancerDiv.classList.add("freelancer");
    freelancerDiv.innerHTML = `
      <h3>${freelancer.name}</h3>
      <p>Occupation: ${freelancer.occupation}</p>
      <p>Starting Price: $${freelancer.price}</p>`;
    freelancersDiv.appendChild(freelancerDiv);
  });
  updateAveragePrice();
}

function updateAveragePrice() {
  const averagePrice = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0) / freelancers.length;
  averagePriceDisplay.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
}

function generateFreelancer() {
  const randomName = names[Math.floor(Math.random() * names.length)];
  const randomOccupation = occupations[Math.floor(Math.random() * occupations.length)];
  const randomPrice = Math.floor(Math.random() * 100) + 50;
  freelancers.push({ name: randomName, occupation: randomOccupation, price: randomPrice });
  renderFreelancers();
}

renderFreelancers(); 

setInterval(generateFreelancer, 3000); 