var locationDemoId = document.getElementById("locationDemo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(calculatePosition, showError);
  } else {
    locationDemoId.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  locationDemoId.innerHTML = "Latitude: " + (position.coords.latitude - 30.0408731) +
    "<br>Longitude: " + (position.coords.longitude - 31.2185979);
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      locationDemoId.innerHTML = "User denied the request for Geolocation."
      break;
    case error.POSITION_UNAVAILABLE:
      locationDemoId.innerHTML = "Location information is unavailable."
      break;
    case error.TIMEOUT:
      locationDemoId.innerHTML = "The request to get user location timed out."
      break;
    case error.UNKNOWN_ERROR:
      locationDemoId.innerHTML = "An unknown error occurred."
      break;
  }
}

function calculatePosition(position) {

  let myLatRadius = degreesToRadians(30.0408731);
  let officeLatRadius = degreesToRadians(position.coords.latitude);
  let myLongtRadius = degreesToRadians(31.2185979);
  let officeLongtRadius = degreesToRadians(position.coords.longitude);

  let dlon = officeLongtRadius - myLongtRadius;
  let dlat = officeLatRadius - myLatRadius;

  let a = Math.pow(Math.sin(dlat / 2), 2) +
    Math.cos(myLatRadius) * Math.cos(officeLatRadius) *
    Math.pow(Math.sin(dlon / 2), 2);

  let c = 2 * Math.asin(Math.sqrt(a));

  let r = 6371;
  let resultInKm = (r * c).toPrecision(1);
  locationDemoId.innerHTML = "i live " + resultInKm + " miles from your office";
}

function degreesToRadians(degrees) {
  var pi = Math.PI;
  return degrees * (pi / 180);
}