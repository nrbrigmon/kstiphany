$(document).ready(function(){

	/* section for updating photos in the work section*/
	$(".filter-option").click(function(){
        var value = $(this).attr('data-filter');
        
        $(".filter-option").removeClass('active');
        $(this).addClass('active');

        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('200');
            $('.filter').filter('.'+value).show('200');
            
        }
    });

	// on start, go to carandiru
    $(".filter").not('.carandiru').hide();
    $(".filter").filter('.carandiru').show();


    /* section for making adjustments to header and footer*/

    $("#footer").html('<div class="container"><div class="row"><div class="col-lg-12">'+
        '<p class="copyright text-muted small">Copyright &copy; K. Stiphany 2017. All Rights Reserved</p>'+
        '</div></div></div>');
});