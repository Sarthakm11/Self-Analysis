document.querySelectorAll("#tabbtn")[0].addEventListener("click", function() {
  colortab1();
  displaytab1();
});

document.querySelectorAll("#tabbtn")[1].addEventListener("click", function() {
  colortab2();
  displaytab2();
});

// transition effect !
// document.querySelector(".tab1").style.transition = "all 2s";
// document.querySelector(".tab2").style.transition = "all 2s";

function colortab1() {
  document.querySelectorAll("#tabbtn")[0].style.backgroundColor = "black";
  document.querySelectorAll("#tabbtn")[1].style.backgroundColor = "orange";
}

function colortab2() {
  document.querySelectorAll("#tabbtn")[1].style.backgroundColor = "black";
  document.querySelectorAll("#tabbtn")[0].style.backgroundColor = "orange";
}

function displaytab1() {
  document.querySelector(".tab2").classList.add("hider");
  document.querySelector(".tab1").classList.remove("hider");

}

function displaytab2() {
  document.querySelector(".tab1").classList.add("hider");
  document.querySelector(".tab2").classList.remove("hider");

}
