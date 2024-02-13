$(function(){
  $("[data-toggle='tooltip']").tooltip();
  $("[data-toggle='popover']").popover();
  $('.carousel').carousel({
    interval : 2000
  });

  $('#contacto').on('show.bs.modal',  (e)  => {
    $('#contactoBtn').removeClass('btn-outline-success').addClass('btn-primary').prop('disabled',true);
  });

  $('#contacto').on('hidden.bs.modal',  (e)  => {
    $('#contactoBtn').prop('disabled',false);
  });


});
