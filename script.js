document.addEventListener("DOMContentLoaded", function(event) { 
    // init all text carousels
    
    const TEXT_CHANGE_INTERVAL = 2000; //ms
    
    const carousels = document.querySelectorAll(".text-carousel");
    
    for(const item of carousels) {
        initCarousel(item, TEXT_CHANGE_INTERVAL)
    }


});
const loremIpsumLines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Duis aute irure dolor in reprehenderit in voluptate velit.",
  ];

  // Función para obtener una línea aleatoria de "Lorem Ipsum"
  function getRandomLoremIpsumLine() {
    const randomIndex = Math.floor(Math.random() * loremIpsumLines.length);
    return loremIpsumLines[randomIndex];
  }

  // ... Tu código para inicializar el carrusel ...

  // Iniciar el carrusel
  const carousels = document.querySelectorAll(".text-carousel");

  for (const item of carousels) {
    initCarousel(item, TEXT_CHANGE_INTERVAL);
  }

function initCarousel(domItem, changeInterval) {

    // children is not an array but an HTMLCollection, transforming into array to use array methods
    const childrenList = Array.from(domItem.children);
    // get current active item's index
    let currentActiveItemIndex = childrenList.findIndex((item) => item.className.includes("active"));
    
    // get ref to currently active one, so it is disabled on next interval run
    let currentActiveItem = childrenList.find((item) => item.className.includes("active"))
    
    // this also takes into account no items being active at start, because findIndex returns -1
    let nextActiveItemIndex = currentActiveItemIndex === childrenList.length - 1 ? 0 : currentActiveItemIndex + 1;
    let nextActiveItem = childrenList[nextActiveItemIndex];

    setInterval(() => {
        if(currentActiveItem) {
            currentActiveItem.classList.remove("active");
        }

        nextActiveItem.classList.add("active");
        
        currentActiveItemIndex = nextActiveItemIndex;
        currentActiveItem = nextActiveItem;

        nextActiveItemIndex =  currentActiveItemIndex === childrenList.length - 1 ? 0 : currentActiveItemIndex + 1;
        nextActiveItem = childrenList[nextActiveItemIndex]
    }, changeInterval)
    
}
// Función para obtener una línea aleatoria de "Lorem Ipsum"
function getRandomLoremIpsumLine() {
    const randomIndex = Math.floor(Math.random() * loremIpsumLines.length);
    return loremIpsumLines[randomIndex];
}

function initCarousel(domItem, changeInterval) {
    const childrenList = Array.from(domItem.children);

    setInterval(() => {
        for (const item of childrenList) {
            // Cambiar el contenido de cada elemento en el carrusel a una línea aleatoria de "Lorem Ipsum"
            item.textContent = getRandomLoremIpsumLine();
        }
    }, changeInterval);
}

