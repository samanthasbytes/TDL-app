function newItem() {
  // 1. Adding a new item to the list:
  let li = $('<li></li>');
  let inputValue = $('#input').val();

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
    li.append(inputValue);
  }

  //2. Crossing out an item:
  li.on('dblclick', function () {
    li.toggleClass('strike');
  });

  //3(i). Adding the delete button "x":
  let deleteButton = $('<button class ="deleteButton">x</button>');
  li.append(deleteButton);

  //3(ii). Deleting an item:
  deleteButton.on('click', function () {
    li.remove();
  });

  // 4. Reordering the items:
  $('#list').sortable();

  // Clears text box after adding an item:
  $('#input').val('');
}

// when user clicks enter from within textbox, page refreshes and list is gone // * input field was wrapped within a form element, pressing enter triggered the default behavior for form submission, causing the page to refresh
// resolved: remove form element

// the alternating gray & white background on li items doesn't change when an item is deleted // * this happens because we're not actually deleting the items, we're hiding them with CSS
// resolved: solution is to change li.addClass('delete'); to li.remove();
