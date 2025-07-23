// Updated product data with working image URLs
const products = [
  // Wires Series
  {
    id: 1,
    name: "Copper Wire 2.5mm²",
    category: "wires",
    price: 2699.0,
    description: "Premium copper wire for residential wiring",
    image: "copper_wire_2.5mm.jpg",
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
  {
    id: 17,
    name: "Blue Fairon Vihan Modular Switch Plate",
    category: "plates",
    price: 152.0,
    description: "Tempered modular switch plate with crystal finish",
    image: "blue-fairon-vihan-modular-switch-plate.jpg",
    brand: "Vihan",
  },
  {
    id: 18,
    name: "FAIRWOOD MODULAR PLATES |Vihan Modular",
    category: "plates",
    price: 138.0,
    description: "Tempered fairwood plate with crystal finish",
    image: "vihan_fairwood_plate.jpeg",
    brand: "Vihan",
  },
  {
    id: 19,
    name: "Vihan 3M Electric Modular Switch Board",
    category: "plates",
    price: 167.0,
    description: "Tempered modular switch board plate with crystal finish",
    image: "vihan_3m_electric_modular_switch_board.webp",
    brand: "Vihan",
  },

  // Accessories Series
  {
    id: 20,
    name: "Junction Box Set",
    category: "accessories",
    price: 18.0,
    description: "Complete junction box with screws",
    image: "junction_box_set.jpeg",
    brand: "Standard",
  },
  {
    id: 21,
    name: "Cable Management Kit",
    category: "accessories",
    price: 12.0,
    description: "Professional cable ties and clips set",
    image: "cable_management_kit.jpeg",
    brand: "Pro",
  },
  {
    id: 22,
    name: "Electrical Tape Roll",
    category: "accessories",
    price: 8.0,
    description: "High-grade electrical insulation tape",
    image: "electrical_tape_roll.jpeg",
    brand: "Insul",
  },
  {
    id: 23,
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

// DOM elements
const cartSidebar = document.getElementById("cartSidebar")
const cartOverlay = document.getElementById("cartOverlay")
const cartItems = document.getElementById("cartItems")
const cartCount = document.getElementById("cartCount")
const cartTotal = document.getElementById("cartTotal")

// Initialize the website
document.addEventListener("DOMContentLoaded", () => {
  displayProductsBySeries()
  updateCartUI()
})

// Display products by series
function displayProductsBySeries() {
  const wireProducts = products.filter((p) => p.category === "wires")
  const switchProducts = products.filter((p) => p.category === "switches")
  const socketProducts = products.filter((p) => p.category === "sockets")
  const plateProducts = products.filter((p) => p.category === "plates")
  const accessoryProducts = products.filter((p) => p.category === "accessories")

  displaySeriesProducts("wireProducts", wireProducts)
  displaySeriesProducts("switchProducts", switchProducts)
  displaySeriesProducts("socketProducts", socketProducts)
  displaySeriesProducts("plateProducts", plateProducts)
  displaySeriesProducts("accessoryProducts", accessoryProducts)
}

function displaySeriesProducts(containerId, productsToShow) {
  const container = document.getElementById(containerId)
  if (!container) return

  container.innerHTML = ""

  productsToShow.forEach((product) => {
    const productCard = document.createElement("div")
    productCard.className = "product-card"
    productCard.setAttribute("data-category", product.category)

    productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; opacity: 1; display: block;">
            </div>
            <h3>${product.name}</h3>
            <p class="product-brand">${product.brand}</p>
            <p>${product.description}</p>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `

    container.appendChild(productCard)
  })
}

// Filter products by category
function filterProducts(category) {
  // Update active filter button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  // Show/hide product series based on category
  const allSeries = document.querySelectorAll(".product-series")

  allSeries.forEach((series) => {
    if (category === "all") {
      series.style.display = "block"
    } else {
      const seriesProducts = series.querySelectorAll(`[data-category="${category}"]`)
      if (seriesProducts.length > 0) {
        series.style.display = "block"
      } else {
        series.style.display = "none"
      }
    }
  })
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

// Update cart UI
function updateCartUI() {
  // Update cart count
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems

  // Update cart items
  cartItems.innerHTML = ""

  if (cart.length === 0) {
    cartItems.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">Your cart is empty</p>'
  } else {
    cart.forEach((item) => {
      const cartItem = document.createElement("div")
      cartItem.className = "cart-item"

      cartItem.innerHTML = `
                <div class="cart-item-info">
                    <h4>${item.name}</h4>
                    <p>Quantity: ${item.quantity}</p>
                </div>
                <div>
                    <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                    <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
                </div>
            `

      cartItems.appendChild(cartItem)
    })
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  cartTotal.textContent = total.toFixed(2)
}

// Toggle cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle("open")
  cartOverlay.classList.toggle("open")
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
    displayProductsBySeries()
    return
  }

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(query) ||
      product.description.toLowerCase().includes(query) ||
      product.brand.toLowerCase().includes(query) ||
      product.category.toLowerCase().includes(query),
  )

  // Hide all series and show search results
  const allSeries = document.querySelectorAll(".product-series")
  allSeries.forEach((series) => {
    series.style.display = "none"
  })

  // Create search results section
  let searchResultsSection = document.getElementById("searchResults")
  if (!searchResultsSection) {
    searchResultsSection = document.createElement("div")
    searchResultsSection.id = "searchResults"
    searchResultsSection.className = "product-series"
    searchResultsSection.innerHTML = `
            <div class="series-header">
                <h3><i class="fas fa-search"></i> Search Results</h3>
                <p>Found ${filteredProducts.length} products for "${query}"</p>
            </div>
            <div class="series-products" id="searchProductsContainer">
            </div>
        `
    document.querySelector(".products .container").appendChild(searchResultsSection)
  }

  const searchContainer = document.getElementById("searchProductsContainer")
  searchContainer.innerHTML = ""

  if (filteredProducts.length === 0) {
    searchContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No products found</p>'
  } else {
    filteredProducts.forEach((product) => {
      const productCard = document.createElement("div")
      productCard.className = "product-card"

      productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px; opacity: 1; display: block;">
            </div>
            <h3>${product.name}</h3>
            <p class="product-brand">${product.brand}</p>
            <p>${product.description}</p>
            <div class="product-price">₹${product.price.toFixed(2)}</div>
            <button class="add-to-cart" onclick="addToCart(${product.id})">
                Add to Cart
            </button>
        `

      searchContainer.appendChild(productCard)
    })
  }

  searchResultsSection.style.display = "block"
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
    const searchResults = document.getElementById("searchResults")
    if (searchResults) {
      searchResults.style.display = "none"
    }
    displayProductsBySeries()

    // Show all series
    const allSeries = document.querySelectorAll(".product-series:not(#searchResults)")
    allSeries.forEach((series) => {
      series.style.display = "block"
    })
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
        top: 100px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 1002;
        animation: slideIn 0.3s ease;
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

// Handle mobile menu (if needed)
function toggleMobileMenu() {
  const nav = document.querySelector(".nav")
  nav.classList.toggle("mobile-open")
}

// Add loading states for better UX
function showLoading(element) {
  const originalContent = element.innerHTML
  element.innerHTML = '<span class="loading"></span>'
  element.disabled = true

  return function hideLoading() {
    element.innerHTML = originalContent
    element.disabled = false
  }
}

// Performance optimization: Lazy loading for images
function lazyLoadImages() {
  const images = document.querySelectorAll("img[data-src]")
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        img.classList.remove("lazy")
        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => imageObserver.observe(img))
}

// Initialize lazy loading
document.addEventListener("DOMContentLoaded", lazyLoadImages)

// Add to cart animation
function animateAddToCart(button) {
  button.style.transform = "scale(0.95)"
  setTimeout(() => {
    button.style.transform = "scale(1)"
  }, 150)
}

// Update add to cart function to include animation
const originalAddToCart = addToCart
addToCart = (productId) => {
  const button = event.target
  animateAddToCart(button)
  originalAddToCart(productId)
}

// Bundle Builder functionality
let currentBundle = []
const bundleDiscount = 0.25 // 25% discount

function addToBundle(category) {
  const categoryProducts = products.filter((p) => p.category === category)
  if (categoryProducts.length > 0) {
    const randomProduct = categoryProducts[Math.floor(Math.random() * categoryProducts.length)]
    currentBundle.push(randomProduct)
    updateBundleDisplay()
    showNotification(`${randomProduct.name} added to bundle!`)
  }
}

function updateBundleDisplay() {
  const bundleItems = document.getElementById("bundleItems")
  const originalPrice = document.getElementById("originalPrice")
  const bundlePrice = document.getElementById("bundlePrice")
  const savings = document.getElementById("savings")

  if (currentBundle.length === 0) {
    bundleItems.innerHTML = "<p>Start adding items to your bundle</p>"
    originalPrice.textContent = "0"
    bundlePrice.textContent = "0"
    savings.textContent = "0"
    return
  }

  bundleItems.innerHTML = ""
  let totalOriginal = 0

  currentBundle.forEach((item, index) => {
    totalOriginal += item.price
    const bundleItem = document.createElement("div")
    bundleItem.className = "bundle-item"
    bundleItem.innerHTML = `
            <span>${item.name}</span>
            <span>₹${item.price.toFixed(2)}</span>
            <button onclick="removeFromBundle(${index})" style="background: #e74c3c; color: white; border: none; border-radius: 3px; padding: 2px 6px; margin-left: 10px;">×</button>
        `
    bundleItems.appendChild(bundleItem)
  })

  const discountedTotal = totalOriginal * (1 - bundleDiscount)
  const savedAmount = totalOriginal - discountedTotal

  originalPrice.textContent = totalOriginal.toFixed(2)
  bundlePrice.textContent = discountedTotal.toFixed(2)
  savings.textContent = savedAmount.toFixed(2)
}

function removeFromBundle(index) {
  currentBundle.splice(index, 1)
  updateBundleDisplay()
}

function checkoutBundle() {
  if (currentBundle.length === 0) {
    alert("Please add items to your bundle first!")
    return
  }

  currentBundle.forEach((item) => {
    addToCart(item.id)
  })

  currentBundle = []
  updateBundleDisplay()
  showNotification("Bundle added to cart successfully!")
}

// Room Planner functionality
const roomRecommendations = {
  living: [
    { name: "Vihan Dimmer Switch", reason: "Perfect for ambient lighting control" },
    { name: "Vihan USB Socket", reason: "Convenient charging for devices" },
    { name: "Vihan Glass Plate", reason: "Elegant finish for modern decor" },
  ],
  bedroom: [
    { name: "Vihan Modular Switch", reason: "Quiet operation for peaceful sleep" },
    { name: "Vihan White Plate", reason: "Clean, minimalist appearance" },
    { name: "Vihan Universal Socket", reason: "Versatile power options" },
  ],
  kitchen: [
    { name: "Vihan Weatherproof Socket", reason: "Moisture resistant for kitchen use" },
    { name: "Vihan Silver Plate", reason: "Easy to clean and maintain" },
    { name: "Vihan Combo Socket", reason: "Multiple appliance support" },
  ],
  bathroom: [
    { name: "Vihan Weatherproof Socket", reason: "IP65 rated for wet areas" },
    { name: "Vihan Classic Switch", reason: "Reliable and safe operation" },
    { name: "Vihan White Plate", reason: "Hygienic and easy to clean" },
  ],
}

function selectRoom(roomType) {
  // Update active button
  document.querySelectorAll(".room-btn").forEach((btn) => {
    btn.classList.remove("active")
  })
  event.target.classList.add("active")

  // Update recommendations
  const recommendationsDiv = document.getElementById("roomRecommendations")
  const recommendations = roomRecommendations[roomType]

  recommendationsDiv.innerHTML = `
        <h4>Recommended for ${roomType.charAt(0).toUpperCase() + roomType.slice(1)}:</h4>
        ${recommendations
          .map(
            (rec) => `
            <div class="recommendation-item" style="margin-bottom: 1rem; padding: 1rem; background: #f8f9fa; border-radius: 8px;">
                <strong>${rec.name}</strong>
                <p style="margin: 0.5rem 0 0 0; color: #666;">${rec.reason}</p>
            </div>
        `,
          )
          .join("")}
    `

  // Update room preview
  const roomPreview = document.getElementById("roomPreview")
  roomPreview.innerHTML = `
        <img src="/placeholder.svg?height=300&width=400&text=${roomType.charAt(0).toUpperCase() + roomType.slice(1)}+Room+Preview" alt="${roomType} Preview">
        <p style="margin-top: 1rem; color: #666;">Visualizing ${roomType} electrical setup</p>
    `
}

// Unique feature functions
function openVirtualConfigurator() {
  showModal(
    "3D Room Visualizer",
    `
        <div style="text-align: center; padding: 2rem;">
            <i class="fas fa-cube" style="font-size: 4rem; color: #3498db; margin-bottom: 1rem;"></i>
            <h3>3D Room Visualizer</h3>
            <p>Experience our products in your space with augmented reality!</p>
            <div style="margin: 2rem 0;">
                <img src="/placeholder.svg?height=200&width=300&text=AR+Room+View" alt="AR Preview" style="border-radius: 10px;">
            </div>
            <p><strong>Features:</strong></p>
            <ul style="text-align: left; max-width: 300px; margin: 1rem auto;">
                <li>Real-time 3D visualization</li>
                <li>Try different color combinations</li>
                <li>See actual product dimensions</li>
                <li>Share with family for approval</li>
            </ul>
            <button onclick="closeModal()" style="background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-top: 1rem;">Try AR View</button>
        </div>
    `,
  )
}

function openCompatibilityChecker() {
  showModal(
    "Compatibility Checker",
    `
        <div style="padding: 2rem;">
            <h3>Product Compatibility Checker</h3>
            <p>Ensure all your electrical components work perfectly together</p>
            <div style="margin: 2rem 0;">
                <label>Select your main switch:</label>
                <select style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                    <option>Vihan Modular Switch</option>
                    <option>Vihan Classic Switch</option>
                    <option>Vihan Dimmer Switch</option>
                </select>
                
                <label>Select your socket:</label>
                <select style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                    <option>Vihan Universal Socket</option>
                    <option>Vihan USB Socket</option>
                    <option>Vihan Combo Socket</option>
                </select>
                
                <label>Select your plate:</label>
                <select style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                    <option>Vihan Glass Plate</option>
                    <option>Vihan Silver Plate</option>
                    <option>Vihan Wood Finish Plate</option>
                </select>
            </div>
            <div style="background: #d4edda; padding: 1rem; border-radius: 5px; color: #155724;">
                <i class="fas fa-check-circle"></i> Perfect Match! These products are fully compatible.
            </div>
            <button onclick="closeModal()" style="background: #27ae60; color: white; padding: 10px 20px; border: none; border-radius: 5px; margin-top: 1rem;">Add Compatible Set to Cart</button>
        </div>
    `,
  )
}

function openEnergyCalculator() {
  showModal(
    "Energy Savings Calculator",
    `
        <div style="padding: 2rem;">
            <h3>Calculate Your Energy Savings</h3>
            <p>See how much you can save with our energy-efficient products</p>
            <div style="margin: 2rem 0;">
                <label>Current monthly electricity bill (₹):</label>
                <input type="number" id="currentBill" placeholder="Enter amount" style="width: 100%; padding: 10px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                
                <label>Number of switches/sockets:</label>
                <input type="number" id="deviceCount" placeholder="Enter count" style="width: 100%; padding: 10px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                
                <button onclick="calculateSavings()" style="background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 5px; width: 100%; margin: 1rem 0;">Calculate Savings</button>
                
                <div id="savingsResult" style="display: none; background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                    <!-- Results will appear here -->
                </div>
            </div>
        </div>
    `,
  )
}

function calculateSavings() {
  const currentBill = document.getElementById("currentBill").value
  const deviceCount = document.getElementById("deviceCount").value
  const savingsResult = document.getElementById("savingsResult")

  if (currentBill && deviceCount) {
    const monthlySavings = (currentBill * 0.15).toFixed(2) // 15% average savings
    const yearlySavings = (monthlySavings * 12).toFixed(2)

    savingsResult.innerHTML = `
            <h4>Your Potential Savings:</h4>
            <p><strong>Monthly Savings:</strong> ₹${monthlySavings}</p>
            <p><strong>Yearly Savings:</strong> ₹${yearlySavings}</p>
            <p><strong>ROI Period:</strong> 18 months</p>
            <div style="background: #d4edda; padding: 0.5rem; border-radius: 3px; margin-top: 1rem; color: #155724;">
                <i class="fas fa-leaf"></i> You'll also reduce CO₂ emissions by 120kg annually!
            </div>
        `
    savingsResult.style.display = "block"
  }
}

function openInstallationBooking() {
  showModal(
    "Expert Installation Service",
    `
        <div style="padding: 2rem;">
            <h3>Book Professional Installation</h3>
            <p>Get your products installed by certified electricians</p>
            <div style="margin: 2rem 0;">
                <label>Select service type:</label>
                <select style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                    <option>Complete Home Wiring</option>
                    <option>Switch & Socket Installation</option>
                    <option>Smart Home Setup</option>
                    <option>Electrical Maintenance</option>
                </select>
                
                <label>Preferred date:</label>
                <input type="date" style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                
                <label>Contact number:</label>
                <input type="tel" placeholder="Enter your phone number" style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                
                <div style="background: #e3f2fd; padding: 1rem; border-radius: 5px; margin: 1rem 0;">
                    <h4>Service Includes:</h4>
                    <ul>
                        <li>Free site inspection</li>
                        <li>Professional installation</li>
                        <li>1-year service warranty</li>
                        <li>Safety certification</li>
                    </ul>
                </div>
            </div>
            <button onclick="bookInstallation()" style="background: #ff6b6b; color: white; padding: 12px 25px; border: none; border-radius: 5px; width: 100%;">Book Installation (₹500 advance)</button>
        </div>
    `,
  )
}

function bookInstallation() {
  closeModal()
  showNotification("Installation booked successfully! Our team will contact you within 2 hours.")
}

function startConsultation() {
  showModal(
    "Expert Consultation",
    `
        <div style="text-align: center; padding: 2rem;">
            <div style="background: #27ae60; color: white; padding: 1rem; border-radius: 10px; margin-bottom: 2rem;">
                <i class="fas fa-video" style="font-size: 2rem; margin-bottom: 0.5rem;"></i>
                <h3>Connecting to Expert...</h3>
                <p>Ansh Kumar will join the call shortly</p>
            </div>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <p><strong>Today's Topics:</strong></p>
                <ul style="text-align: left;">
                    <li>Smart home automation setup</li>
                    <li>Energy-efficient solutions</li>
                    <li>Safety compliance guidelines</li>
                    <li>Custom electrical planning</li>
                </ul>
            </div>
            <button onclick="closeModal()" style="background: #e74c3c; color: white; padding: 10px 20px; border: none; border-radius: 5px;">End Consultation</button>
        </div>
    `,
  )
}

// Modal functionality
function showModal(title, content) {
  const modal = document.createElement("div")
  modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.8);
        z-index: 2000;
        display: flex;
        align-items: center;
        justify-content: center;
    `

  modal.innerHTML = `
        <div style="background: white; border-radius: 15px; max-width: 500px; width: 90%; max-height: 80vh; overflow-y: auto;">
            <div style="padding: 1rem; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center;">
                <h2 style="margin: 0;">${title}</h2>
                <button onclick="closeModal()" style="background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
            </div>
            <div>${content}</div>
        </div>
    `

  modal.id = "currentModal"
  document.body.appendChild(modal)
}

function closeModal() {
  const modal = document.getElementById("currentModal")
  if (modal) {
    modal.remove()
  }
}

// Initialize room planner with default selection
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    if (document.querySelector(".room-btn")) {
      selectRoom("living")
    }
  }, 1000)
})

// Tutorial and resource functions
function openTutorials() {
  showModal(
    "Installation Tutorials",
    `
        <div style="padding: 2rem;">
            <h3>Video Tutorials</h3>
            <div style="display: grid; gap: 1rem;">
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem;">
                    <h4>Switch Installation Basics</h4>
                    <p>Learn how to safely install switches and sockets</p>
                    <button style="background: #3498db; color: white; padding: 5px 15px; border: none; border-radius: 3px;">Watch (5:30)</button>
                </div>
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem;">
                    <h4>Smart Home Wiring</h4>
                    <p>Complete guide to smart home electrical setup</p>
                    <button style="background: #3498db; color: white; padding: 5px 15px; border: none; border-radius: 3px;">Watch (12:45)</button>
                </div>
                <div style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem;">
                    <h4>Safety Guidelines</h4>
                    <p>Essential safety practices for electrical work</p>
                    <button style="background: #e74c3c; color: white; padding: 5px 15px; border: none; border-radius: 3px;">Watch (8:20)</button>
                </div>
            </div>
        </div>
    `,
  )
}

function openSafetyGuide() {
  showModal(
    "Electrical Safety Guidelines",
    `
        <div style="padding: 2rem;">
            <h3>Safety First!</h3>
            <div style="background: #fff3cd; padding: 1rem; border-radius: 5px; margin-bottom: 1rem; border-left: 4px solid #ffc107;">
                <strong>⚠️ Always turn off power before working with electrical components</strong>
            </div>
            <ul style="line-height: 1.8;">
                <li>Use proper insulated tools</li>
                <li>Check voltage with a tester</li>
                <li>Never work in wet conditions</li>
                <li>Follow local electrical codes</li>
                <li>When in doubt, consult a professional</li>
            </ul>
            <div style="background: #d4edda; padding: 1rem; border-radius: 5px; margin-top: 1rem; color: #155724;">
                <strong>✅ Remember:</strong> Safety is more important than saving time or money!
            </div>
        </div>
    `,
  )
}

function openLoadCalculator() {
  showModal(
    "Electrical Load Calculator",
    `
        <div style="padding: 2rem;">
            <h3>Calculate Electrical Load</h3>
            <p>Determine the right capacity for your electrical setup</p>
            <div style="margin: 1rem 0;">
                <label>Room size (sq ft):</label>
                <input type="number" id="roomSize" style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                
                <label>Number of lights:</label>
                <input type="number" id="lightCount" style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                
                <label>Number of appliances:</label>
                <input type="number" id="applianceCount" style="width: 100%; padding: 8px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                
                <button onclick="calculateLoad()" style="background: #27ae60; color: white; padding: 10px 20px; border: none; border-radius: 5px; width: 100%; margin: 1rem 0;">Calculate Load</button>
                
                <div id="loadResult" style="display: none; background: #f8f9fa; padding: 1rem; border-radius: 5px; margin-top: 1rem;">
                    <!-- Results will appear here -->
                </div>
            </div>
        </div>
    `,
  )
}

function calculateLoad() {
  const roomSize = document.getElementById("roomSize").value
  const lightCount = document.getElementById("lightCount").value
  const applianceCount = document.getElementById("applianceCount").value
  const loadResult = document.getElementById("loadResult")

  if (roomSize && lightCount && applianceCount) {
    const totalLoad = roomSize * 2 + lightCount * 60 + applianceCount * 500 // Simplified calculation
    const recommendedCapacity = Math.ceil(totalLoad / 1000) * 1000

    loadResult.innerHTML = `
            <h4>Load Calculation Results:</h4>
            <p><strong>Estimated Load:</strong> ${totalLoad}W</p>
            <p><strong>Recommended Capacity:</strong> ${recommendedCapacity}W</p>
            <p><strong>Suggested Circuit Breaker:</strong> ${Math.ceil(totalLoad / 230)}A</p>
            <div style="background: #e3f2fd; padding: 0.5rem; border-radius: 3px; margin-top: 1rem;">
                💡 <strong>Tip:</strong> Always add 20% safety margin to your calculations
            </div>
        `
    loadResult.style.display = "block"
  }
}

function openWarrantyTracker() {
  showModal(
    "Warranty Tracker",
    `
        <div style="padding: 2rem;">
            <h3>Track Your Product Warranties</h3>
            <p>Never miss a warranty expiration again!</p>
            <div style="margin: 2rem 0;">
                <input type="text" placeholder="Enter product serial number" style="width: 100%; padding: 10px; margin: 0.5rem 0; border: 1px solid #ddd; border-radius: 4px;">
                <button style="background: #3498db; color: white; padding: 10px 20px; border: none; border-radius: 5px; width: 100%; margin: 0.5rem 0;">Add Product</button>
            </div>
            <div style="background: #f8f9fa; padding: 1rem; border-radius: 8px;">
                <h4>Your Registered Products:</h4>
                <div style="border-bottom: 1px solid #ddd; padding: 0.5rem 0;">
                    <strong>Vihan Modular Switch</strong><br>
                    <small>Warranty expires: Dec 2025 | Status: ✅ Active</small>
                </div>
                <div style="border-bottom: 1px solid #ddd; padding: 0.5rem 0;">
                    <strong>Vihan USB Socket</strong><br>
                    <small>Warranty expires: Jan 2026 | Status: ✅ Active</small>
                </div>
            </div>
            <div style="background: #d4edda; padding: 1rem; border-radius: 5px; margin-top: 1rem; color: #155724;">
                <i class="fas fa-bell"></i> You'll receive reminders 30 days before warranty expiration
            </div>
        </div>
    `,
  )
}
