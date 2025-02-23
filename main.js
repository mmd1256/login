function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 35.68933598033333, lng: 51.38891131538469 },
        zoom: 15,
    });

    const marker = new google.maps.Marker({
        position: { lat: 35.68933598033333, lng: 51.38891131538469 },
        map: map,
        title: "فروشگاه کیش",
    });

    const infowindow = new google.maps.InfoWindow({
        content: "<h2>فروشگاه کیش</h2><p>تهران، خیابان ولیعصر، نبش خیابان فاطمی</p>",
    });

    marker.addListener("click", () => {
        infowindow.open(map, marker);
    });
}