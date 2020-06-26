/* Affiche la liste des produits et change le titre de la page */
function title_get_product() {
    let params = new URLSearchParams(location.search)
    var name = params.get('name')
    var supplier = params.get('supplier')
    var quantity = params.get('quantity')
    var unit_cost = params.get('unit_cost')

    document.getElementById("Title_Name").innerHTML = "Medicament : " + name
    document.getElementById("Name").innerHTML = name
    document.getElementById("Supplier").innerHTML = supplier
    document.getElementById("Quantity").innerHTML = quantity
    document.getElementById("UnitCost").innerHTML = unit_cost
}