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
    li.addClass('delete');
  });

  // 4. Reordering the items:
  $('#list').sortable();
}

// FIXME: periodically page refreshes and erases entire list & the end of the URL changes from "http://127.0.0.1:5500" to "http://127.0.0.1:5500/?ListItem=Test?"

// FIXME: the alternating gray & white background on li items doesn't change when an item is deleted... // * because we're not actually deleting the items, were hiding them, so technically the alternating colors are correct

// when user clicks enter from within textbox, page refreshes and list is gone // * input field was wrapped within a form element, pressing enter triggered the default behavior for form submission, causing the page to refresh

// FIXME: reordering the items doesnt work on mobile // ? jQuery UI library problem
