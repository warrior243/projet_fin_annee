function searchArticles() {
    let input = document.getElementById('searchBar');
    let filter = input.value.toLowerCase();
    let articles = document.querySelectorAll('.blog-article');
    articles.forEach(function(article) {
        let keywords = article.getAttribute('data-keywords');
        if (keywords.toLowerCase().includes(filter)) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
