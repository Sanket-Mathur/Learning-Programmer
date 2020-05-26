function DarkMode() {
    
    var checkbox = document.getElementById('check');
    if(checkbox.checked == true) {    
        document.getElementById('header-nav').setAttribute("class", "navbar navbar-default navbar-fixed-top styledark");
    } else {
        document.getElementById('header-nav').setAttribute("class", "navbar navbar-default navbar-fixed-top");
    } 
}