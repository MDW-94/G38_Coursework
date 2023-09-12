// console.log('app loaded', window);

document.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1')
    title.textContent = "Howdy"

    const welcomeParagraph = document.querySelector('#welcome-paragraph')
    // console.log(welcomeParagraph);
    // console.dir(welcomeParagraph);

    const redElement = document.querySelector('li.red')
    console.log(redElement);
    redElement.textContent = "RED!"
    redElement.classList.add('bold')

    const allListElements = document.querySelectorAll('li')
    console.log('allListElements', allListElements);

    const newListItem = document.createElement('li')
    newListItem.textContent = 'Purple'
    newListItem.classList.add('purple')

    const list = document.querySelector('ul')
    list.appendChild(newListItem)

})

