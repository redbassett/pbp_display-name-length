$(function(){
    $('.user-link').html(function(){
    	if ($(this).text().length > pb.plugin.get('display_name_length').settings.length) {
            return $(this).text().substring(0, pb.plugin.get('display_name_length').settings.length)+'&hellip;';
        } else {
            return $(this).text();
        }
    });
});
