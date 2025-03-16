
maptilersdk.config.apiKey = mapToken;

const map = new maptilersdk.Map({
  container: 'map', // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,  // stylesheet location
  zoom: 8,
  center:listing.geometry.coordinates,
});

const marker = new maptilersdk.Marker({
  color: "red",
  draggable: true
})
.setLngLat(listing.geometry.coordinates)
.setPopup(new maptilersdk.Popup().setHTML(
  `<h4>${listing.title}</h4>
  <p>Exact Location will be provided after booking</p>`
))
.addTo(map);


