document.addEventListener('click', function(event) {
  const clickedElement = event.target;
  console.log("Clicked element:", clickedElement);
  if(clickedElement.classList.contains("card-cell")){
      if(clickedElement.classList.contains("strike")){
          clickedElement.classList.remove("strike");
      }
      else{
          clickedElement.classList.add("strike");
      }
  }
    
});