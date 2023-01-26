const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  dayExists =  nlwSetup.dayExists(today)

  if(dayExists) {
    alert('Dia já inserido!')
    return
  }

  alert('Dia inserido com sucesso!')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits616', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits616')) || {}

nlwSetup.setData(data)
nlwSetup.load()