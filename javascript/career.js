function flip(clickedElement) {
    console.log("Clicked Element:", clickedElement);
  
    const flipBoxInner = clickedElement.querySelector(".flip-box-inner");
  
    console.log("flipBoxInner:", flipBoxInner);
  
    if (flipBoxInner.style.transform === "rotateY(180deg)") {
      flipBoxInner.style.transform = "rotateY(0deg)";
    } else {
      flipBoxInner.style.transform = "rotateY(180deg)";
    }
  }
  

  function apply(){

  }

  

  function clear() {
    // Reset radio buttons
    // const radioButtons = document.getElementsByName("Positions");
    // radioButtons.forEach((radio) => {
    //     radio.checked = false; 
    // });
  
    // Reset checkboxes
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  }
  