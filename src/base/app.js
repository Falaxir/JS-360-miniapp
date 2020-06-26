var backup_table_list = []

var Table_Lignes = new Vue({
    el: "#tablelines",
    data: {
        lines: 0
    }
})

function refresh_backuptable(data) {
    backup_table_list = data.slice()
}

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

var Table_Content = new Vue({
    el: "#table_content",
    data: {
        product: []
    },
    mounted() {
        var self = this
        $.getJSON("list.json", function(data) {
          self.product = data
          refresh_backuptable(data)
        })
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