var backup_table_list = Table_Content.product.slice();

function search_name(tofind) {
    for (let i = 0; i < Table_Content.product.length; i++) {
        if (backup_table_list[i].find(element => element > tofind) == undefined)
            Table_Content.product[i] = undefined
        else
            Table_Content.product[i] = backup_table_list[i]
    }
}

function sort_name(params) {
    for (let i = 0; i < data.length; i++) {
        data.find(tofind)
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
}