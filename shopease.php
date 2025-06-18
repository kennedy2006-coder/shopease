<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopease - E-Commerce Website</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:400,700">
    <link rel="stylesheet" type="text/css" href="shopease.css">
</head>
<body>
    <header>
        <h1>Shopease</h1>
        <p>Your one-stop online shop</p>
    </header>
    <nav>
        <a href="#">Home</a>
        <a href="#">About</a>
        <div class="dropdown" style="display:inline-block;position:relative;">
            <a href="#" class="dropbtn" style="cursor:pointer;">More ▼</a>
            <div class="dropdown-content" style="display:none;position:absolute;top:100%;left:0;background:#444;min-width:140px;box-shadow:0 2px 8px rgba(0,0,0,0.12);z-index:10;">
            <a href="#">Contact</a>
            <a href="#">FAQ</a>
            <a href="#">Support</a>
            </div>
        </div>
       
        <div class="shop-dropdown">
            <a href="#" class="shop-dropbtn">Shop ▼</a>
            <div class="shop-dropdown-content">
            <a href="#">Electronics</a>
            <a href="#">Wearables</a>
            <a href="#">Accessories</a>
            </div>
        </div>
        <script>
         
        </script>
    </nav>
    <button class="cart-toggle" onclick="toggleCart()" style="position:fixed;top:30px;right:30px;">
        🛒
        <span class="cart-count" id="cart-count">0</span>
    </button>
    <div id="cart">
        <h2>Your Cart</h2>
        <div id="cart-message"></div>
        <ul id="cart-items"></ul>
        <div id="cart-total">Total: $0.00</div>
        <button id="checkout-btn" onclick="checkout()">Checkout</button>
        <button id="clear-cart-btn" onclick="clearCart()">Clear Cart</button>
        
        
    </div>
    <div class="container">
        <div class="search-bar">
            <input type="text" id="search-input" placeholder="Search products...">
            <button onclick="searchProducts()">Search</button>
        </div>
        <h2>Featured Products</h2>
        <div class="products" id="product-list">
            <!-- Products will be injected here by JS -->
        </div>
    </div>
    <footer>
        &copy; 2024 Shopease. All rights reserved.
    </footer>
    <script src="shopease.js"></script>
</body>
</html>