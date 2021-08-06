let singleFun = function () {
  let charDiv = document.getElementById("charDiv");
  let iconcross = document.getElementById("iconcross");
  let query1 = document.getElementById("query");
  let timerId;
  async function findChar() {
    let query = document.getElementById("query").value;
    if (query.length <= 1) {
      return false;
    }
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    let data = await res.json();
    console.log(data);
    let { meals } = data;
    return meals;
  }
  // www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata

  query1.oninput = async function find() {
    if (timerId) return false;
    timerId = setTimeout(function () {
      charDiv.style.visibility = "visible";
      iconcross.style.visibility = "visible";
      main();
      timerId = null;
    }, 500);
  };

  async function main() {
    let charcters = await findChar();
    appendElement(charcters);
    console.log(charcters);
  }

  function appendElement(d) {
    charDiv.innerHTML = null;
    d.forEach(({ strMeal }) => {
      let eachSpaceDiv = document.createElement("div");
      eachSpaceDiv.setAttribute("id", "eachSpace");
      eachSpaceDiv.style.display = "flex";
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerHTML = strMeal;
      h3.style.marginBottom = "10px";

      div.append(h3);

      eachSpaceDiv.append(div);
      charDiv.append(eachSpaceDiv);
    });
  }
  iconcross.onclick = function () {
    query1.value = "";
    charDiv.innerHTML = null;
    charDiv.style.visibility = "hidden";
    iconcross.style.visibility = "hidden";
  };
};

async function singleItem() {
  let res = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");
  let { meals } = await res.json();
  return meals;
}

function appendData(meals, parent) {
  meals.forEach(({ strMealThumb, strArea, strCategory, idMeal, strMeal }) => {
    let eachMealDiv = document.createElement("div");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("class", "imgDiv");
    let desDiv = document.createElement("div");
    desDiv.setAttribute("class", "desDiv");

    let figure = document.createElement("figure");
    figure.setAttribute("class", "imgDivFigure");
    let img = document.createElement("img");
    img.src = strMealThumb;
    figure.append(img);
    imgDiv.append(figure);

    let h3idMeal = document.createElement("h3");
    h3idMeal.innerHTML = idMeal;
    let h3Origin = document.createElement("h3");
    h3Origin.innerHTML = strArea;
    let h3Category = document.createElement("h3");
    h3Category.innerHTML = strCategory;

    let h3strMeal = document.createElement("h3");
    h3strMeal.innerHTML = strMeal;

    desDiv.append(h3idMeal, h3strMeal, h3Origin, h3Category);

    eachMealDiv.append(imgDiv, desDiv);
    parent.append(eachMealDiv);
  });
}

async function latestMeal() {
  let res = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  );
  let { meals } = await res.json();
  console.log(meals);
  return meals;
}

export { singleFun, singleItem, appendData, latestMeal };
