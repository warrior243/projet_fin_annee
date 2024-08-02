function showProducts(category) {
    // Empêche le rafraîchissement de la page
    event.preventDefault();

    var products = document.querySelectorAll('.sympro');
    products.forEach(function(sympro) {
        // Vérifie si la catégorie sélectionnée est présente dans l'attribut data-category
        let categories = sympro.getAttribute('data-category');
        if (categories.split(' ').includes(category)) {
            sympro.style.display = 'block';
        } else {
            sympro.style.display = 'none';
        }
    });
}

function searchProducts() {
    let input = document.getElementById('barreRech');
    let filter = input.value.toLowerCase();
    let products = document.querySelectorAll('.sympro');
    products.forEach(function(sympro) {
        let text = sympro.textContent || sympro.innerText;
        if (text.toLowerCase().includes(filter)) {
            sympro.style.display = 'block';
        } else {
            sympro.style.display = 'none';
        }
    });
}

