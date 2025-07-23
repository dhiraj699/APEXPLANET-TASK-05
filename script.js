// Product data
const products = [
  // Wires Series
  {
    id: 1,
    name: "Copper Wire 2.5mm²",
    category: "wires",
    price: 2699.0,
    description: "Premium copper wire for residential wiring",
    image: "/copper_wire_2.5mm.jpg",
    brand: "Premium",
  },
  {
    id: 2,
    name: "Aluminum Wire 4mm²",
    category: "wires",
    price: 532.0,
    description: "Heavy-duty aluminum wire for industrial use",
    image: "aluminum_wire_4mm.jpeg",
    brand: "Industrial",
  },
  {
    id: 3,
    name: "Flexible Cable 1.5mm²",
    category: "wires",
    price: 1828.0,
    description: "Multi-core flexible cable for appliances",
    image: "flexible_cable_1.5mm.jpeg",
    brand: "Flexi",
  },
  // Vihan Switches Series
  {
    id: 4,
    name: "Vihan Classic Switch",
    category: "switches",
    price: 25.0,
    description: "Elegant single pole switch in white finish",
    image: "vihan_classic_switch.jpeg",
    brand: "Vihan",
  },
  {
    id: 5,
    name: "Vihan Modular Switch",
    category: "switches",
    price: 35.0,
    description: "Modern modular switch with LED indicator",
    image: "vihan_modular_switch.jpeg",
    brand: "Vihan",
  },
  {
    id: 6,
    name: "Vihan Dimmer Switch",
    category: "switches",
    price: 255.0,
    description: "Premium dimmer switch with touch control",
    image: "vihan_dimmer_switch.jpeg",
    brand: "Vihan",
  },
  {
    id: 7,
    name: "Vihan Bell Push Switch",
    category: "switches",
    price: 130.0,
    description: "Stylish bell push switch for doorbells",
    image: "vihan_bell_push_switch.jpeg",
    brand: "Vihan",
  },
  // Vihan Sockets Series
  {
    id: 8,
    name: "Vihan Universal Socket",
    category: "sockets",
    price: 40.0,
    description: "Multi-pin universal socket with safety shutter",
    image: "vihan_universal_socket.jpeg",
    brand: "Vihan",
  },
  {
    id: 9,
    name: "Vihan USB Socket",
    category: "sockets",
    price: 165.0,
    description: "Smart socket with dual USB charging ports",
    image: "vihan_usb_socket.jpeg",
    brand: "Vihan",
  },
  {
    id: 10,
    name: "Vihan Weatherproof Socket",
    category: "sockets",
    price: 75.0,
    description: "IP65 rated outdoor socket with cover",
    image: "vihan_weatherproof_socket.jpeg",
    brand: "Vihan",
  },
  {
    id: 11,
    name: "Vihan Combo Socket",
    category: "sockets",
    price: 150.0,
    description: "6A + 16A combination socket outlet",
    image: "vihan_combo_socket.jpeg",
    brand: "Vihan",
  },
  // Vihan Plates Series
  {
    id: 12,
    name: "Vihan Classic White Plate",
    category: "plates",
    price: 115.0,
    description: "Premium white finish switch plate",
    image: "vihan_classic_plate.jpeg",
    brand: "Vihan",
  },
  {
    id: 13,
    name: "Vihan Golden Plate",
    category: "plates",
    price: 125.0,
    description: "Elegant golden finish decorative plate",
    image: "vihan_golden_plate.jpeg",
    brand: "Vihan",
  },
  {
    id: 14,
    name: "Vihan Silver Plate",
    category: "plates",
    price: 120.0,
    description: "Modern silver finish switch plate",
    image: "vihan_silver_plate.jpeg",
    brand: "Vihan",
  },
  {
    id: 15,
    name: "Vihan Wood Finish Plate",
    category: "plates",
    price: 130.0,
    description: "Premium wood texture finish plate",
    image: "vihan_wood_plate.jpeg",
    brand: "Vihan",
  },
  {
    id: 16,
    name: "Vihan Glass Plate",
    category: "plates",
    price: 135.0,
    description: "Tempered glass plate with crystal finish",
    image: "vihan_glass_plate.jpeg",
    brand: "Vihan",
  },
  // Accessories Series
  {
    id: 17,
    name: "Junction Box Set",
    category: "accessories",
    price: 18.0,
    description: "Complete junction box with screws",
    image: "junction_box_set.jpeg",
    brand: "Standard",
  },
  {
    id: 18,
    name: "Cable Management Kit",
    category: "accessories",
    price: 12.0,
    description: "Professional cable ties and clips set",
    image: "cable_management_kit.jpeg",
    brand: "Pro",
  },
  {
    id: 19,
    name: "Electrical Tape Roll",
    category: "accessories",
    price: 8.0,
    description: "High-grade electrical insulation tape",
    image: "electrical_tape_roll.jpeg",
    brand: "Insul",
  },
  {
    id: 20,
    name: "Wire Nuts Pack",
    category: "accessories",
    price: 15.0,
    description: "Assorted wire nuts for connections",
    image: "wire_nuts_pack.jpeg",
    brand: "Connect",
  },
]

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

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  displayProducts()
  updateCartUI()

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

// Display products
function displayProducts(productsToShow = products) {
  productsGrid.innerHTML = ""

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card fade-in-up"
    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <span class="product-brand">${product.brand}</span>
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <div class="product-footer">
                    <div class="product-price">₹${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `
    productsGrid.appendChild(productCard)
  })
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
