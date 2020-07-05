document.addEventListener("DOMContentLoaded",

    function (event) {
        
        function DarkMode() {
            var checkbox = document.getElementById('check');
            if(checkbox.checked == true) {
                document.cookie = "mode=dark";
                document.querySelector('body').setAttribute("class", "styledark");
            } else {
                document.cookie = "mode=light"
                document.querySelector('body').removeAttribute("class");
            }
        }
        
        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }
        
        if (getCookie('mode') == 'dark') {
            document.getElementById('check').checked = true;
            DarkMode();
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
    
        function ratings(star) {
            if (star == 1) {
                document.getElementById("s1").src = "../images/star(2).png";
                document.getElementById("s2").src = "../images/star(1).png";
                document.getElementById("s3").src = "../images/star(1).png";
                document.getElementById("s4").src = "../images/star(1).png";
                document.getElementById("s5").src = "../images/star(1).png";
            }
            else if (star == 2) {
                document.getElementById("s1").src = "../images/star(2).png";
                document.getElementById("s2").src = "../images/star(2).png";
                document.getElementById("s3").src = "../images/star(1).png";
                document.getElementById("s4").src = "../images/star(1).png";
                document.getElementById("s5").src = "../images/star(1).png";
            }
            else if (star == 3) {
                document.getElementById("s1").src = "../images/star(2).png";
                document.getElementById("s2").src = "../images/star(2).png";
                document.getElementById("s3").src = "../images/star(2).png";
                document.getElementById("s4").src = "../images/star(1).png";
                document.getElementById("s5").src = "../images/star(1).png";
            }
            else if (star == 4) {
                document.getElementById("s1").src = "../images/star(2).png";
                document.getElementById("s2").src = "../images/star(2).png";
                document.getElementById("s3").src = "../images/star(2).png";
                document.getElementById("s4").src = "../images/star(2).png";
                document.getElementById("s5").src = "../images/star(1).png";
            }
            else if (star == 5) {
                document.getElementById("s1").src = "../images/star(2).png";
                document.getElementById("s2").src = "../images/star(2).png";
                document.getElementById("s3").src = "../images/star(2).png";
                document.getElementById("s4").src = "../images/star(2).png";
                document.getElementById("s5").src = "../images/star(2).png";
            }

        }
    
        var average = 4.2;
        ratings(Math.round(average));
        document.querySelector("#s1").onclick = () => { ratings(1) };
        document.querySelector("#s2").onclick = () => { ratings(2) };
        document.querySelector("#s3").onclick = () => { ratings(3) };
        document.querySelector("#s4").onclick = () => { ratings(4) };
        document.querySelector("#s5").onclick = () => { ratings(5) };
    
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

var MSG = `

Learn           LearningProgram
Learn           Learn      Learn
Learn           Learn        Learn
Learn           Learn      Learn
Learn           LearningProgram
Learn           Learn
LearningProgra	Learn
LearningProgra	Learn

`;
console.log(MSG);
console.log('Welcome Developers!\n\nHere are the technologies that I am using for building this website\n\nFront-End\n\n• HTML\n• CSS\n• Javascript\n• The designs are self made with use of Bootstrap to make the website responsive\n• jQuery is used to fix some small issues and is used by the Bootstrap package\n\nBack-End\n\n• Under Development\n\nCheck the link below to check out all the front end code\nhttps://github.com/Sanket-Mathur/Learning-Programmer/')