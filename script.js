const TEXT_CHANGE_INTERVAL = 2000; //ms
const carousels = document.querySelectorAll(".text-carousel");
const loremIpsumLines = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Duis aute irure dolor in reprehenderit in voluptate velit.",
  ];
  
  for (const item of carousels) {
    initCarousel(item, TEXT_CHANGE_INTERVAL);
  }
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

