
/*  Trie les prix par ordre croissant/decroissant
    picked : 1 = croissant 2 = decroissant */
function pick_price_sort(picked) {
    if (picked == 1) {
    Table_Content.product.sort(function(a, b){
        var x = a.unit_cost
        var y = b.unit_cost
        if (x < y) {return -1}
        if (x > y) {return 1}
        return 0
      })
    }
    if (picked == 2) {
        Table_Content.product.sort(function(a, b){
            var x = a.unit_cost
            var y = b.unit_cost
            if (x < y) {return 1}
            if (x > y) {return -1}
            return 0
          })
        }
}

/* Charge et change la page du produit */
function pick_name(value) {
    var producturl = get_product_page(value)

    window.location = producturl
    localStorage.setItem("lastproduct", producturl);
}

/* Prends les caracteristiques du produits */
function get_product_page(value) {
    return "product.html" + "?name=" + value.name + "&supplier=" + value.supplier + "&quantity=" + value.quantity + "&unit_cost=" + value.unit_cost
}