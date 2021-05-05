$(document).ready(function () {
    $(".fruitsandveggies").hide();


});
/*Show content functions*/
function hideAll() {
    $(".my-content-haircare").hide();
    $(".staples").hide();
    $(".bev").hide();
    $(".fruitsandveggies").hide();
}
function showFruitsandVeggies() {
    hideAll();
    $(".fruitsandveggies").show();
   }
