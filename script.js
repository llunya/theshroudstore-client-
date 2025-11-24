/* 
   THE SHROUD STORE - MAIN SCRIPT 
   Handles Cart Logic & Trade Quote Redirects
*/

// 1. UPDATE SNIPCART BUTTON when quantity input changes
function updateSnipcartQty(input) {
    // Fix: Look for either .product-info (Grid Item) OR .featured-details (Featured Pack)
    const card = input.closest('.product-info, .featured-details');
    
    if (card) {
        const buyBtn = card.querySelector('.snipcart-add-item');
        if(buyBtn) {
            buyBtn.setAttribute('data-item-quantity', input.value);
        }
    }
}

// 2. REDIRECT FOR TRADE QUOTE
function requestTradeQuote(btn, productName) {
    // Fix: Look for either .product-info (Grid Item) OR .featured-details (Featured Pack)
    const card = btn.closest('.product-info, .featured-details');
    
    if (!card) {
        console.error("Error: Could not find product container.");
        return;
    }

    const qtyInput = card.querySelector('.qty-input');
    const qty = qtyInput ? qtyInput.value : 1;

    // Redirect to contact page with parameters
    const url = `contact.html?product=${encodeURIComponent(productName)}&qty=${qty}`;
    window.location.href = url;
}

// 3. PRE-FILL CONTACT FORM
document.addEventListener('DOMContentLoaded', function() {
    const msgBox = document.getElementById('message');
    
    if (msgBox) {
        const params = new URLSearchParams(window.location.search);
        const product = params.get('product');
        const qty = params.get('qty');

        if (product) {
            msgBox.value = `I am interested in a Trade Quote for:\nProduct: ${product}\nQuantity: ${qty}\n\nPlease provide pricing and availability.`;
        }
    }
});
