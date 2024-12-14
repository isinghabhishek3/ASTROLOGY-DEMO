document.addEventListener('DOMContentLoaded', function() {
  console.log('Page loaded');
});

  const dropdownMenus = document.querySelectorAll('li.group');


const pageDropdown = document.getElementById('pageDropdown');
const homeDropdown = document.getElementById('homeDropdown');
const aboutDropdown = document.getElementById('aboutDropdown');
const mainDropdown = pageDropdown.querySelector('div');
const nestedHomeDropdown = homeDropdown.querySelector('div');
const nestedAboutDropdown = aboutDropdown.querySelector('div');

pageDropdown.addEventListener('mouseenter', () => {
  mainDropdown.classList.remove('hidden');
});

pageDropdown.addEventListener('mouseleave', () => {
  setTimeout(() => {
    if (!mainDropdown.matches(':hover')) {
      mainDropdown.classList.add('hidden'); 
    }
  }, 200);
  
});

homeDropdown.addEventListener('mouseenter', () => {
  nestedHomeDropdown.classList.remove('hidden');
});

homeDropdown.addEventListener('mouseleave', () => {
  nestedHomeDropdown.classList.add('hidden');
});

aboutDropdown.addEventListener('mouseenter', () => {
  nestedAboutDropdown.classList.remove('hidden');
});

aboutDropdown.addEventListener('mouseleave', () => {
  nestedAboutDropdown.classList.add('hidden');
});

  dropdownMenus.forEach(menu => {
    const button = menu.querySelector('button');
    const dropdown = menu.querySelector('div');
  
    button.addEventListener('mouseenter', () => {
      dropdown.classList.remove('hidden'); 
    });
  
    
    button.addEventListener('mouseleave', () => {
      setTimeout(() => {
        if (!dropdown.matches(':hover')) {
          dropdown.classList.add('hidden'); 
        }
      }, 200);
    });
  
   
    dropdown.addEventListener('mouseenter', () => {
      dropdown.classList.remove('hidden');  
    });
  
   
    dropdown.addEventListener('mouseleave', () => {
      dropdown.classList.add('hidden'); 
    });
  });

  const blogDropdown = document.getElementById('blogDropdown');
  const archiveDropdown01 = document.getElementById('archiveDropdown01');
  const archiveDropdown02 = document.getElementById('archiveDropdown02');
  const singlePostDropdown = document.getElementById('singlePostDropdown');
  
  const nestedArchiveDropdown01 = document.getElementById('nestedArchiveDropdown01');
  const nestedArchiveDropdown02 = document.getElementById('nestedArchiveDropdown02');
  const nestedSinglePostDropdown = document.getElementById('nestedSinglePostDropdown');
  
  
  blogDropdown.addEventListener('mouseenter', () => {
    blogDropdown.querySelector('div').classList.remove('hidden');
  });
  
  blogDropdown.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!blogDropdown.querySelector('div').matches(':hover')) {
        blogDropdown.querySelector('div').classList.add('hidden');
      }
    }, 200);
  });

  
  archiveDropdown01.addEventListener('mouseenter', () => {
    nestedArchiveDropdown01.classList.remove('hidden');
  });

  archiveDropdown01.addEventListener('mouseleave', () => {
    nestedArchiveDropdown01.classList.add('hidden');
  });

  
  archiveDropdown02.addEventListener('mouseenter', () => {
    nestedArchiveDropdown02.classList.remove('hidden');
  });

  archiveDropdown02.addEventListener('mouseleave', () => {
    nestedArchiveDropdown02.classList.add('hidden');
  });

 
  singlePostDropdown.addEventListener('mouseenter', () => {
    nestedSinglePostDropdown.classList.remove('hidden');
  });

  singlePostDropdown.addEventListener('mouseleave', () => {
    nestedSinglePostDropdown.classList.add('hidden');
  });


  const images = [
    'video/sq-01.jpg',
    'video/slider-01.jpg' 
  ];

  let currentImageIndex = 0;

 
  function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    document.getElementById('mirrorImage').src = images[currentImageIndex];
  }

  setInterval(changeImage, 5000);



    const dynamicTextElement1 = document.getElementById('dynamic-text1');
    const dynamicTextElement = document.getElementById('dynamic-text');
  
    const dynamicTexts1 = ['with Cards', 'with Stars'];
    const dynamicTexts = ['Horoscope', 'The Cosmos']; 
  
    let currentTextIndex1 = 0; 
    let currentTextIndex = 0;
  
    let hideIndex1 = 0, revealIndex1 = 0; 
    let hideIndex = 0, revealIndex = 0;
  
    let isHiding1 = true; 
    let isHiding = true; 
  
   
    function animateText1() {
      const currentText1 = dynamicTexts1[currentTextIndex1];
      const nextText1 = dynamicTexts1[(currentTextIndex1 + 1) % dynamicTexts1.length];
  
      if (isHiding1) {
        if (hideIndex1 < currentText1.length) {
          dynamicTextElement1.textContent = currentText1.slice(0, currentText1.length - hideIndex1);
          hideIndex1++;
        } else {
          isHiding1 = false;
          revealIndex1 = 0;
        }
      } else {
        if (revealIndex1 < nextText1.length) {
          dynamicTextElement1.textContent = nextText1.slice(0, revealIndex1 + 1);
          revealIndex1++;
        } else {
          isHiding1 = true;
          hideIndex1 = 0;
          currentTextIndex1 = (currentTextIndex1 + 1) % dynamicTexts1.length;
        }
      }
    }
  
  
    function animateText() {
      const currentText = dynamicTexts[currentTextIndex];
      const nextText = dynamicTexts[(currentTextIndex + 1) % dynamicTexts.length];
  
      if (isHiding) {
        if (hideIndex < currentText.length) {
          dynamicTextElement.textContent = currentText.slice(0, currentText.length - hideIndex);
          hideIndex++;
        } else {
          isHiding = false;
          revealIndex = 0;
        }
      } else {
        if (revealIndex < nextText.length) {
          dynamicTextElement.textContent = nextText.slice(0, revealIndex + 1);
          revealIndex++;
        } else {
          isHiding = true;
          hideIndex = 0;
          currentTextIndex = (currentTextIndex + 1) % dynamicTexts.length;
        }
      }
    }
  
    setInterval(() => {
      animateText1();
      animateText();
    }, 100);