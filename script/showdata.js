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
    let res = await fetch(`https://swapi.dev/api/people/?search=${query}`);
    let data = await res.json();
    let { results } = data;
    return results;
  }

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
    d.forEach(({ birth_year, gender, name }) => {
      let eachSpaceDiv = document.createElement("div");
      eachSpaceDiv.setAttribute("id", "eachSpace");
      eachSpaceDiv.style.display = "flex";
      let div = document.createElement("div");
      let h3 = document.createElement("h3");
      h3.innerHTML = name;
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

export { singleFun };
