/*
   Filename: ComplexCode.js
   Purpose: Demonstrating a complex and elaborate JavaScript code
   Content: A comprehensive web application with multiple functionalities
*/

// Global variables
let data = [];
let counter = 0;

// Function to fetch data from a remote API
async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const jsonData = await response.json();
    data = jsonData;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function to filter data based on a given parameter
function filterData(parameter) {
  const filteredData = data.filter(item => item.param === parameter);
  return filteredData;
}

// Function to display data on the webpage
function displayData() {
  const container = document.getElementById('data-container');
  container.innerHTML = ''; // Clear previous data

  data.forEach(item => {
    const newItem = document.createElement('div');
    newItem.innerText = item.name;
    container.appendChild(newItem);
  });
}

// Function to handle form submission
function handleSubmit(event) {
  event.preventDefault();

  const name = document.getElementById('name-input').value;
  const age = document.getElementById('age-input').value;

  // Perform validation and data manipulation

  data.push({ name, age, id: counter });

  // Reset form inputs

  counter++;
}

// Event listener for form submission
document.getElementById('form').addEventListener('submit', handleSubmit);

// Function to initialize the web application
async function init() {
  await fetchData();
  displayData();
}

// Call the init function on page load
window.onload = init;