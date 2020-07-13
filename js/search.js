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