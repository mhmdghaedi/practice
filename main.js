const button = document.getElementById("myButton");
var element = document.getElementById("p-1");
  button.addEventListener("click", function() {
    if (button.textContent === "show less") {
      button.textContent = "Learn More";
      element.classList.remove("show");
      button.classList.remove("btn-danger");
    } else {
      button.textContent = "show less";
      element.classList.add("show");
    }
  });

const bold = document.getElementById("bold");
var pa = document.getElementById("p");
var LineBold = document.getElementById('line');
   bold.addEventListener("click", function() {
    if (pa.style.fontWeight == 'bolder')
        {
            LineBold.classList.add("hide");
            pa.style.fontWeight = '400';
            element.style.fontWeight = '400';
        }
    else{
        LineBold.classList.remove("hide");
        pa.style.fontWeight = 'bolder';
        element.style.fontWeight = 'bolder';
    }    
  
  
   });