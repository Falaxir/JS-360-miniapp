var itemlist = [];
var itemlist_number = 0;

itemlist.push({
    id: itemlist_number++,
    name: "Jean",
    supplier: "Avrona",
    quantity: "1",
    unit_cost: "99"
});

itemlist.push({
    id: itemlist_number++,
    name: "Patrick",
    supplier: "Nvidia",
    quantity: "2",
    unit_cost: "26"
});

/*

Notes for JSON importation, don't know why it isn't working properly

*/

/*function filtres() {
    const filter = document.getElementById("Filtres");

    filter.addEventListener("submit", function(req) {
        req.preventDefault();
        const request = new XMLHttpRequest();

        const data = new FormData(filter)
        request.open("post", "getelement.php", true);
        //request.onload = function () {
        //    console.log("YES");
        //    console.log(request.responseText);
        //}
        request.send(data);
    })
}*/

/*document.getElementById("Filtres").addEventListener("submit", function(request) {
    request.preventDefault();
    var resultatdisp = document.getElementById("resultat");
    var formidable = document.getElementById("Filtres");
    var data = new FormData(formidable);
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            //resultatdisp.innerHTML = JSON.stringify(this.response);
            console.log(this.response);
        } else if (this.readyState == 4 && this.status == 404) {
            alert("Error");
        }
    }

    xhr.open("POST", "getelement.php", true);
    //xhr.responseType = "json";
    xhr.send(data);
});*/

/*document.getElementById("Filtres").addEventListener("submit", function(request) {
    request.preventDefault();
    var data = new FormData(this);
    var xhr = new XMLHttpRequest();
    var resultatdisp = document.getElementById("resultat");

    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            resultatdisp.innerHTML = JSON.stringify(this.response);
            console.log(this.response);
        } else if (this.readyState == 4 && this.status == 404) {
            alert("Error");
        }
    }

    xhr.open("GET", "list.json", true);
    xhr.responseType = "json";
    xhr.send(data);
});*/