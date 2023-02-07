function startShowing(){
  var elementToHide = document.getElementById("show");
  elementToHide.style.opacity = 0;
  var intervalId = setInterval(function(){
    if(elementToHide.style.opacity >= 1)
    {
      clearInterval(intervalId);
    }else{
      elementToHide.style.opacity = parseFloat(elementToHide.style.opacity) + 0.1;
    }
  },250);
}

//startShowing();