// Simple dropdown toggle
            document.addEventListener('DOMContentLoaded', function() {
            var dropdown = document.querySelector('.dropdown');
            var btn = dropdown.querySelector('.dropbtn');
            var content = dropdown.querySelector('.dropdown-content');
            btn.addEventListener('mouseenter', function() {
                content.style.display = 'block';
            });
            btn.addEventListener('mouseleave', function() {
                setTimeout(() => { if (!content.matches(':hover')) content.style.display = 'none'; }, 200);
            });
            content.addEventListener('mouseleave', function() {
                content.style.display = 'none';
            });
            content.addEventListener('mouseenter', function() {
                content.style.display = 'block';
            });
            });

               // Shop dropdown toggle
            document.addEventListener('DOMContentLoaded', function() {
            var shopDropdown = document.querySelector('.shop-dropdown');
            var shopBtn = shopDropdown.querySelector('.shop-dropbtn');
            var shopContent = shopDropdown.querySelector('.shop-dropdown-content');
            shopBtn.addEventListener('mouseenter', function() {
                shopContent.style.display = 'block';
            });
            shopBtn.addEventListener('mouseleave', function() {
                setTimeout(() => { if (!shopContent.matches(':hover')) shopContent.style.display = 'none'; }, 200);
            });
            shopContent.addEventListener('mouseleave', function() {
                shopContent.style.display = 'none';
            });
            shopContent.addEventListener('mouseenter', function() {
                shopContent.style.display = 'block';
            });
            });

               // Sample product data
        const products = [
            {
                id: 1,
                name: "Wireless Headphones",
                price: 49.99,
                image: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
                desc: "High-quality wireless headphones with noise cancellation."
            },
            {
                id: 2,
                name: "Smart Watch",
                price: 89.99,
                image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&w=400&q=80",
                desc: "Track your fitness and notifications on the go."
            },
            {
                id: 3,
                name: "Bluetooth Speaker",
                price: 29.99,
                image: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=400&q=80",
                desc: "Portable speaker with deep bass and long battery life."
            },
            {
                id: 4,
                name: "DSLR Camera",
                price: 399.99,
                image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
                desc: "Capture stunning photos with this professional camera."
            },
            {
                id: 5,
                name: "Laptop Backpack",
                price: 39.99,
                image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
                desc: "Spacious and stylish backpack for your laptop and essentials."
            },
            {
                id: 6,
                name: "Fitness Tracker",
                price: 19.99,
                image: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
                desc: "Monitor your health and activity all day long."
            }
        ];

        let cart = [];
        let searchTerm = "";

        function renderProducts() {
            const productList = document.getElementById('product-list');
            productList.innerHTML = '';
            let filtered = products.filter(p =>
                p.name.toLowerCase().includes(searchTerm) ||
                p.desc.toLowerCase().includes(searchTerm)
            );
            if (filtered.length === 0) {
                productList.innerHTML = '<p>No products found.</p>';
                return;
            }
            filtered.forEach(product => {
                const inCart = cart.find(i => i.id === product.id);
                const div = document.createElement('div');
                div.className = 'product';
                div.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.desc}</p>
                    <div class="price">$${product.price.toFixed(2)}</div>
                    <div class="cart-controls">
                        ${inCart ? `
                            <button class="qty-btn" onclick="changeQty(${product.id}, -1)">-</button>
                            <span>${inCart.qty}</span>
                            <button class="qty-btn" onclick="changeQty(${product.id}, 1)">+</button>
                            <span class="in-cart-label">In Cart</span>
                        ` : `
                            <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
                        `}
                    </div>
                `;
                productList.appendChild(div);
            });
        }

        function renderCart() {
            const cartItems = document.getElementById('cart-items');
            cartItems.innerHTML = '';
            let total = 0;
            cart.forEach(item => {
                total += item.price * item.qty;
                const li = document.createElement('li');
                li.innerHTML = `
                    <span class="item-info">${item.name} <br><small>$${item.price.toFixed(2)} x ${item.qty}</small></span>
                    <span class="cart-item-controls">
                        <button class="qty-btn" onclick="changeQty(${item.id}, -1)">-</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="changeQty(${item.id}, 1)">+</button>
                        <span class="remove" onclick="removeFromCart(${item.id})" title="Remove item">✖</span>
                    </span>
                `;
                cartItems.appendChild(li);
            });
            document.getElementById('cart-total').textContent = `Total: $${total.toFixed(2)}`;
            document.getElementById('cart-count').textContent = cart.reduce((sum, i) => sum + i.qty, 0);
        }

        function addToCart(id) {
            const product = products.find(p => p.id === id);
            const item = cart.find(i => i.id === id);
            if (item) {
                item.qty += 1;
            } else {
                cart.push({ ...product, qty: 1 });
            }
            renderProducts();
            renderCart();
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            renderProducts();
            renderCart();
        }

        function changeQty(id, delta) {
            const item = cart.find(i => i.id === id);
            if (!item) return;
            item.qty += delta;
            if (item.qty <= 0) {
                removeFromCart(id);
            } else {
                renderProducts();
                renderCart();
            }
        }

        function toggleCart() {
            const cartDiv = document.getElementById('cart');
            cartDiv.style.display = cartDiv.style.display === 'block' ? 'none' : 'block';
            renderCart();
            document.getElementById('cart-message').innerHTML = '';
        }

        function clearCart() {
            cart = [];
            renderProducts();
            renderCart();
            document.getElementById('cart-message').innerHTML = '';
        }

        function checkout() {
            const msgDiv = document.getElementById('cart-message');
            if (cart.length === 0) {
                msgDiv.innerHTML = '<div class="checkout-error">Your cart is empty!</div>';
                return;
            }
            msgDiv.innerHTML = '<div class="checkout-success">Thank you for your purchase!</div>';
            cart = [];
            renderProducts();
            renderCart();
            setTimeout(() => {
                document.getElementById('cart').style.display = 'none';
                msgDiv.innerHTML = '';
            }, 1500);
        }

        function searchProducts() {
            searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
            renderProducts();
        }

        document.getElementById('search-input').addEventListener('keyup', function(e) {
            if (e.key === 'Enter') searchProducts();
        });

        // Initial render
        renderProducts();
        renderCart();

        // Redirect to thank you page after checkout
        function checkoutRedirect() {
            if (cart.length === 0) {
            document.getElementById('cart-message').innerHTML = '<div class="checkout-error">Your cart is empty!</div>';
            return;
            }
            // Optionally, you can clear the cart here or after redirect
            cart = [];
            renderProducts();
            renderCart();
            window.location.href = "checkout.html"; // Change to your thank you page path
        }



        // for login and register redirect
        function showForm(formId) {
document.querySelectorAll(".form-box").forEach(form => form.classList.remove("active"));
document.getElementById(formId).classList.add(active);

        }