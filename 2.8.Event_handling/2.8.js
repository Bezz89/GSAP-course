console. log(document)

const tabMenu = document.querySelectorAll('.tab-link')
const tabContent = document.querySelectorAll('.tab-pane')

console. log(tabMenu);
console. log(tabContent);

tabMenu.forEach((tabLink, index) => {
    tabLink.addEventListener('click', () => {
        tabContent.forEach(tabItem => {
            tabItem.classList.remove('active')
        })
          
        tabContent[index].classList.add('active')
        
    })
})