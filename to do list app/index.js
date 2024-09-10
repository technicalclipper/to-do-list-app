
$("#add-button").on("click",function(){
    if($("#additem").val()){
    var text=$("#additem").val();
    $("#list-div").append('<div class="listitems"><input type="checkbox" class="cbox"><Div class="displaytextconatinertext">'+text+'</div><img class="deleteimage" src="delete.png"/></div>');
    $("#additem").val('');
}})

$("#list-div").on("click", ".deleteimage", function() {
    $(this).parent().remove();
});

$("#list-div").on("change", ".cbox", function() {
    $(this).siblings('.displaytextconatinertext').toggleClass("strike", this.checked);
});
