export const write = (label, text) => {
    let container = document.querySelector('section')
    let fragment = document.createDocumentFragment()
    let p = document.createElement('p')
    let labelContent = document.createElement('span')
    labelContent.innerText = label
    let textContent = document.createElement('span')
    textContent.innerText = !text ? '' : ' => ' + text
    p.appendChild(labelContent)
    p.appendChild(textContent)
    fragment.appendChild(p)
    container.appendChild(fragment)
}