function updateItemStatus() {
    var cbId = this.id.replace("cb_", "");
    var itemText = document.getElementById("item_" + cbId);
    
    if (this.checked){
        itemText.className = "checked";
    }
    
    else {
        itemText.className = "";
    }
}

function addNewItem(list, itemText) {

    var date = new Date();
    var id = "" + date.getHours() + date.getMinutes();
    
    var listItem = document.createElement("li");
    
    var checkBox = document.createElement("output");
    checkBox.type = "checkbox";
    checkBox.id = "cb_" + id;
    checkBox.onclick = updateItemStatus;
    
    var span = document.createElement("span");
    span.id = "item_" + id;
    span.innerText = itemText;
    
    listItem.appendChild(checkBox);
    listItem.appendChild(span);
    
    list.appendChild(listItem);
}

var inItemText = document.getElementById("inItemText");
inItemText.focus();
inItemText.onkeyup = function(event) {
    
    if (event.which == 13) {
        var itemText = inItemText.value;
    }
        if (!itemText || itemText == "" || itemText == " ") {
            return false
        }
    
    addNewItem(document.getElementById("todolist"), itemText);
    
    inItemText.focus();
    inItemText.select();
};