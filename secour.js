function searchActions() {
    var input = document.getElementById('searchBar');
    var filter = input.value.toLowerCase();
    var actions = document.querySelectorAll('.secours-action');
    actions.forEach(function(action) {
        var keywords = action.getAttribute('data-keywords');
        if (keywords.toLowerCase().includes(filter)) {
            action.style.display = 'block';
        } else {
            action.style.display = 'none';
        }
    });
}
