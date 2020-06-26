/*
idee : pour vuejs JSON faire comme backup table list, slice le tableau et le remplacer
*/

var backup_table_list = Table_Content.product.slice();

function search_name(tofindht) {
    var tablenum = 0

    for (let i = 0; i < backup_table_list.length; i++) {
        Table_Content.product.pop()
    }
    for (let i = 0; i < backup_table_list.length; i++) {
        if (backup_table_list[i].name.includes(tofindht) == true) {
            Table_Content.product[tablenum] = backup_table_list[i]
            tablenum++
        }
    }
}

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

function pick_price_sort(picked) {
    // 1 = croissant 2 = decroissant
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

/*
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
*/