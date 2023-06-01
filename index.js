
for (var i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click",function () {
    var expression = this.innerHTML;
    switch (expression) {
      case "DECREASE":
        document.querySelector(".number").innerHTML--;
        if (document.querySelector(".number").innerHTML > 0) {
          document.querySelector(".number").style.color = "green";
        } else if (document.querySelector(".number").innerHTML == 0) {
           document.querySelector(".number").style.color = "black";
        } else {
          document.querySelector(".number").style.color = "red";
        }
        break;
      case "RESET":
        document.querySelector(".number").innerHTML = "0";
        document.querySelector(".number").style.color = "black";
        break;
      case "INCREASE":
         document.querySelector(".number").innerHTML++;
        if (document.querySelector(".number").innerHTML > 0) {
          document.querySelector(".number").style.color = "green";
        } else if (document.querySelector(".number").innerHTML == 0) {
          document.querySelector(".number").style.color = "black";
        } else {
          document.querySelector(".number").style.color = "red";
        }
        break;
      default:

    }
  });
}
