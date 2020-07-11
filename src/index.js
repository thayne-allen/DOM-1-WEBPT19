const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018",
  },
  "img": {
    "header-img": "https://tk-assets.lambdaschool.com/d312ae1d-879c-4c0b-8e0a-d03661aed7d8_header-img.png",
    "mid-page-img": "https://tk-assets.lambdaschool.com/933e5c8a-f143-4a89-b81b-4a609c325f1a_mid-page-accent.jpg",
    "logo-img": "https://tk-assets.lambdaschool.com/d7b66b1d-1f0f-489e-b408-f8e25140c82c_logo.png",
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["img"]["logo-img"])

const select = s => document.querySelector(s),
      selectAll = s => document.querySelectorAll(s);

const bottomh = selectAll('.bottom-content .text-content h4'), 
      bottomc = selectAll('.bottom-content .text-content p'),
      ctah = select('.cta-text h1'),
      ctab = select('.cta-text button'),
      ctai = select('#cta-img'),
      contacth = select('.contact h4'),
      contactp = selectAll('.contact p'),
      footer = select('footer p');
      logoimg = select('#logo-img'),
      middleimg = select('#middle-img'),
      nav = select('header nav'),
      navlink = selectAll('header nav a'),
      toph = selectAll('.top-content .text-content h4'),
      topc = selectAll('.top-content .text-content p');

// nav
const blog = document.createElement('a'),
      hdesk = document.createElement('a');

blog.innerText = 'Blog';
hdesk.innerText = 'Helpdesk';

nav.prepend(blog);
nav.appendChild(hdesk);

navlink.forEach((e, i) => {
  e.innerText = siteContent['nav'][`nav-item-${i + 1}`];
});

navlink = selectAll('header nav a');

navlink.forEach(e => e.style.color = 'green');

// logo
logoimg.setAttribute('src', siteContent['img']['logo-img']);

// cta
ctah.innerText = siteContent['cta']['h1'];
ctab.innerText = siteContent['cta']['button'];
ctai.setAttribute('src', siteContent['img']['header-img']);

// features
toph[0].innerText = siteContent['main-content']['features-h4'];
topc[0].innerText = siteContent['main-content']['features-content'];

// about
toph[1].innerText = siteContent['main-content']['about-h4'];
topc[1].innerText = siteContent['main-content']['about-content'];

// middle image
middleimg.setAttribute('src', siteContent['img']['mid-page-img']);

// services
bottomh[0].innerText = siteContent['main-content']['services-h4'];
bottomc[0].innerText = siteContent['main-content']['services-content'];

// product
bottomh[1].innerText = siteContent['main-content']['product-h4'];
bottomc[1].innerText = siteContent['main-content']['product-content'];

// vision
bottomh[2].innerText = siteContent['main-content']['vision-h4'];
bottomc[2].innerText = siteContent['main-content']['vision-content'];

// contact
contacth.innerText = siteContent['contact']['contact-h4'];
contactp[0].innerText = siteContent['contact']['address'];
contactp[1].innerText = siteContent['contact']['phone'];
contactp[2].innerText = siteContent['contact']['email'];

// footer
footer.innerText = siteContent['footer']['copyright'];