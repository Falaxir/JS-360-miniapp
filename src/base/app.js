/* Fais une sauvegarde du tableau pour la recherche*/
var backup_table_list = []

/* Rafraichis le backup du tableau */
function refresh_backuptable(data) {
    backup_table_list = data.slice()
}

/* Recherche le nom tape dans la barre de rechercher */
function search_name(tofindht) {
    var tablenum = 0

    document.getElementById("Selector").selectedIndex = "0";
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

/* Affiche et modifie le bouton du dernier element consulte */
function last_product_page_redirect(isclick) {
    if (isclick == 0) {
        var lastdata = localStorage.getItem("lastproduct");
        var result = lastdata.slice(18, lastdata.indexOf("&"))
        document.getElementById("LastProduct").innerHTML = "Last Product : " + result
        return
    }
    window.location = localStorage.getItem("lastproduct");
}

/* Prends et convertis un JSON en data et rafraichis le backup du tableau et le bouton du dernier element consulte*/
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
        last_product_page_redirect(0)
    }
})

/* Titres du tableau */
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