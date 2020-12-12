var mymap = L.map('mapid').setView([51.505, -0.09], 2);
let latit
let longit
var buscarEu = document.querySelector('#buscarEu')
var buscarOutro = document.querySelector('#buscarOutro')


L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);


buscarOutro.addEventListener('click', function (event) {
    event.preventDefault()
    var nome2 = document.querySelector('#nome2').value;
    let lat = document.querySelector('#lat').value;
    let long = document.querySelector('#long').value;

    L.marker([lat, long]).addTo(mymap).bindPopup(nome2)
    mymap.setView([lat, long], 5);
})


buscarEu.addEventListener('click', function (event) {
    event.preventDefault()
    var nome1 = document.querySelector('#nome1').value;
    eu(nome1)
})


function eu(nome1) {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pinnar)
        return true
    } else {
        x.innerHTML = "Não é possível identificar a localização por esse navegador"
        return false
    }
}


function pinnar(posicao) {
    latit = posicao.coords.latitude
    longit = posicao.coords.longitude
    L.marker([latit, longit]).addTo(mymap).bindPopup(nome1.value)
    mymap.setView([latit, longit], 5);
}
