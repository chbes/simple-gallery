$(function() {

    $('#sg1 img').click( function() {
        console.log('modal show');
        var srcImg = $(this).attr('src');
        $('#modal1 .sg-modal-content img').attr('src', srcImg);
        $('#main-container').addClass('blur');
        $('#modal1').show();
    });

    $('#modal1').click( function(event) {
        console.log('modal hide');
        $('#main-container').removeClass('blur');
        $('#modal1').hide();
    });

});