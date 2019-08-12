var url = `https://lit-mountain-90611.herokuapp.com/api/status`;

async function _getDBContents() {
  let items = await fetch(url);
  let streamedContent = await items.json();
  // console.log('Items', streamedContent);
  return streamedContent;
}

_getDBContents().then(res => {
  // console.log('Items', res);
  let items = res.Items;
  let selector = document.querySelector("#write");
  console.log("Items", items);
  console.log("selector", selector);

  items.forEach(item => {
    let div = document.createElement("div");
    div.innerHTML = `<div class="col s12 col m4 box">
    <div class="row">
      <div class="col s6">
        <b>Reservoir :</b>
      </div>
      <div class="col s6">
        <i>${item.ReservoirName}</i>
      </div>
    </div>

    <div class="row">
      <div class="col s6">
        <b>Capacity (liters):</b>
      </div>
      <div class="col s6">
        <i>${item.Capacity}</i>
      </div>
    </div>

    <div class="row">
      <div class="col s6">
        <b>Location :</b>
      </div>
      <div class="col s6">
        <i>${item.Location}</i>
      </div>
    </div>

    <div class="row">
      <div class="col s6">
        <b>Current Status (%):</b>
      </div>
      <div class="col s6">
        <i>${item.StatusValue}</i>
      </div>
    </div>
  </div>`;
    selector.appendChild(div);
  });
});

$(document).ready(function() {
  $(".collapsible").collapsible();
});

//function that gets the location and returns it
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var location = {
        longitude: position.coords.longitude,
        latitude: position.coords.latitude
      };
      console.log(location);

      let locSelector = document.querySelector(".location");
      let loc = document.createElement("div");
      loc.innerHTML = location.longitude;
      locSelector.appendChild(loc);
    });
  } else {
    console.log("Geo Location not supported by browser");
  }
}

//request for location

getLocation();
