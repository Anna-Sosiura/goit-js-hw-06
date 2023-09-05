const linksElements=document.querySelectorAll('li.item');
    console.log(`Number of categories:`,linksElements.length);

    for (const linkEl of linksElements){
        const titleEl= linkEl.querySelector('h2');
        const title=titleEl.textContent;
console.log(`Category: ${title}`);
const listEl= linkEl.querySelectorAll('li');
console.log(`Elements:`,listEl.length);
    }

