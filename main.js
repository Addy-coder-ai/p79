menu_list_array=["Double Cheese Pizza","Pasta Pizza","Veg Extravanga Pizza","Veg Deluxe Pizza","Paneer Tandoori Pizza"];
function getmenu() {
    var htmlData;
    htmlData="<ol class='menulist'>";
    menu_list_array.sort();
    for(var i=0; i<menu_list_array.length; i++){
        htmlData=htmlData+'<li>'+menu_list_array[i]+'</li>'
    }
    htmlData=htmlData+"</ol>"
    document.getElementById("display_menu").innerHTML=htmlData;
}
function add_item() {
    var htmlData;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmlData="<section class='cards'>"
    for(var i=0; i<menu_list_array.length; i++){
        htmlData=htmlData+"<div class='card'>"+"<img src='pizzaImg.png'">+menu_list_array+"</div>"
    }
    htmlData=htmlData+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmlData;
}