function newItem() {
  //jQuery
  //1. Adding a new item to the list of items:
  let li = $('<li></li>');
  let inputValue = $('#input').val();

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
    li.append(inputValue);
  }

  //2. Crossing out an item from the list of items:
  li.on('dblclick', function () {
    li.toggleClass('strike');
  });

  //3(i). Adding the delete button "X":
  let crossOutButton = $('<button class ="crossOutButton">X</button>');
  li.append(crossOutButton);

  //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the CSS:
  crossOutButton.on('click', function () {
    li.addClass('delete');
  });

  // 4. Reordering the items:
  $('#list').sortable();
}
