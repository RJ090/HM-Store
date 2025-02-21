document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const cartCount = document.getElementById("cart-count");
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.parentElement;
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));

            cart.push({ name, price });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;
        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += `<li>${item.name} - $${item.price} <button onclick="removeItem(${index})">Remove</button></li>`;
        });
        cartTotal.textContent = total;
        cartCount.textContent = cart.length;
    }

    window.removeItem = (index) => {
        cart.splice(index, 1);
        updateCart();
    };

    // Show Cart Modal
    document.getElementById("cart-btn").addEventListener("click", () => {
        document.getElementById("cart-modal").style.display = "block";
    });

    // Close Modals
    document.querySelectorAll(".close").forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            document.querySelectorAll(".modal").forEach(modal => modal.style.display = "none");
        });
    });

    // Checkout
    document.getElementById("checkout-btn").addEventListener("click", () => {
        alert("Proceeding to checkout...");
        cart = [];
        updateCart();
    });

    // Login System
    document.getElementById("login-btn").addEventListener("click", () => {
        document.getElementById("login-modal").style.display = "block";
    });

    document.getElementById("login-submit").addEventListener("click", () => {
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        
        if (username === "admin" && password === "password") {
            alert("Login Successful!");
        } else {
            alert("Invalid Credentials!");
        }
    });
});
