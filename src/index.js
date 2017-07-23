import styles from './styles2.css'

function component() {
  const element = document.createElement('div')
  const classList = styles.goodbyeWorld.split(' ').map(c => `<li>${c}</li>`).join('')
  const html = `
    <div>
      classnames
      <ul>
        ${classList}
      </ul>
    </div>
  `
  element.innerHTML = html
  return element
}

document.body.appendChild((component()))
