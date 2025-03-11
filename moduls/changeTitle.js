export const titles = [
    "Vítejte na naší stránce!",
    "Zjistěte více o investičním zlatě",
    "Novinky a nabídky na zlaté mince",
    "Připojte se k našim věrným zákazníkům!"
  ];
export let currentIndex = 0;
export function changeTitle() {
    document.title = titles[currentIndex]; 
    currentIndex = (currentIndex + 1) % titles.length; 
  }