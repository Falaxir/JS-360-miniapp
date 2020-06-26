function has_already_been_sorted(picked) {
    if (picked == 2) {
        for (let i = 0; i < Table_Content.product.length-1; i++) {
            if (Table_Content.product[i].unit_cost < Table_Content.product[i+1].unit_cost)
                return 0
        }
    }
    if (picked == 1) {
        for (let i = 0; i < Table_Content.product.length-1; i++) {
            if (Table_Content.product[i].unit_cost > Table_Content.product[i+1].unit_cost)
                return 0
        }
    }
    return 84
}

/* 1 = croissant 2 = decroissant */
function pick_price_sort(picked) {
    console.log(picked)
    if ((picked != 1 && picked != 2) || has_already_been_sorted(picked) == 84)
        return (84)

    Table_Content.product.sort(function(a, b){return a-b})
    Table_Content.product.reverse()
}

function pick_name(value) {
    console.log(value)
    console.log(Table_Content.product)
    window.location = "product.html" + "?name=" + value.name + "&supplier=" + value.supplier + "&quantity=" + value.quantity + "&unit_cost=" + value.unit_cost
}