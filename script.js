/*function switchLanguage() {
    // Get the paragraph element
    const englishText = document.getElementById("englishText");
    
    // Replace the English text with the Spanish equivalent
    englishText1.innerHTML = "मुख्यपृष्ठ";
    englishText2.innerHTML = "राष्ट्रीय बुलेटिन";
    englishText3.innerHTML = "सेवा";
    englishText4.innerHTML = "वैशिष्ट्ये";
    englishText3.innerHTML = "सेवा";  
  }


  function toggleLanguage() {
    var btn = document.getElementById("lang-btn");
    if (btn.innerHTML == "English") {
      btn.innerHTML = "मराठी";
      // replace English content with Spanish content here
      btn.classList.add("highlighted");
    } else {
      btn.innerHTML = "English";
      // replace Spanish content with English content here
      btn.classList.remove("highlighted");
    }
  }


  function setLanguage(lang) {
    // remove active class from all buttons
    var buttons = document.querySelectorAll(".dropdown-content a");
    buttons.forEach(function(button) {
      button.classList.remove("active");
    });
    
    // add active class to selected button
    var selectedButton = document.getElementById(lang);
    selectedButton.classList.add("active");
  
    // do other language related tasks, like changing text
  }
*/

// Define the text for each language
/*
const languageText = {
  en: {
    greeting: 'Hello, world!',
    description: 'This is an example of how to implement a language switcher using HTML, CSS, and JavaScript.',
    englishBtn: 'English',
    marathiBtn: 'Marathi'
  },
  mr: {
    greeting: '¡Hola, mundo!',
    description: 'Este es un ejemplo de cómo implementar un selector de idioma utilizando HTML, CSS y JavaScript.',
    englishBtn: 'इंग्रजी',
    marathiBtn: 'मराठी'
    
  }
}

// Get the DOM elements
const greetingEl = document.getElementById('greeting');
const descriptionEl = document.getElementById('description');
const englishBtn = document.getElementById('english-btn');
const marathiBtn = document.getElementById('marathi-btn');

// Define the function to change the language
function changeLanguage(languageCode) {
  // Change the text of the elements
  greetingEl.textContent = languageText[languageCode].greeting;
  descriptionEl.textContent = languageText[languageCode].description;
  englishBtn.textContent = languageText[languageCode].englishBtn;
  marathiBtn.textContent = languageText[languageCode].marathiBtn;

  // Set the active button
  englishBtn.classList.toggle('active', languageCode === 'en');
  marathiBtn.classList.toggle('active', languageCode === 'mr');
}

// Set the default language
changeLanguage('en');


function validateName() {
  const nameField = document.getElementById("name");
  const name = nameField.value;
  const numericRegex = /[0-9]/g;
  if (numericRegex.test(name)) {
    alert("Please enter a Commodity name without numeric values.");
    nameField.value = "";
    nameField.focus();
    return false;
  }
  return true;
}

function validateForm() {
  var filename = document.getElementById("filename").value;
  var regex = /^[a-zA-Z0-9]+\.txt$/; // specify the desired filename format using regex
  
  if (!regex.test(filename)) {
    alert("Please enter a valid filename in the format 'Banana.html'");
    return false;
  }
  // else, redirect to the correct page
  return true;
}*/
