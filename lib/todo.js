$('#add').click( function() {
var Details = $('#details').val();

if($("#details").val() == '')
{
$('#alert').html("<b>Warning!</b> To Do empty");
$('#alert').fadeIn().delay(1000).fadeOut();
return false;
}

$('#todos').prepend("<li>" + details + "</li>");
$('#form')[0].reset();
var todos = $('#todos').html();
localStorage.setItem('todos', todos);
return false;
});

if(localStorage.getItem('todos'))
{
$('#todos').html(localStorage.getItem('todos'));
}

$('#clear').click( function() {
window.localStorage.clear();
location.reload();
return false;
});