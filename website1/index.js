"use strict";

const statesAndTerritories = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", 
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", 
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", 
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", 
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", 
    "New Hampshire", "New Jersey", "New Mexico", "New York", 
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", 
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", 
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", 
    "West Virginia", "Wisconsin", "Wyoming",
    "American Samoa", "Guam", "Northern Mariana Islands", "Puerto Rico", 
    "U.S. Virgin Islands"
  ];
  const statesList = document.getElementById("statesList");
  const outputH1 = document.getElementById("outputHi");
  const doSomethingButton = document.getElementById("doSomethingButton");

  window.onload = function(){
    populateStatesList();
    doSomethingButton.onclick = OnDoSomethingButtonClick;
  };
  function OnDoSomethingButtonClick(){
    console.log("click");
  }

  function populateStatesList(){

    console.log("populate");

    for(let i = 0; i < statesAndTerritories.length; i++){
      let newOption = document.createElement("option");
      newOption.textContent = statesAndTerritories[i];
      newOption.value = statesAndTerritories[i];
      statesList.appendChild(newOption)
    };
  }
  
  
  
  