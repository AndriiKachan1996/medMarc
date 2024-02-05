let myImageSlider = new Swiper(".image-slider", {
    ////////////////////////////////////////////////////////////////
    
        /* стрілки */
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
    
        },
    
    ////////////////////////////////////////////////////////////////
    
    
        keyboard: {
            /*on-off*/
            enabled: true,
    
            onlyInViewport: true,
            /* control < >  */ 
            pageUpDown: true,
        },
    

    //  loop: true,
    
  
        slidesPerGroup: 1,
    
    
    effect: "slide",
    centeredSlides: true,
    //    coverflowEffect: {
    //     rotate: 20,
    //     stretch: 10,
    //     slideShadows: false
    // },
    
        slideShadows: true,
  
    
    breakpoints: {
        280: {
        spaceBetween: 30,

        slidesPerView: 1.5,
        slidesPerGroup: 1,
        centeredSlides: false,



       
    
    
    
        },
    
        768: {
        spaceBetween: 30,

        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,

   

         
        
    
    
        },
    
        1200: {
        // spaceBetween: 10,

        slidesPerView: 3.5,
        centeredSlides: false,
        slidesPerGroup: 1,
    
    
    
    
        }
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        // draggable: false,
   
      },
    
    })
    
