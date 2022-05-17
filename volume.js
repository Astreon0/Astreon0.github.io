function volume(val) {
    document.getElementById("respawn10").volume = val / 100;




    let valume_value = document.getElementById("volume_value");
    valume_value.innerHTML = val;
}