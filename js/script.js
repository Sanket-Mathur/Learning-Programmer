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
    
        function validateEMAIL() {

            var email = document.getElementById('email');
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

            if (!filter.test(email.value)) {
                alert('Please provide a valid email address');
            } else {            
                document.getElementById('textAfterSubscribing').innerHTML = "Thank You for Subscribing";
                email.value = '';
            }
            
            return false;
        }
    
        document.querySelector("#submit").onclick = validateEMAIL
    
        function getTopics() {
            
            var text = document.querySelector("textarea");
            
            if (text.value.length >= 3) {
                text.value = "Thank you for submitting your topic ideas. We might upload post related to it in the next 2 months.";
            } else {
                alert('Please write something before submitting');
            }
            
            return false;
            
        }
    
        document.querySelector("#suggest-sub").onclick = getTopics;
    
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