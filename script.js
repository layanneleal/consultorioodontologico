let pacientes = [] //Declara array global

function adicionarPaciente () {
  //Cria referência aos elementos da página
  let inPaciente = document.getElementById('inPaciente')
  let outLista = document.getElementById('outLista')

  let nome = inPaciente.value.toUpperCase() //Obtem nome do paciente

  //Verifica preenchimento do nome
  if (nome == '') {
    alert('Informe o nome do paciente')
    inPaciente.focus()
    return
  }
  pacientes.push(nome) //Adiciona nome no final do vetor
  let lista = '' //String para concatenar pacientes 

  //Percorre os elementos do array
  for ( i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + '. ' + pacientes[i] + '\n'
  }

  //Altera o conteúdo da tag outLista
  outLista.textContent = lista

  //Limpa campo e posiciona cursor em inPaciente
  inPaciente.value = ''
  inPaciente.focus()
}
//Cria referência ao btAdicionar e associa function ao evento click
let btAdicionar = document.getElementById('btAdicionar')
btAdicionar.addEventListener('click', adicionarPaciente)

function adicionarUrgencia () {
  //Cria referência aos elementos da página
  let inPaciente = document.getElementById('inPaciente')
  let outLista = document.getElementById('outLista')

  let nome = inPaciente.value.toUpperCase() //Obtem nome do paciente

  //Verifica preenchimento do nome
  if (nome == '') {
    alert('Informe o nome do paciente')
    inPaciente.focus()
    return
  }
  pacientes.unshift(nome) //Adiciona nome no início do vetor
  let lista = '' //String para concatenar pacientes 

  //Percorre os elementos do array
  for ( i = 0; i < pacientes.length; i++) {
    lista += (i + 1) + '. ' + pacientes[i] + '\n'
  }

  //Altera o conteúdo da tag outLista
  outLista.textContent = lista

  //Limpa campo e posiciona cursor em inPaciente
  inPaciente.value = ''
  inPaciente.focus()
}
//Cria referência ao btAdicionar e associa function ao evento click
let btUrgencia = document.getElementById('btUrgencia')
btUrgencia.addEventListener('click', adicionarUrgencia)

function atenderPaciente() {
  // verifica se vetor pacientes está vazio
  if (pacientes.length == 0) {
  alert("Não há pacientes na lista de espera")
  inPaciente.focus()
  return
  }
  // cria referência aos elementos de saída de dados
  var outAtendimento = document.getElementById("outAtendimento")
  var outLista = document.getElementById("outLista")

  // remove paciente do início da fila (e obtém nome)
  var atender = pacientes.shift()

  // exibe nome do paciente em atendimento
  outAtendimento.textContent = atender

  // string para concatenar pacientes
  var lista = ""
  // percorre os elementos do vetor
  for (i = 0; i < pacientes.length; i++) {
  lista += (i + 1) + ". " + pacientes[i] + "\n"
  }
  // altera o conteúdo da tag outLista
  outLista.textContent = lista
}

var btAtender = document.getElementById("btAtender")
btAtender.addEventListener("click", atenderPaciente)
