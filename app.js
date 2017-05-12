//Check & uncheck items
$("body").on("click", ".shopping-item-toggle", function(event) {
	$(this).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
});
//Delete items
$("body").on("click", ".shopping-item-delete", function(event) {
  	$(this).closest("li").remove();
});
//Add items
$("#js-shopping-list-form").submit(function(event) {
	event.preventDefault();
	var addItem = $("#shopping-list-entry").val();
	$("ul").append('<li><span class="shopping-item">' + addItem + 
	'</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button> <button class="shopping-item-delete"><span class="button-label">delete</span>')
});
