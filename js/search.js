const searchbox = () => {
    var filter = document.getElementById('search').value.toUpperCase();
    
    var all = document.getElementById('cont');
    var divs = all.getElementsByTagName('div');
    for (var i = 0; i < divs.length; i++) {
        var heading = divs[i].getElementsByTagName('h3')[0];
        var textValue = heading.textContent;
        if (textValue.toUpperCase().indexOf(filter) > -1) {
            divs[i].style.display = '';
        } else {
            divs[i].style.display = 'none';
        }
    }
}

(function (global) {

	var page = {};

	var posts = "snippets/posts.html";
    var current = 0;

	var insertHtml = function (selector, html) {
		var targetElem = document.querySelector(selector);
		targetElem.innerHTML = html;
	};

	var showLoading = function (selector) {
  		var html = "<div id='loading' class='text-center'>";
 		html += "<img src='images/ajax-loader.gif'></div>";
  		insertHtml(selector, html);
	};

    document.addEventListener("DOMContentLoaded", function (event) {

        showLoading("#cont");
        $ajaxUtils.sendGetRequest(
            posts,
            function (responseText) {
                var arr = responseText.split('</div>');
                document.querySelector("#cont").innerHTML = '';
                for (var i = 0; i < 12 && i < arr.length; i++) {
                    document.querySelector("#cont").innerHTML += arr[i] + '</div>';
                }
            },
            false
        );
    });

    page.loadPage = function (pno) {
        showLoading("#cont");
        $ajaxUtils.sendGetRequest(
            posts,
            function (responseText) {
                var arr = responseText.split('</div>');
                document.querySelector("#cont").innerHTML = '';
                for (var i = pno*12; i < (pno+1)*12 && i < arr.length; i++) {
                    document.querySelector("#cont").innerHTML += arr[i];
                }
            },
            false
        );
        jQuery('html, body').animate({ scrollTop: 0 }, 'fast');
        current = pno;
    }
    
    page.loadPrev = function () {
        if (current > 0) {
            page.loadPage(current - 1);
        }
    }
    page.loadNext = function () {
        if (current < 1) {
            page.loadPage(current + 1);
        }
    }
    
	global.$page = page;

})(window);