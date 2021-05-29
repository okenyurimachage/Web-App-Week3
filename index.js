/* Checks to see if document is loading and once the loading

is done, the function ready() runs.

*/

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

/*

use of for loop and arrays to add or remove items from shopping list
 

*/
function ready() {

    var addToButtons = document.getElementsByClassName('add-button')
    for (var i = 0; i < addToButtons.length; i++) {
        var button = addToButtons[i]
        button.addEventListener('click', addToClicked)
    }

    var removeItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeItemButtons.length; i++) {
        var button = removeItemButtons[i]
        button.addEventListener('click', removeItem)
    }



}

//  Event (event handler) that occurs when remove button is clicked 
function removeItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()

}

//Event (event handler) that occurs when add button is clicked

function addToClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var itemname = shopItem.getElementsByClassName('item-name')[0].value
    var quantity = shopItem.getElementsByClassName('item-quantity')[0].value
    var description = shopItem.getElementsByClassName('item-description')[0].value
    if (itemname === "" || quantity === "" || description === "") {
        alert("Kindly input all values");

        return false;
    }
    document.getElementById('item').value = "";
    document.getElementById('quant').value = "";
    document.getElementById('desc').value = "";

    addItemToShop(itemname, quantity, description)




}

// Adds my shopping list items to their respective positions 

function addItemToShop(itemname, quantity, description) {
    var itemRow = document.createElement('div')
    itemRow.classList.add('items-row')
    var shopItems = document.getElementsByClassName('shopping-items')[0]

    var itemRowContents = `
        <div class="item-column">
            <span style="width: 140px;">${itemname}</span>
            <span style="width: 140px;">${quantity}</span>
            <span style="width: 140px;">${description}</span>
        </div>    
        <div class="item-column">
               <button class="btn btn-danger" type="button">Remove</button>
        </div>`
    itemRow.innerHTML = itemRowContents
    shopItems.append(itemRow)
    itemRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeItem)
}
