
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove "active" from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const category = button.getAttribute('data-category');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (category === 'all' || itemCategory === category) {
          item.classList.remove('hidden');
        } else {
          item.classList.add('hidden');
        }
      });
    });
  });



   document.getElementById("orderForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent form from submitting normally

    // Get values from inputs
    const name = document.getElementById("name").value;
    const food = document.getElementById("food").value;
    const quantity = document.getElementById("quantity").value;
    const phone = document.getElementById("phone").value;

    // Format the WhatsApp message
    const message = `Hello, my name is ${name}. I would like to order ${quantity} plate(s) of ${food}. My phone number is ${phone}.`;

    // Your WhatsApp number (remove first 0, use country code)
    const whatsappNumber = "2349030959063";

    // Encode the message for URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // Redirect to WhatsApp
    window.open(whatsappURL, "_blank");
  });

