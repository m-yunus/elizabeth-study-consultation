/* ===================================================================
    
    Author          : Valid Theme
    Template Name   : Healdi - Medical & Health Template
    Version         : 1.0
    
* ================================================================= */

(function($) {
    "use strict";

    $(document).on('ready', function() {


        /* ==================================================
            # Wow Init
         ===============================================*/
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
        

        /* ==================================================
            # Tooltip Init
        ===============================================*/
        $('[data-toggle="tooltip"]').tooltip(); 
        


        /* ==================================================
            # Smooth Scroll
         ===============================================*/
        $("body").scrollspy({
            target: ".navbar-collapse",
            offset: 200
        });
        $('a.smooth-menu').on('click', function(event) {
            var $anchor = $(this);
            var headerH = '75';
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


        /* ==================================================
            # Banner Animation
        ===============================================*/
        function doAnimations(elems) {
            //Cache the animationend event in a variable
            var animEndEv = 'webkitAnimationEnd animationend';
            elems.each(function() {
                var $this = $(this),
                    $animationType = $this.data('animation');
                $this.addClass($animationType).one(animEndEv, function() {
                    $this.removeClass($animationType);
                });
            });
        }

        //Variables on page load
        var $immortalCarousel = $('.animate_text'),
            $firstAnimatingElems = $immortalCarousel.find('.item:first').find("[data-animation ^= 'animated']");
        //Initialize carousel
        $immortalCarousel.carousel();
        //Animate captions in first slide on page load
        doAnimations($firstAnimatingElems);
        //Other slides to be animated on carousel slide event
        $immortalCarousel.on('slide.bs.carousel', function(e) {
            var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
            doAnimations($animatingElems);
        });

        /* ==================================================
            # imagesLoaded active
        ===============================================*/
        $('#portfolio-grid,.blog-masonry').imagesLoaded(function() {

            /* Filter menu */
            $('.mix-item-menu').on('click', 'button', function() {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });

            /* filter menu active class  */
            $('.mix-item-menu button').on('click', function(event) {
                $(this).siblings('.active').removeClass('active');
                $(this).addClass('active');
                event.preventDefault();
            });

            /* Filter active */
            var $grid = $('#portfolio-grid').isotope({
                itemSelector: '.pf-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.pf-item',
                }
            });

            /* Filter active */
            $('.blog-masonry').isotope({
                itemSelector: '.blog-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.blog-item',
                }
            });

        });


         /* ==================================================
            # Fun Factor Init
        ===============================================*/
        $('.timer').countTo();
        $('.fun-fact').appear(function() {
            $('.timer').countTo();
        }, {
            accY: -100
        });


        /* ==================================================
            # Magnific popup init
         ===============================================*/
        $(".popup-link").magnificPopup({
            type: 'image',
            // other options
        });

        $(".popup-gallery").magnificPopup({
            type: 'image',
            gallery: {
                enabled: true
            },
            // other options
        });

        $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        $('.magnific-mix-gallery').each(function() {
            var $container = $(this);
            var $imageLinks = $container.find('.item');

            var items = [];
            $imageLinks.each(function() {
                var $item = $(this);
                var type = 'image';
                if ($item.hasClass('magnific-iframe')) {
                    type = 'iframe';
                }
                var magItem = {
                    src: $item.attr('href'),
                    type: type
                };
                magItem.title = $item.data('title');
                items.push(magItem);
            });

            $imageLinks.magnificPopup({
                mainClass: 'mfp-fade',
                items: items,
                gallery: {
                    enabled: true,
                    tPrev: $(this).data('prev-text'),
                    tNext: $(this).data('next-text')
                },
                type: 'image',
                callbacks: {
                    beforeOpen: function() {
                        var index = $imageLinks.index(this.st.el);
                        if (-1 !== index) {
                            this.goTo(index);
                        }
                    }
                }
            });
        });


        /* ==================================================
            # Doctor Carousel
         ===============================================*/
        $('.doctors-carousel').owlCarousel({
            loop: false,
            nav: false,
            margin:30,
            dots: true,
            autoplay: true,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });


        /* ==================================================
            # Tips Carousel
         ===============================================*/
        $('.tips-carousel').owlCarousel({
            loop: false,
            nav: false,
            margin:30,
            dots: true,
            autoplay: true,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ]
        });


        /* ==================================================
            # Department Carousel
         ===============================================*/
        $('.department-carousel').owlCarousel({
            loop: false,
            margin: 30,
            nav: false,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            dots: true,
            autoplay: false,
            responsive: {
                0: {
                    items: 1
                },
                800: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });


        /* ==================================================
            # Testimonials Carousel
         ===============================================*/
        $('.testimonials-carousel').owlCarousel({
            loop: true,
            nav: false,
            margin:30,
            dots: true,
            autoplay: false,
            items: 1,
            navText: [
                "<i class='fa fa-angle-left'></i>",
                "<i class='fa fa-angle-right'></i>"
            ],
            responsive: {
                1000: {
                    stagePadding: 100,
                    items: 2,
                }
            }
        });


        /* ==================================================
            Preloader Init
         ===============================================*/
        $(window).on('load', function() {
            // Animate loader off screen
            $(".se-pre-con").fadeOut("slow");;
        });


        /* ==================================================
            Nice Select Init
         ===============================================*/
        $('select').niceSelect();



        /* ==================================================
            Contact Form Validations
        ================================================== */
        $('.contact-form').each(function() {
            var formInstance = $(this);
            formInstance.submit(function() {

                var action = $(this).attr('action');

                $("#message").slideUp(750, function() {
                    $('#message').hide();

                    $('#submit')
                        .after('<img src="assets/img/ajax-loader.gif" class="loader" />')
                        .attr('disabled', 'disabled');

                    $.post(action, {
                            name: $('#name').val(),
                            email: $('#email').val(),
                            phone: $('#phone').val(),
                            comments: $('#comments').val()
                        },
                        function(data) {
                            document.getElementById('message').innerHTML = data;
                            $('#message').slideDown('slow');
                            $('.contact-form img.loader').fadeOut('slow', function() {
                                $(this).remove()
                            });
                            $('#submit').removeAttr('disabled');
                        }
                    );
                });
                return false;
            });
        });

    }); // end document ready function
})(jQuery); // End jQuery

const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
  accordionItemHeader.addEventListener("click", event => {
    console.log(event);
    // Uncomment in case you only want to allow for the display of only one collapsed item at a time!
    
    const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active");
    if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) {
      currentlyActiveAccordionItemHeader.classList.toggle("active");
      currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    }

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }
    
  });
});


const items = document.querySelectorAll('.item');
const images = document.querySelectorAll('.img-anim');
const thumb=document.querySelectorAll(".coose-img");
function handleScroll() {
    items.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight * 0.75) {
            item.classList.add('show');
        }
    });
    images.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight * 0.75) {
            item.classList.add('show');
        }
    });
    thumb.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (itemTop < windowHeight * 0.75) {
            item.classList.add('show');
        }
    });
}

window.addEventListener('scroll', handleScroll);






// circle animating mission vission

function closeForm() {
    $('.form-popup-bg').removeClass('is-visible');
  }
  
  $(document).ready(function($) {
    
    /* Contact Form Interactions */
    $('#btnOpenForm').on('click', function(event) {
      event.preventDefault();
  
      $('.form-popup-bg').addClass('is-visible');
    });
    
      //close popup when clicking x or off popup
    $('.form-popup-bg').on('click', function(event) {
      if ($(event.target).is('.form-popup-bg') || $(event.target).is('#btnCloseForm')) {
        event.preventDefault();
        $(this).removeClass('is-visible');
      }
    });
    
    
    
    });
    function closeForm() {
        $('.form-apply').removeClass('is-visible');
      }
      
      $(document).ready(function($) {
        
        /* Contact Form Interactions */
        $('#btnOpenApplyForm').on('click', function(event) {
         
      
          $('.form-apply').addClass('is-visible');
        });
        
          //close popup when clicking x or off popup
        $('.form-apply').on('click', function(event) {
          if ($(event.target).is('.form-apply') || $(event.target).is('#btnApplyCloseForm')) {
       
            $(this).removeClass('is-visible');
          }
        });
        
        
        
        });

        function openModal() {
           let modal = document.querySelector('.form-apply');
            modal.classList.add('is-visible');
          }

   function SendForm(){
        const params={
            from_name : document.getElementById("name").value,
            email_id : document.getElementById("email").value,
            message : "name :" +document.getElementById("name").value +"<br> phone :"+document.getElementById("phone").value
        }
    emailjs.send("service_cpw3hgj","template_tmxqj56",params.then(function(res){
        alert("success"+res.status);
    }))
        
      };




            // function SendForm(){
            //     emailjs.send("service_y2dzz7y","template_tmxqj56",{  
            //         name: document.getElementById("name").value ,
            //         phone: document.getElementById("phone").value,
            //         email: document.getElementById("email").value
            //         });
            // }
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBuZusdd5iFZK7w0B5-EMKvxAiFiboGmcE",
//   authDomain: "elizabeth-testimonials.firebaseapp.com",
//   projectId: "elizabeth-testimonials",
//   storageBucket: "elizabeth-testimonials.appspot.com",
//   messagingSenderId: "1053614450199",
//   appId: "1:1053614450199:web:4f966c8e07879537c1de52",
//   measurementId: "G-YDF7W4V55X"
// };
// Initialize Firebase

//   firebase.initializeApp(firebaseConfig);
  
  // Get a reference to the testimonials collection in Firestore
//   const testimonialsRef = firebase.firestore().collection('testimonials');
  
  // Function to render testimonials
//   function renderTestimonials(testimonials) {
//     const testimonialsCarousel = document.getElementById('testimonialsCarousel');
  
//     testimonials.forEach((testimonial) => {
//       const item = document.createElement('div');
//       item.classList.add('item');
  
//       const provider = document.createElement('div');
//       provider.classList.add('provider');
  
//       const thumb = document.createElement('div');
//       thumb.classList.add('thumb');
//       const thumbImg = document.createElement('img');
//       thumbImg.src = testimonial.thumb;
//       thumbImg.alt = 'Thumb';
//       thumb.appendChild(thumbImg);
  
//       const bio = document.createElement('div');
//       bio.classList.add('bio');
//       const h5 = document.createElement('h5');
//       h5.textContent = testimonial.name;
//       const span = document.createElement('span');
//       span.innerHTML = `Placed in <strong>${testimonial.company}</strong>`;
//       bio.appendChild(h5);
//       bio.appendChild(span);
  
//       provider.appendChild(thumb);
//       provider.appendChild(bio);
  
//       const info = document.createElement('div');
//       info.classList.add('info');
//       const p = document.createElement('p');
//       p.style.textAlign = 'justify';
//       p.textContent = testimonial.content;
//       info.appendChild(p);
  
//       item.appendChild(provider);
//       item.appendChild(info);
  
//       testimonialsCarousel.appendChild(item);
//     });
//   }
  
  // Function to fetch testimonials from Firestore
//   function fetchTestimonials() {
//     testimonialsRef.get().then((querySnapshot) => {
//       const testimonials = [];
//       querySnapshot.forEach((doc) => {
//         testimonials.push(doc.data());
//       });
//       renderTestimonials(testimonials);
//     }).catch((error) => {
//       console.log('Error getting testimonials: ', error);
//     });
//   }
  
  // Fetch testimonials when the DOM content is loaded
//   document.addEventListener('DOMContentLoaded', fetchTestimonials);
  // Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuZusdd5iFZK7w0B5-EMKvxAiFiboGmcE",
  authDomain: "elizabeth-testimonials.firebaseapp.com",
  databaseURL: "https://elizabeth-testimonials-default-rtdb.firebaseio.com",
  projectId: "elizabeth-testimonials",
  storageBucket: "elizabeth-testimonials.appspot.com",
  messagingSenderId: "1053614450199",
  appId: "1:1053614450199:web:4f966c8e07879537c1de52",
  measurementId: "G-YDF7W4V55X"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  // Access Firestore
var db = firebase.firestore();
var testimonialForm = document.getElementById('testimonialForm');
var testimonialsSection = document.getElementById('testimonials');

// Function to add a testimonial to Firestore
function addTestimonialToFirestore(testimonial) {
  return db.collection('testimonials').add(testimonial);
}

// Function to render testimonials on the frontend
function renderTestimonials(testimonials) {
  testimonialsSection.innerHTML = '';

  testimonials.forEach((testimonial) => {
    var figure = document.createElement('figure');
    figure.className = 'snip1192';

    var blockquote = document.createElement('blockquote');
    blockquote.style.textAlign = 'justify';
    blockquote.textContent = testimonial.content;

    var authorDiv = document.createElement('div');
    authorDiv.className = 'author';
    authorDiv.style.paddingTop = '43px';

    var authorImg = document.createElement('img');
    authorImg.src = 'assets/img/nurse.png';
    authorImg.alt = 'sq-sample1';

    var authorName = document.createElement('h6');
    authorName.innerHTML = '<strong>' + testimonial.name + '</strong>';

    var placementSpan = document.createElement('span');
    placementSpan.className = 'span-test';
    placementSpan.innerHTML = 'Placed in <strong>' + testimonial.placement + '</strong>';

    authorDiv.appendChild(authorImg);
    authorDiv.appendChild(authorName);
    authorDiv.appendChild(placementSpan);

    figure.appendChild(blockquote);
    figure.appendChild(authorDiv);

    testimonialsSection.appendChild(figure);
  });
}

// Event listener for form submission
testimonialForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var placement = document.getElementById('placement').value;
  var content = document.getElementById('content').value;

  // Create testimonial object
  var testimonial = {
    name: name,
    placement: placement,
    content: content
  };

  // Add testimonial to Firestore
  addTestimonialToFirestore(testimonial)
    .then(function() {
      // Clear form fields after successful submission
      testimonialForm.reset();
    })
    .catch(function (error) {
      console.error('Error adding testimonial:', error);
    });
});

// Real-time listener for testimonial updates
db.collection('testimonials')
  .onSnapshot(function (querySnapshot) {
    var testimonials = [];

    querySnapshot.forEach(function (doc) {
      var testimonial = doc.data();
      testimonials.push(testimonial);
    });

    renderTestimonials(testimonials);
  });
//topil kidakunnathu comment cheyanam ningal ezutiya dataedukunna code
function getData(){
    // Retrieve data from Firestore
db.collection("testimonials").get().then((querySnapshot) => {
  querySnapshot.forEach((doc) => {
    // Access individual document data
    var data = doc.data();
    console.log(data);
    return data
  });
}).catch((error) => {
  console.log("Error getting documents: ", error);
});
}
