function title_get_product() {
    let params = new URLSearchParams(location.search)
    var name = params.get('name')
    var supplier = params.get('supplier')
    var quantity = params.get('quantity')
    var unit_cost = params.get('unit_cost')
    console.log(name)
    console.log(supplier)
    console.log(quantity)
    console.log(unit_cost)
}

/*
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
*/