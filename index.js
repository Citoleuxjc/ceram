<script data-info="hacks-body">

document.addEventListener("DOMContentLoaded", function(){

  const timeVersion1 = {
    timeZone:"Europe/Paris", 
    hour12 : false,
    hour:  "2-digit",
    minute: "2-digit",
  }

  document.querySelector('.time').textContent = new Date().toLocaleTimeString('fr', timeVersion1);
});

</script>

<script>
if (localStorage.getItem('green-mode') !== null) {
  document.documentElement.classList.add("green-mode");
}
if (localStorage.getItem('white-mode') !== null) {
  document.documentElement.classList.add("white-mode");
}
if (localStorage.getItem('yellow-mode') !== null) {
  document.documentElement.classList.add('yellow-mode');
}
</script>

<script>
let timeoutGreen, timeoutWhite, timeoutYellow;

// Gestion du clic sur .dot-link-3
$('.dot-link-3').on('click', function() {
  clearTimeout(timeoutGreen);
  clearTimeout(timeoutWhite);
  clearTimeout(timeoutYellow);
  
  $('html').addClass('transition');
  
  setTimeout(() => {
    $('html').removeClass('transition');
  }, 600);
  
  $('html').removeClass('white-mode yellow-mode').toggleClass('green-mode');
  
  if ($('html').hasClass('green-mode')) {
    localStorage.setItem('green-mode', 'true');
  } else {
    localStorage.removeItem('green-mode');
  }
});

// Gestion du clic sur .dot-link-1
$('.dot-link-1').on('click', function() {
  clearTimeout(timeoutGreen);
  clearTimeout(timeoutWhite);
  clearTimeout(timeoutYellow);
  
  $('html').addClass('transition');
  
  setTimeout(() => {
    $('html').removeClass('transition');
  }, 600);
  
  $('html').removeClass('green-mode yellow-mode').toggleClass('white-mode');
  
  if ($('html').hasClass('white-mode')) {
    localStorage.setItem('white-mode', 'true');
  } else {
    localStorage.removeItem('white-mode');
  }
});

// Gestion du clic sur .dot-link-2
$('.dot-link-2').on('click', function() {
  clearTimeout(timeoutGreen);
  clearTimeout(timeoutWhite);
  clearTimeout(timeoutYellow);
  
  $('html').addClass('transition');
  
  setTimeout(() => {
    $('html').removeClass('transition');
  }, 600);
  
  $('html').removeClass('green-mode white-mode').toggleClass('yellow-mode');
  
  if ($('html').hasClass('yellow-mode')) {
    localStorage.setItem('yellow-mode', 'true');
  } else {
    localStorage.removeItem('yellow-mode');
  }
});
</script>



<script>
$('.nav-link-b').on('mouseenter', function() {
  $('.nav-link-b').not(this).addClass('is--active');
}).on('mouseleave', function() {
  $('.nav-link-b').removeClass('is--active');
});
</script>


<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script>
$('a:not(.link_card').on('mouseenter', function() {
  $('.cursor_dot').addClass('is-larger');
});

$('a').on('mouseleave', function() {
  $('.cursor_dot').removeClass('is-larger');
});


$('.nav_link, .cta-panel-child, .list_details-grid, .slider-main_div, .btn_colors-link, .footer-w--vb2-1-pr3-15-pl3-15, .card_sp_icon, .menu_cta, .btn_main_wrap--br3, .btn_second-link, .form').on('mouseenter', function() {
  $('.cursor_dot').addClass('is-smaller');
});

$('.nav_link, .cta-panel-child, .list_details-grid, .slider-main_div, .btn_colors-link, .footer-w--vb2-1-pr3-15-pl3-15, .card_sp_icon, .menu_cta, .btn_main_wrap--br3, .btn_second-link, .form').on('mouseleave', function() {
  $('.cursor_dot').removeClass('is-smaller');
});

$('body').on('mousedown', function() {
  $('.cursor_dot').addClass('cursor-smaller');
});

$('body').on('mouseup', function() {
  $('.cursor_dot').removeClass('cursor-smaller');
});
  
$('.work_item_layout-w, .blog_item_layout-w').on('mouseenter', function() { 
  $('cursor_dot, .cursor, .cursor_text-int').addClass('is-title-link');
   let myColor = $(this).attr('data-color');
   let myText = $(this).attr('data-text');
   $('.cursor_dot').css('background-color', myColor );
   $('.cursor_text').text( myText ); 
});

$('.work_item_layout-w, .blog_item_layout-w').on('mouseleave', function() { 
  $('cursor_dot, .cursor, .cursor_text-int').removeClass('is-title-link');
  $('.cursor_dot').css('background-color', 'white' );
});
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/CustomEase.min.js"></script>

<script>
// Code that runs on pageload
gsap.to(".load_grid-item", {
  opacity: 0,
  duration: 0.001,
  stagger: { amount: 0.5, from: "random" },
  onComplete: () => {
    gsap.set(".load_grid", { display: "none" });
  }
});

// Code that runs on click of a link
$(document).ready(function () {
  $('a:not(.toggle-link').on("click", function (e) {
    if (
    	$(this).prop("hostname") === window.location.host &&
      $(this).attr("href").indexOf("#") === -1 &&
      $(this).attr("target") !== "_blank") {
        e.preventDefault();
        let destination = $(this).attr("href");
        gsap.set(".load_grid", { display: "grid" });
        gsap.fromTo(
          ".load_grid-item",
          {
            opacity: 0
          },
          {
            opacity: 1,
            duration: 0.001,
            stagger: { amount: 0.5, from: "random" }, 
            onComplete: () => {
              window.location = destination;
            }
          }
        );
    }
  });
  
  // On click of the back button
  window.onpageshow = function(event){
  	if (event.persisted) {
    	window.location.reload();
    }
  }
});

</script>


<script>
const linkCards = document.querySelectorAll('.link_card');
const cursorText = document.querySelector('.cursor_text');
let isAnimating = false;

linkCards.forEach(linkCard => {
  linkCard.addEventListener('mouseenter', () => {
    if (!isAnimating) {
      isAnimating = false;
  
      gsap.to(cursorText, {
        y: 0,
        duration: 0.1,
        delay: 0.2,
        ease: 'power4.out',
        onComplete: () => {
          gsap.to(cursorText, {
            y: 0,
            duration: 0.1,
            ease: 'power4.out',
            onComplete: () => {
              isAnimating = false;
            }
          });
        }
      });
    }
  });
  
  linkCard.addEventListener('mouseleave', () => {
    if (!isAnimating) {
      isAnimating = false;
  
      gsap.to(cursorText, {
        y: -14,
        duration: 0.1,
        ease: 'power2.out',
        onComplete: () => {
          gsap.to(cursorText, {
            y: -14,
            duration: 0.1,
            ease: 'power2.out',
            onComplete: () => {
              isAnimating = false;
            }
          });
        }
      });
    }
  });
});
</script>

<script>
const texte = document.querySelector('.slide__title');


gsap.to(texte, {
  duration: 1, 
  onUpdate: () => {
  
    texte.style.mixBlendMode = 'difference';
   
    texte.style.color = 'hsl(180, 100%, ' + (100 - parseFloat(getComputedStyle(texte).color.match(/\d+\.*\d*/g)[2])) + '%)';
  },
});
</script>

<script>
// variables
let customEase =
  "M0,0,C0,0,0.13,0.34,0.238,0.442,0.305,0.506,0.322,0.514,0.396,0.54,0.478,0.568,0.468,0.56,0.522,0.584,0.572,0.606,0.61,0.719,0.714,0.826,0.798,0.912,1,1,1,1";
let counter = {
  value: 0
};
let loaderDuration = 2;


if (sessionStorage.getItem("visited") !== null) {
  loaderDuration = 2;
  counter = {
    value: 75
  };
}
sessionStorage.setItem("visited", "true");

function updateLoaderText() {
  let progress = Math.round(counter.value);
  $(".loader_number").text(progress);
}
function endLoaderAnimation() {
  $(".trigger").click();
}

let tl = gsap.timeline({
  onComplete: endLoaderAnimation
});
tl.to(counter, {
  value: 100,
  onUpdate: updateLoaderText,
  duration: loaderDuration,
  ease: CustomEase.create("custom", customEase)
});
tl.to(".loader_progress", {
    width: "100%",
    duration: loaderDuration,
    ease: CustomEase.create("custom", customEase)
}, 0);
</script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
<script src="https://unpkg.com/imagesloaded@4/imagesloaded.pkgd.min.js"></script>

<script>
var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _toConsumableArray(arr) {if (Array.isArray(arr)) {for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {arr2[i] = arr[i];}return arr2;} else {return Array.from(arr);}}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}var math = {
  lerp: function lerp(a, b, n) {
    return (1 - n) * a + n * b;
  },
  norm: function norm(value, min, max) {
    return (value - min) / (max - min);
  } };


var config = {
  height: window.innerHeight,
  width: window.innerWidth };var


Smooth = function () {


	this.run = function () {
    this.data.last.one = math.lerp(this.data.last.one, this.data.current, 0.085);
    this.data.last.one = Math.floor(this.data.last.one * 100) / 100;

    this.data.last.two = math.lerp(this.data.last.two, this.data.current, 0.08);
    this.data.last.two = Math.floor(this.data.last.two * 100) / 100;

    var diff = this.data.current - this.data.last.one;
    var acc = diff / config.width;
    var velo = +acc;
    var bounce = 1 - Math.abs(velo * 0.25);
    var skew = velo * 7.5;

    this.dom.content[0].style.transform = 'translate3d(-' + this.data.last.one.toFixed(2) + 'px, 0, 0) scaleY(' + bounce + ') skewX(' + skew + 'deg)';
    this.dom.content[1].style.transform = 'translate3d(-' + this.data.last.two.toFixed(2) + 'px, 0, 0) scaleY(' + bounce + ')';

    var scale = math.norm(this.data.last.two, 0, this.bounds.max);

    this.dom.handle.style.transform = 'scaleX(' + scale + ')';

    // Mettre à jour la valeur du compteur en fonction de la progression du défilement
    var counterValue = Math.floor(scale * 100);
    var counterElement = document.querySelector('.fs6--cd5.is-counter span');
    counterElement.textContent = counterValue + '%';

    this.requestAnimationFrame();
  };
  
  function Smooth() {_classCallCheck(this, Smooth);
    this.bindAll();

    this.el = document.querySelector('[data-scroll]');
    this.content = [].concat(_toConsumableArray(document.querySelectorAll('[data-scroll-content]')));

    this.dom = {
      el: this.el,
      content: this.content,
      elems: [[].concat(_toConsumableArray(this.content[0].querySelectorAll('.js-slide'))), [].concat(_toConsumableArray(this.content[1].querySelectorAll('.js-slide')))],
      handle: this.el.querySelector('.js-scrollbar__handle') };


    this.data = {
      total: this.dom.elems[0].length - 1,
      current: 0,
      last: {
        one: 0,
        two: 0 },

      on: 0,
      off: 0 };


    this.bounds = {
      elem: 0,
      content: 0,
      width: 0,
      max: 0,
      min: 0 };


    this.state = {
      dragging: false };


    this.rAF = null;
    this.parallax = null;

    this.init();
  }_createClass(Smooth, [{ key: 'bindAll', value: function bindAll()

    {var _this = this;
      ['scroll', 'run', 'resize'].
      forEach(function (fn) {return _this[fn] = _this[fn].bind(_this);});
    } }, { key: 'setStyles', value: function setStyles()

    {
      this.dom.el.style.position = 'fixed';
      this.dom.el.style.top = 0;
      this.dom.el.style.left = 0;
      this.dom.el.style.height = '100%';
      this.dom.el.style.width = '100%';
      this.dom.el.style.overflow = 'hidden';
    } }, { key: 'setBounds', value: function setBounds(

    elems) {var _this2 = this;
      var w = 0;

      elems.forEach(function (el, index) {
        var bounds = el.getBoundingClientRect();

        el.style.position = 'absolute';
        el.style.top = 0;
        el.style.left = w + 'px';

        w = w + bounds.width;

        _this2.bounds.width = w;
        _this2.bounds.max = _this2.bounds.width - config.width;

        console.log(_this2.bounds.width, _this2.bounds.max);

        if (_this2.data.total === index && elems === _this2.dom.elems[0]) {
          _this2.dom.content[0].style.width = w + 'px';
          _this2.dom.content[1].style.width = w + 'px';
          document.body.style.height = w + 'px';
        }
      });
    } }, { key: 'resize', value: function resize()

    {
      this.setBounds(this.dom.elems[0]);
      this.setBounds(this.dom.elems[1]);
      this.scroll();
    } }, { key: 'preload', value: function preload()

    {var _this3 = this;
      imagesLoaded(this.dom.content, function (instance) {
        _this3.setBounds(_this3.dom.elems[0]);
        _this3.setBounds(_this3.dom.elems[1]);
      });
    } }, { key: 'scroll', value: function scroll()

    {
      if (this.state.dragging) return;

      this.data.current = window.scrollY;
      this.clamp();
    } }, { key: 'drag', value: function drag(

    e) {
      this.data.current = window.scrollY - (e.clientX - this.data.on);
      this.clamp();
    } }, { key: 'clamp', value: function clamp()

    {
      this.data.current = Math.min(Math.max(this.data.current, 0), this.bounds.max);
    } }, { key: 'run', value: function run()

    {
      this.data.last.one = math.lerp(this.data.last.one, this.data.current, 0.085);
      this.data.last.one = Math.floor(this.data.last.one * 100) / 100;

      this.data.last.two = math.lerp(this.data.last.two, this.data.current, 0.08);
      this.data.last.two = Math.floor(this.data.last.two * 100) / 100;

      var diff = this.data.current - this.data.last.one;
      var acc = diff / config.width;
      var velo = +acc;
      var bounce = 1 - Math.abs(velo * 0.25);
      var skew = velo * 7.5;

      this.dom.content[0].style.transform = 'translate3d(-' + this.data.last.one.toFixed(2) + 'px, 0, 0) scaleY(' + bounce + ') skewX(' + skew + 'deg)';
      this.dom.content[1].style.transform = 'translate3d(-' + this.data.last.two.toFixed(2) + 'px, 0, 0) scaleY(' + bounce + ')';

      var scale = math.norm(this.data.last.two, 0, this.bounds.max);

      this.dom.handle.style.transform = 'scaleX(' + scale + ')';

      this.requestAnimationFrame();
    } }, { key: 'on', value: function on()

    {
      this.setStyles();
      this.setBounds(this.dom.elems[0]);
      this.setBounds(this.dom.elems[1]);
      this.addEvents();

      this.requestAnimationFrame();
    } }, { key: 'requestAnimationFrame', value: function (_requestAnimationFrame) {function requestAnimationFrame() {return _requestAnimationFrame.apply(this, arguments);}requestAnimationFrame.toString = function () {return _requestAnimationFrame.toString();};return requestAnimationFrame;}(function ()

    {
      this.rAF = requestAnimationFrame(this.run);
    }) }, { key: 'resize', value: function resize()

    {
      this.setBounds();
    } }, { key: 'addEvents', value: function addEvents()

    {var _this4 = this;
      window.addEventListener('scroll', this.scroll, { passive: true });

      this.dom.el.addEventListener('mousemove', function (e) {
        if (!_this4.state.dragging) return;

        _this4.drag(e);
      }, { passive: true });

      this.dom.el.addEventListener('mousedown', function (e) {
        _this4.state.dragging = true;
        _this4.data.on = e.clientX;
      });

      window.addEventListener('mouseup', function () {
        _this4.state.dragging = false;
        window.scrollTo(0, _this4.data.current);
      });
    } }, { key: 'init', value: function init()

    {
      this.preload();
      this.on();
    } }]);return Smooth;}();var

Transition = function () {}();

// Init classes
var smooth = new Smooth();
</script>

<!-- GSAP Flip plugin -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.1/Flip.min.js"></script>

<script>
const navLinks = document.querySelectorAll(".nav_link");
const navCorners = document.querySelector(".nav_shape");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.forEach(function (link) {
      link.classList.remove("is--active");
    });
    this.classList.add("is--active");
  });

  link.addEventListener("mouseenter", function () {
    const state = Flip.getState(navCorners);
    this.appendChild(navCorners);
    Flip.from(state, {
      duration: 0.4,
      ease: "power1.inOut"
    });
  });

  link.addEventListener("mouseleave", function () {
    const state = Flip.getState(navCorners);
    const activeLink = document.querySelector(".nav_link.is--active");
    activeLink.appendChild(navCorners);
    Flip.from(state, {
      duration: 0.4,
      ease: "power1.inOut"
    });
  });
});
</script>


<script>
document.addEventListener('DOMContentLoaded', function() {
    const subTxtElement = document.querySelector('.sub_txt--fs5.is-top');
    const heroWrapElement = document.querySelector('.hero_hp_wrap');

    // Créer l'animation avec GSAP
    const animation = gsap.fromTo(subTxtElement, 
        { y: -30, opacity: 0 }, 
        { y: 0, opacity: 1, delay: 2.5, duration: 1, ease: 'power2.out' }
    );


    animation.play();
});
</script>


<!-- Code Sandbox -->
<script src="https://4y9c3p.csb.app/script.js"></script>
<!-- Split library -->
<script src="https://unpkg.com/split-type"></script>
<script>
let splitText;
function runSplit() {
  splitText = new SplitType("[stagger-link]", {
    types: "words, chars"
  });
}
runSplit();

// ————— Update on window resize
let windowWidth = $(window).innerWidth();
window.addEventListener("resize", function () {
  if (windowWidth !== $(window).innerWidth()) {
    windowWidth = $(window).innerWidth();
    splitText.revert();
    runSplit();
  }
});

// ———— animation
const staggerLinks = document.querySelectorAll("[stagger-link]");
staggerLinks.forEach((link) => {
  const letters = link.querySelectorAll("[stagger-link-text] .char");
  link.addEventListener("mouseenter", function () {
    gsap.to(letters, {
      yPercent: -100,
      duration: 0.5,
      ease: "power4.inOut",
      stagger: { each: 0.03, from: "start" },
      overwrite: true
    });
  });
  link.addEventListener("mouseleave", function () {
    gsap.to(letters, {
      yPercent: 0,
      duration: 0.4,
      ease: "power4.inOut",
      stagger: { each: 0.03, from: "start" }
    });
  });
});

</script>

