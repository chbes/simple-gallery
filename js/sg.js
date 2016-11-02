$(function() {

    //Open modal when click on image
    $('#sg1 img').click( function() {
        console.log('modal open');
        var srcImg = $(this).attr('src');
        $('#modal1 .sg-modal-content img').attr('src', srcImg);
        $('#main-container').addClass('sg-filter-blur');
        $('#modal1').show();
    });

    //Close modal when click on modal
    $('#modal1').click( function() {
        console.log('modal close');
        $('#main-container').removeClass('sg-filter-blur');
        $('#modal1').hide();
    });

});