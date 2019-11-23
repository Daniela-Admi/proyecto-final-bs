// SideNav Initialization
$(".button-collapse").sideNav();

$('#input_starttime').pickatime({
// 12 or 24 hour
twelvehour: true,
});

(function() {
'use strict';
window.addEventListener('load', function() {
// Fetch all the forms we want to apply custom Bootstrap validation styles to
var forms = document.getElementsByClassName('needs-validation');
// Loop over them and prevent submission
var validation = Array.prototype.filter.call(forms, function(form) {
form.addEventListener('submit', function(event) {
if (form.checkValidity() === false) {
event.preventDefault();
event.stopPropagation();
}
form.classList.add('was-validated');
}, false);
});
}, false);
})();

// Data Picker Initialization
$('.datepicker').pickadate();
$().button('toggle')
<script>
$(document).ready(function(){
  $('.toast').toast('show');
});
</script>