var test = [{
    "name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
  }, {
    "name": "chinel",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
  }, {
    "name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
  }, {
    "name": "Super Toxicinator",
    "supplier": "Schmitt-Weissnat",
    "quantity": 199,
    "unit_cost": "$209.53"
  }]

function contenttablefct(data) {
    contenttable = data
    console.log(contenttable)
    contenttablefct.content = data
    return contenttable
}

function get_file(file, type) {
    var xhr = new XMLHttpRequest()
    var contenttable = []

    xhr.open("GET", file, true)
    xhr.responseType = type
    xhr.onload = function() {
        switch (this.status) {
            case 200:
                //resultatdisp.innerHTML = JSON.stringify(this.response);
                var data = xhr.response
                contenttable = data
                contenttablefct(data)
                break
            case 404:
                alert("Erreur de Chargement de la page")
                break
            default:
                break
        }
    }
    xhr.send()
    return contenttable
}

//get_file("list.json", "json")

var connard = get_file("list.json", "json")
console.log(connard)

var Table_Lignes = new Vue({
    el: "#tablelines",
    data: {
        lines: 0
    }
})

var Table_Content = new Vue({
    el: "#table_content",
    mounted: function () {
        contenttable = get_file("list.json", "json")
    },
    colun: 4,
    data: {
        product: test
    }
})

var Table_Title = new Vue({
    el: "#table_title",
    data: {
        titles: [
        {
        name: "Name",
        supplier: "Supplier",
        quantity: "Quantity",
        unit_cost: "Unit Cost"
        }]
    }
})