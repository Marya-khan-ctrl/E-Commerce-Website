document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.closest('.product');
        const product = {
            id: productElement.getAttribute('data-id'),
            name: productElement.getAttribute('data-name'),
            price: productElement.getAttribute('data-price'),
            image: productElement.getAttribute('data-image'),
            quantity: 1
        };

        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        const existingProduct = cartItems.find(item => item.id === product.id);

        if (existingProduct) {
            existingProduct.quantity++;
        } else {
            cartItems.push(product);
        }

        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        alert('Product added to cart!');
    });
});