let inputField = document.getElementById('input-item');
let addButton = document.getElementById('add-item');
let itemList = document.getElementById('item-list');

addButton.addEventListener('click', function() {
  // itemList = document.createElement('li');
 itemList.innerText = inputField.value;
 inputField.value = '';
}); 

