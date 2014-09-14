$(document).ready(function () {
  console.log('signup.js is loaded');
  var nextForm ="<div class='add-single-form'>\
  <div class='form-group'>\
    <label class='sr-only' for='firstName'>First Name</label>\
    <input type='text' class='form-control' name='firstName[]' placeholder='First Name'>\
  </div>\
  <div class='form-group'>\
    <label class='sr-only' for='lastName'>Last Name</label>\
    <input type='text' class='form-control' name='lastName[]' placeholder='Last Name'>\
  </div>\
  <div class='form-group'>\
    <label class='sr-only' for='localAOR'>Local Association</label>\
    <input type='text' class='form-control' name='localAOR[]' placeholder='Local Association'>\
  </div>\
  <div class='checkbox' name='director[]'>\
    <label>\
      <input type='checkbox'>C.A.R. Director\
    </label>\
  </div>\
  <div class='checkbox'>\
    <label>\
      <input type='checkbox' name='minraf[]'>Minimum $148 RAF\
    </label>\
  </div>\
  <button type='button' class='btn btn-danger btn-sm remove'>Remove</button>\
  </div>\n";
  
  $('#addnew').click(function (e) {
    e.preventDefault();
    console.log('addnew button clicked');
    $('#addForm').append(nextForm);
  });
  $('form').on('click', '.remove', function (e) {
    e.preventDefault();
    console.log('remove button clicked');
    $(this).parent('div').remove();
  });
});