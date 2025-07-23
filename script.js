// Enhanced product data with ratings, stock, and offers
const products = [
  // Wires Series
  {
    id: 1,
    name: "Copper Wire 2.5mm²",
    category: "wires",
    price: 2699.0,
    originalPrice: 2999.0,
    description: "Premium copper wire for residential wiring",
    image: "copper_wire_2.5mm.webp",
    brand: "Premium",
    rating: 4.5,
    reviewCount: 128,
    stock: "in-stock",
    badge: "sale",
    discount: 10,
  },
  {
    id: 2,
    name: "Aluminum Wire 4mm²",
    category: "wires",
    price: 532.0,
    originalPrice: 632.0,
    description: "Heavy-duty aluminum wire for industrial use",
    image: "aluminum_wire_4mm.jpeg",
    brand: "Industrial",
    rating: 4.2,
    reviewCount: 89,
    stock: "in-stock",
    badge: "sale",
    discount: 16,
  },
  {
    id: 3,
    name: "Flexible Cable 1.5mm²",
    category: "wires",
    price: 1828.0,
    originalPrice: 1828.0,
    description: "Multi-core flexible cable for appliances",
    image: "flexible_cable.jpeg",
    brand: "Flexi",
    rating: 4.7,
    reviewCount: 156,
    stock: "low-stock",
    badge: "new",
  },
  // Vihan Switches Series
  {
    id: 4,
    name: "Vihan Classic Switch",
    category: "switches",
    price: 25.0,
    originalPrice: 25.0,
    description: "Elegant single pole switch in white finish",
    image: "vihan_classic_switch.jpeg",
    brand: "Vihan",
    rating: 4.0,
    reviewCount: 50,
    stock: "in-stock",
  },
  {
    id: 5,
    name: "Vihan Modular Switch",
    category: "switches",
    price: 35.0,
    originalPrice: 35.0,
    description: "Modern modular switch with LED indicator",
    image: "vihan_modular_switch.jpeg",
    brand: "Vihan",
    rating: 4.3,
    reviewCount: 75,
    stock: "in-stock",
  },
  {
    id: 6,
    name: "Vihan Dimmer Switch",
    category: "switches",
    price: 255.0,
    originalPrice: 255.0,
    description: "Premium dimmer switch with touch control",
    image: "vihan_dimmer_switch.jpeg",
    brand: "Vihan",
    rating: 4.6,
    reviewCount: 100,
    stock: "in-stock",
  },
  {
    id: 7,
    name: "Vihan Bell Push Switch",
    category: "switches",
    price: 130.0,
    originalPrice: 130.0,
    description: "Stylish bell push switch for doorbells",
    image: "vihan_bell_push_switch.jpeg",
    brand: "Vihan",
    rating: 4.1,
    reviewCount: 60,
    stock: "in-stock",
  },
  // Vihan Sockets Series
  {
    id: 8,
    name: "Vihan Universal Socket",
    category: "sockets",
    price: 40.0,
    originalPrice: 40.0,
    description: "Multi-pin universal socket with safety shutter",
    image: "vihan_universal_socket.jpeg",
    brand: "Vihan",
    rating: 4.4,
    reviewCount: 80,
    stock: "in-stock",
  },
  {
    id: 9,
    name: "Vihan USB Socket",
    category: "sockets",
    price: 165.0,
    originalPrice: 165.0,
    description: "Smart socket with dual USB charging ports",
    image: "vihan_usb_socket.jpeg",
    brand: "Vihan",
    rating: 4.7,
    reviewCount: 110,
    stock: "in-stock",
  },
  {
    id: 10,
    name: "Vihan Weatherproof Socket",
    category: "sockets",
    price: 75.0,
    originalPrice: 75.0,
    description: "IP65 rated outdoor socket with cover",
    image: "vihan_weatherproof_socket.jpeg",
    brand: "Vihan",
    rating: 4.2,
    reviewCount: 70,
    stock: "in-stock",
  },
  {
    id: 11,
    name: "Vihan Combo Socket",
    category: "sockets",
    price: 150.0,
    originalPrice: 150.0,
    description: "6A + 16A combination socket outlet",
    image: "vihan_combo_socket.jpeg",
    brand: "Vihan",
    rating: 4.5,
    reviewCount: 95,
    stock: "in-stock",
  },
  // Vihan Plates Series
  {
    id: 12,
    name: "Vihan Classic White Plate",
    category: "plates",
    price: 115.0,
    originalPrice: 115.0,
    description: "Premium white finish switch plate",
    image: "vihan_classic_plate.jpeg",
    brand: "Vihan",
    rating: 4.3,
    reviewCount: 65,
    stock: "in-stock",
  },
  {
    id: 13,
    name: "Vihan Golden Plate",
    category: "plates",
    price: 125.0,
    originalPrice: 125.0,
    description: "Elegant golden finish decorative plate",
    image: "vihan_golden_plate.jpeg",
    brand: "Vihan",
    rating: 4.6,
    reviewCount: 85,
    stock: "in-stock",
  },
  {
    id: 14,
    name: "Vihan Silver Plate",
    category: "plates",
    price: 120.0,
    originalPrice: 120.0,
    description: "Modern silver finish switch plate",
    image: "vihan_silver_plate.jpeg",
    brand: "Vihan",
    rating: 4.4,
    reviewCount: 78,
    stock: "in-stock",
  },
  {
    id: 15,
    name: "Vihan Wood Finish Plate",
    category: "plates",
    price: 130.0,
    originalPrice: 130.0,
    description: "Premium wood texture finish plate",
    image: "vihan_wood_plate.jpeg",
    brand: "Vihan",
    rating: 4.7,
    reviewCount: 92,
    stock: "in-stock",
  },
  {
    id: 16,
    name: "Vihan Glass Plate",
    category: "plates",
    price: 135.0,
    originalPrice: 135.0,
    description: "Tempered glass plate with crystal finish",
    image: "vihan_glass_plate.jpeg",
    brand: "Vihan",
    rating: 4.5,
    reviewCount: 105,
    stock: "in-stock",
  },
  // Accessories Series
  {
    id: 17,
    name: "Junction Box Set",
    category: "accessories",
    price: 18.0,
    originalPrice: 18.0,
    description: "Complete junction box with screws",
    image: "junction_box_set.jpeg",
    brand: "Standard",
    rating: 3.9,
    reviewCount: 40,
    stock: "in-stock",
  },
  {
    id: 18,
    name: "Cable Management Kit",
    category: "accessories",
    price: 12.0,
    originalPrice: 12.0,
    description: "Professional cable ties and clips set",
    image: "cable_management_kit.jpeg",
    brand: "Pro",
    rating: 4.0,
    reviewCount: 55,
    stock: "in-stock",
  },
  {
    id: 19,
    name: "Electrical Tape Roll",
    category: "accessories",
    price: 8.0,
    originalPrice: 8.0,
    description: "High-grade electrical insulation tape",
    image: "electrical_tape_roll.jpeg",
    brand: "Insul",
    rating: 4.2,
    reviewCount: 68,
    stock: "in-stock",
  },
  {
    id: 20,
    name: "Wire Nuts Pack",
    category: "accessories",
    price: 15.0,
    originalPrice: 15.0,
    description: "Assorted wire nuts for connections",
    image: "wire_nuts_pack.jpeg",
    brand: "Connect",
    rating: 4.1,
    reviewCount: 72,
    stock: "in-stock",
  },
]

// Add new global variables
let wishlist = []
let recentlyViewed = []
let currentSort = "default"

// Shopping cart
let cart = []
let currentFilter = "all"

// DOM elements
const cartSidebar = document.getElementById("cartSidebar")
const cartOverlay = document.getElementById("cartOverlay")
const cartItems = document.getElementById("cartItems")
const cartCount = document.getElementById("cartCount")
const cartTotal = document.getElementById("cartTotal")
const cartFooter = document.getElementById("cartFooter")
const productsGrid = document.getElementById("productsGrid")

// Initialize enhanced features
document.addEventListener("DOMContentLoaded", () => {
  displayProducts()
  updateCartUI()
  updateWishlistUI()
  startFlashSaleTimer()

  // Add scroll effect to header
  window.addEventListener("scroll", () => {
    const header = document.querySelector(".header")
    if (window.scrollY > 100) {
      header.style.background = "rgba(255, 255, 255, 0.98)"
      header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.1)"
    } else {
      header.style.background = "rgba(255, 255, 255, 0.95)"
      header.style.boxShadow = "none"
    }
  })
})

// Enhanced display products function
function displayProducts(productsToShow = products) {
  productsGrid.innerHTML = ""

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card fade-in-up"

    const discount = product.originalPrice
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : 0
    const isInWishlist = wishlist.some((item) => item.id === product.id)

    productCard.innerHTML = `
      ${product.badge ? `<div class="product-badge ${product.badge}">${product.badge === "sale" ? discount + "% OFF" : product.badge.toUpperCase()}</div>` : ""}
      
      <div class="product-actions">
        <button class="action-btn ${isInWishlist ? "active" : ""}" onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
          <i class="fas fa-heart"></i>
        </button>
        <button class="action-btn" onclick="openQuickView(${product.id})" title="Quick View">
          <i class="fas fa-eye"></i>
        </button>
        <button class="action-btn" onclick="compareProduct(${product.id})" title="Compare">
          <i class="fas fa-balance-scale"></i>
        </button>
      </div>
      
      <div class="product-image" onclick="addToRecentlyViewed(${product.id})">
        <img src="${product.image}" alt="${product.name}">
      </div>
      
      <div class="product-info">
        <span class="product-brand">${product.brand}</span>
        
        <div class="product-rating">
          <div class="stars">
            ${generateStars(product.rating)}
          </div>
          <span class="rating-count">(${product.reviewCount})</span>
        </div>
        
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        
        <div class="stock-status ${product.stock}">
          ${getStockText(product.stock)}
        </div>
        
        <div class="product-footer">
          <div class="price-container">
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            ${
              product.originalPrice && product.originalPrice > product.price
                ? `<div class="original-price">₹${product.originalPrice.toFixed(2)}</div>
               <div class="discount">${discount}% off</div>`
                : ""
            }
          </div>
        </div>
        
        <div class="quick-actions">
          <button class="add-to-cart" onclick="addToCart(${product.id})">
            Add to Cart
          </button>
          <button class="quick-buy" onclick="quickBuy(${product.id})">
            Buy Now
          </button>
        </div>
      </div>
    `
    productsGrid.appendChild(productCard)
  })
}

// Helper functions
function generateStars(rating) {
  let stars = ""
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars += '<i class="fas fa-star star"></i>'
    } else if (i - 0.5 <= rating) {
      stars += '<i class="fas fa-star-half-alt star"></i>'
    } else {
      stars += '<i class="fas fa-star star empty"></i>'
    }
  }
  return stars
}

function getStockText(stock) {
  switch (stock) {
    case "in-stock":
      return "In Stock"
    case "low-stock":
      return "Only few left"
    case "out-of-stock":
      return "Out of Stock"
    default:
      return "In Stock"
  }
}

// Wishlist functions
function toggleWishlistSidebar() {
  const wishlistSidebar = document.getElementById("wishlistSidebar")
  const wishlistOverlay = document.getElementById("wishlistOverlay")

  wishlistSidebar.classList.toggle("open")
  wishlistOverlay.classList.toggle("open")
  document.body.style.overflow = wishlistSidebar.classList.contains("open") ? "hidden" : "auto"
}

function addToWishlist(productId) {
  const product = products.find((p) => p.id === productId)
  const existingItem = wishlist.find((item) => item.id === productId)

  if (!existingItem) {
    wishlist.push(product)
    updateWishlistUI()
    showNotification("Added to wishlist!")
  }
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((item) => item.id !== productId)
  updateWishlistUI()
  displayProducts() // Refresh to update heart icons
  showNotification("Removed from wishlist!")
}

function toggleWishlistItem(productId) {
  const existingItem = wishlist.find((item) => item.id === productId)

  if (existingItem) {
    removeFromWishlist(productId)
  } else {
    addToWishlist(productId)
  }
}

function updateWishlistUI() {
  const wishlistCount = document.getElementById("wishlistCount")
  const wishlistItems = document.getElementById("wishlistItems")

  // Update count
  wishlistCount.textContent = wishlist.length
  wishlistCount.style.display = wishlist.length > 0 ? "flex" : "none"

  // Update items
  if (wishlist.length === 0) {
    wishlistItems.innerHTML = `
      <div class="empty-wishlist">
        <i class="fas fa-heart"></i>
        <p>Your wishlist is empty</p>
      </div>
    `
  } else {
    wishlistItems.innerHTML = ""
    wishlist.forEach((item) => {
      const wishlistItem = document.createElement("div")
      wishlistItem.className = "wishlist-item"
      wishlistItem.innerHTML = `
        <div class="wishlist-item-image">
          <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
        </div>
        <div class="wishlist-item-info">
          <h4>${item.name}</h4>
          <div class="wishlist-item-price">₹${item.price.toFixed(2)}</div>
          <div class="wishlist-actions">
            <button class="move-to-cart" onclick="moveToCart(${item.id})">Add to Cart</button>
            <button class="remove-wishlist" onclick="removeFromWishlist(${item.id})">Remove</button>
          </div>
        </div>
      `
      wishlistItems.appendChild(wishlistItem)
    })
  }
}

function moveToCart(productId) {
  addToCart(productId)
  removeFromWishlist(productId)
  showNotification("Moved to cart!")
}

// Quick View functions
function openQuickView(productId) {
  const product = products.find((p) => p.id === productId)
  const modal = document.getElementById("quickViewModal")
  const content = document.getElementById("quickViewContent")

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  content.innerHTML = `
    <div class="quick-view-image">
      <img src="${product.image}" alt="${product.name}">
    </div>
    <div class="quick-view-details">
      <span class="quick-view-brand">${product.brand}</span>
      <h3>${product.name}</h3>
      
      <div class="quick-view-rating">
        <div class="stars">
          ${generateStars(product.rating)}
        </div>
        <span class="rating-count">(${product.reviewCount} reviews)</span>
      </div>
      
      <div class="quick-view-price">
        ₹${product.price.toFixed(2)}
        ${
          product.originalPrice && product.originalPrice > product.price
            ? `<span style="font-size: 18px; color: #9ca3af; text-decoration: line-through; margin-left: 8px;">₹${product.originalPrice.toFixed(2)}</span>
           <span style="font-size: 14px; color: #10b981; margin-left: 8px;">${discount}% off</span>`
            : ""
        }
      </div>
      
      <p class="quick-view-description">${product.description}</p>
      
      <div class="stock-status ${product.stock}">
        ${getStockText(product.stock)}
      </div>
      
      <div class="quick-view-actions">
        <button class="btn btn-primary" onclick="addToCart(${product.id}); closeQuickView()">
          Add to Cart
        </button>
        <button class="btn btn-secondary" onclick="quickBuy(${product.id})">
          Buy Now
        </button>
      </div>
    </div>
  `

  modal.classList.add("open")
  document.body.style.overflow = "hidden"
}

function closeQuickView() {
  const modal = document.getElementById("quickViewModal")
  modal.classList.remove("open")
  document.body.style.overflow = "auto"
}

// Recently viewed functions
function addToRecentlyViewed(productId) {
  const product = products.find((p) => p.id === productId)

  // Remove if already exists
  recentlyViewed = recentlyViewed.filter((item) => item.id !== productId)

  // Add to beginning
  recentlyViewed.unshift(product)

  // Keep only last 6 items
  if (recentlyViewed.length > 6) {
    recentlyViewed = recentlyViewed.slice(0, 6)
  }

  updateRecentlyViewedUI()
}

function updateRecentlyViewedUI() {
  const section = document.getElementById("recentlyViewed")
  const grid = document.getElementById("recentlyViewedGrid")

  if (recentlyViewed.length === 0) {
    section.style.display = "none"
    return
  }

  section.style.display = "block"
  grid.innerHTML = ""

  recentlyViewed.forEach((item) => {
    const recentItem = document.createElement("div")
    recentItem.className = "recently-viewed-item"
    recentItem.onclick = () => openQuickView(item.id)
    recentItem.innerHTML = `
      <div class="recently-viewed-image">
        <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <h4>${item.name}</h4>
      <div class="recently-viewed-price">₹${item.price.toFixed(2)}</div>
    `
    grid.appendChild(recentItem)
  })
}

// Sort products function
function sortProducts(sortBy) {
  currentSort = sortBy
  let sortedProducts = [...products]

  switch (sortBy) {
    case "price-low":
      sortedProducts.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      sortedProducts.sort((a, b) => b.price - a.price)
      break
    case "name":
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "rating":
      sortedProducts.sort((a, b) => b.rating - a.rating)
      break
    default:
      // Keep original order
      break
  }

  // Apply current filter
  if (currentFilter !== "all") {
    sortedProducts = sortedProducts.filter((product) => product.category === currentFilter)
  }

  displayProducts(sortedProducts)
}

// Quick buy function
function quickBuy(productId) {
  addToCart(productId)
  toggleCart()
  showNotification("Added to cart! Proceed to checkout.")
}

// Flash sale timer
function startFlashSaleTimer() {
  const hoursEl = document.getElementById("hours")
  const minutesEl = document.getElementById("minutes")
  const secondsEl = document.getElementById("seconds")

  let hours = 12
  let minutes = 45
  let seconds = 30

  setInterval(() => {
    seconds--

    if (seconds < 0) {
      seconds = 59
      minutes--
    }

    if (minutes < 0) {
      minutes = 59
      hours--
    }

    if (hours < 0) {
      hours = 23
      minutes = 59
      seconds = 59
    }

    hoursEl.textContent = hours.toString().padStart(2, "0")
    minutesEl.textContent = minutes.toString().padStart(2, "0")
    secondsEl.textContent = seconds.toString().padStart(2, "0")
  }, 1000)
}

// Filter products by category
function filterProducts(category) {
  currentFilter = category

  // Update active filter button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  // Filter and display products
  const filteredProducts = category === "all" ? products : products.filter((product) => product.category === category)

  displayProducts(filteredProducts)
}

// Add product to cart
function addToCart(productId) {
  const product = products.find((p) => p.id === productId)
  const existingItem = cart.find((item) => item.id === productId)

  if (existingItem) {
    existingItem.quantity += 1
  } else {
    cart.push({
      ...product,
      quantity: 1,
    })
  }

  updateCartUI()
  showNotification("Product added to cart!")

  // Add animation to button
  const button = event.target
  button.style.transform = "scale(0.95)"
  setTimeout(() => {
    button.style.transform = "scale(1)"
  }, 150)
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId)
  updateCartUI()
  showNotification("Product removed from cart!")
}

// Update quantity
function updateQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId)
  if (item) {
    item.quantity += change
    if (item.quantity <= 0) {
      removeFromCart(productId)
    } else {
      updateCartUI()
    }
  }
}

// Update cart UI
function updateCartUI() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems
  cartCount.style.display = totalItems > 0 ? "flex" : "none"

  // Update cart items
  if (cart.length === 0) {
    cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-bag"></i>
                <p>Your cart is empty</p>
            </div>
        `
    cartFooter.style.display = "none"
  } else {
    cartItems.innerHTML = ""
    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"
      cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">
                </div>
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                    <div class="quantity-controls">
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                        <span class="quantity">${item.quantity}</span>
                        <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                        <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                </div>
            `
      cartItems.appendChild(cartItem)
    })
    cartFooter.style.display = "block"
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = total.toFixed(2)
}

// Toggle cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle("open")
  cartOverlay.classList.toggle("open")
  document.body.style.overflow = cartSidebar.classList.contains("open") ? "hidden" : "auto"
}

// Checkout function
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty!")
    return
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  alert(
    `Order Placed Successfully!\n\nItems: ${itemCount}\nTotal: ₹${total.toFixed(2)}\n\nThank you for shopping with Ansh Electronics!\nWe will contact you soon for delivery.`,
  )

  // Clear cart
  cart = []
  updateCartUI()
  toggleCart()
}

// Search functionality
function searchProducts() {
  const searchInput = document.getElementById("searchInput")
  const query = searchInput.value.toLowerCase().trim()

  if (query.length === 0) {
    displayProducts()
    return
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query),
  )

  displayProducts(filteredProducts)
}

// Add search on Enter key
document.getElementById("searchInput").addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    searchProducts()
  }
})

// Clear search when input is empty
document.getElementById("searchInput").addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    displayProducts()
  }
})

// Scroll to products section
function scrollToProducts() {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth",
  })
}

// Submit contact form
function submitForm(event) {
  event.preventDefault()
  const formData = new FormData(event.target)
  const name = formData.get("name")
  const email = formData.get("email")
  const phone = formData.get("phone")
  const message = formData.get("message")

  // Simulate form submission
  showNotification("Thank you for your message! We will contact you soon.")
  event.target.reset()
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div")
  notification.style.cssText = `
        position: fixed;
        top: 90px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 16px 20px;
        border-radius: 12px;
        box-shadow: 0 8px 32px rgba(16, 185, 129, 0.3);
        z-index: 1002;
        font-weight: 500;
        animation: slideIn 0.3s ease;
        max-width: 300px;
    `
  notification.textContent = message

  // Add animation keyframes
  if (!document.querySelector("#notification-styles")) {
    const style = document.createElement("style")
    style.id = "notification-styles"
    style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            @keyframes slideOut {
                from { transform: translateX(0); opacity: 1; }
                to { transform: translateX(100%); opacity: 0; }
            }
        `
    document.head.appendChild(style)
  }

  document.body.appendChild(notification)

  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.style.animation = "slideOut 0.3s ease"
    setTimeout(() => {
      if (notification.parentNode) {
        notification.parentNode.removeChild(notification)
      }
    }, 300)
  }, 3000)
}

// Mobile menu toggle
function toggleMobileMenu() {
  const nav = document.getElementById("nav")
  nav.classList.toggle("mobile-open")
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Close cart when clicking outside
document.addEventListener("click", (event) => {
  if (
    !cartSidebar.contains(event.target) &&
    !event.target.closest(".cart-icon") &&
    cartSidebar.classList.contains("open")
  ) {
    toggleCart()
  }
})

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in-up")
    }
  })
}, observerOptions)

// Observe elements for animation
document.addEventListener("DOMContentLoaded", () => {
  const animateElements = document.querySelectorAll(".product-card, .feature, .contact-card")
  animateElements.forEach((el) => observer.observe(el))
})
