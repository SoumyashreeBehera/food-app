function navBar() {
  return `<div id="whole_section">
    <div id="navbar">
      <img src="css/logo-white.png" class="logo" />
      <div id="section">
        <div id="inputBox">
          <input
            type="text"
            id="query"
            placeholder="Search Receipe By Name"
            style="flex: 1; padding: 0px 15px; outline: 0; font-size: 22px"
          />
          <i
            class="ion-close-round icon"
            id="iconcross"
            style="visibility: hidden"
          ></i>
          <i class="ion-ios7-search-strong icon"></i>
        </div>
        <div id="charDiv"></div>
      </div>
      <div class="options">
        <h3><a href="get.html">Receipe Of The Day</a></h3>
        <h3><a href="latest.html">Latest Receipe</a></h3>
      </div>
    </div>
  </div>`;
}

export default navBar;
