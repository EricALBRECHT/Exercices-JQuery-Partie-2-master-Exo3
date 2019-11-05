i=0;
$(document).on('click','#hide, #show',function(){
if (this.id == 'show'){
    $("#text").show();
}
else{
    $("#text").hide();
}
});