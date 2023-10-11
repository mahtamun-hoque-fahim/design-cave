// document.addEventListener("contextmenu", function (fahim) {
//     fahim.preventDefault();
//   });
  
//   document.onkeydown = function (e) {
//     if (e.keyCode == 123) {
//       return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "I".charCodeAt(0)) {
//       return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "J".charCodeAt(0)) {
//       return false;
//     }
//     if (e.ctrlKey && e.keyCode == "U".charCodeAt(0)) {
//       return false;
//     }
//     if (e.ctrlKey && e.shiftKey && e.keyCode == "C".charCodeAt(0)) {
//       return false;
//     }
//   };

   
  // =-===========  infinite scroll animation  ===================//
  
  const scrollers = document.querySelectorAll(".scroller");
  
  // If a user hasn't opted in for recuded motion, then we add the animation
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    addAnimation();
  }
  
  function addAnimation() {
    scrollers.forEach((scroller) => {
      // add data-animated="true" to every `.scroller` on the page
      scroller.setAttribute("data-animated", true);
  
      // Make an array from the elements within `.scroller-inner`
      const scrollerInner = scroller.querySelector(".scroller__inner");
      const scrollerContent = Array.from(scrollerInner.children);
  
      // For each item in the array, clone it
      // add aria-hidden to it
      // add it into the `.scroller-inner`
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.appendChild(duplicatedItem);
      });
    });
  }
  