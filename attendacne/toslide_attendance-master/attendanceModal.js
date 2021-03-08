var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

//myModal.addEventListener('shown.bs.modal', function () {
//  myInput.focus()
//})

var exampleModal = document.getElementById('exampleModal')

exampleModal.addEventListener('show.bs.modal', function (event) {

 
  // Button that triggered the modal
  var button = event.relatedTarget
  // Extract info from data-bs-* attributes
  var recipient =current_selected_row.cells[1].title;
  // If necessary, you could initiate an AJAX request here
  // and then do the updating in a callback.
  //
  // Update the modal's content.
  var modalTitle = exampleModal.querySelector('.modal-title')
  var modalBodyInput = exampleModal.querySelector('.modal-body textarea')

  modalTitle.textContent = 'New message to ' + current_selected_row.id;
  document.getElementById("student").innerHTML = current_selected_row.cells[1].title +" "+ current_selected_row.id;
  modalBodyInput.value = "";
})

