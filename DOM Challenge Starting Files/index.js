document.querySelector("h1").innerHTML = "<em>Hello World</em>";

document.firstElementChild.lastElementChild.querySelector("ul").lastElementChild.innerHTML = "I was here";

document.getElementsByTagName("li")[1].style.color = "green";

// when combining 2 selectors that are different elements, use space between
document.querySelector("li a").style.color = "purple";

// when combining 2 selectors that are different elements, no space, just .

document.querySelectorAll("li.list")[2].style.fontWeight = "bold";

document.getElementsByClassName("btn")[0].style.backgroundColor = "yellow";

//separation of concerns - keeping structure (HTML), style (CSS) and behavior (JS) separate
document.querySelector("h1").classList.add("huge");

document.querySelector("h1").innerHTML = "<em>Hello World</em>";

document.querySelector(".btn").textContent = "im a button";

document.querySelector("ul").innerHTML += "<li> im new here </li>";

document.querySelector("a").setAttribute("href", "https://www.bing.com");
