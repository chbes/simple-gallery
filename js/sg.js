//console.log('aqui1');
/*$('#exampleModal').on('show.bs.modal', function (event) {
    console.log('aqui2');
    var button = $(event.relatedTarget);
    var srcFocus = button.src;
    var modal = $(this);
    modal.find('#img-focus').src(srcFocus);
    modal.find('.modal-body input').val(recipient);
});*/
$(function() {
    
    $('#select-gallery').click( function(event) {
        console.log('1');
        $('#modal1').show();
    });
    
        $('#modal1').click( function(event) {
        console.log('2');
        $('#modal1').hide();
    });
    
});