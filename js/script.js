document.addEventListener("DOMContentLoaded",

    function (event) {
        
        function DarkMode() {
            var checkbox = document.getElementById('check');
            if(checkbox.checked == true) {   
                document.querySelector('body').setAttribute("class", "styledark");
            } else {
                document.querySelector('body').removeAttribute("class");
            }
        }
    
        document.querySelector("#check").onclick = DarkMode;
    
    }
                          
);

$(function () {
    $('#navbar-button').blur(function (event) {
        var screenWidth = window.innerWidth;
        if(screenWidth < 768) {
            $('#collapsable-nav').collapse('hide');
        }
    });
});