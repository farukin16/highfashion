// Product Section
const button = document.querySelectorAll(".slide button");
const slider = document.querySelector(".slider");

button.forEach(button => {
    button.addEventListener("click", () =>{
 const index = button.getAttribute("data-index");
 slider.style.transform = `translateX(-${index *100}%)`;
    });
   
});

// Cart functionality
let cartCount = 0;
const cartCountElement = document.getElementById('cart-count');

// Load cart and set count
const cart = JSON.parse(localStorage.getItem('cart')) || [];
cartCount = cart.length;
cartCountElement.textContent = cartCount;

// Add event listeners to all add-to-cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        cartCountElement.textContent = cartCount;
        // Add item to cart array
        const item = {
            name: button.getAttribute('data-name'),
            price: button.getAttribute('data-price'),
            img: button.getAttribute('data-img')
        };
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});

// Hero Section Image Animation
   //  let image = document.getElementById("animate");
   //        let animate = [{src: "hgh5.png", width: "90px"}, {src: "hgh2.png"}
   //           , {src: "3.png", width: "90px"}]
   //        let index = 0
   //        function slideImage(){
   //           index = (index + 1)% animate.length
   //           console.log(slider)
   //           document.getElementById("animate").src = animate[index].src;
   //           console.log(animate[0].src)

   //       }

   //         setInterval(slideImage, 4000)

// About text
 const btn = document.getElementById("readBtn");
      const moreText = document.querySelector(".more");
      const dots = document.querySelector(".dots");

      btn.addEventListener("click", function (){
         if(moreText.style.display === "none"){
            moreText.style.display = "inline";
            dots.style.display = "none";
            btn.textContent = "read less";
         } else{
            moreText.style.display = "none";
            dots.style.display = "inline";
            btn.textContent = "read more";
         }
      });
   
// HAMBURGER
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
     
      // Prevent body scroll when menu is open
      if (mobileMenu.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'visible';
      }
    });

    // Close menu when clicking on a link
    document.querySelectorAll('.mobile-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
      });
    });

    // Close menu when pressing Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'visible';
      }
    });