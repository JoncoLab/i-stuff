(function($){
    $(function(){
        $(".modal").modal();
        $(".parallax").parallax();
        $(".sidenav").sideNav();
        $(".carousel").carousel({
            fullWidth: false,
            padding: 100,
            dist: -20,
            numVisible: 5,
            noWrap: false
        });
    });
})(jQuery);