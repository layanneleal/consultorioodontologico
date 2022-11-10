let pacientes = [] //Declara array global

function adicionarPaciente () {
  //Cria referência aos elementos da página
  let inPaciente = document.getElementById('inPaciente')
  let outLista = document.getElementById('outLista')

  let nome = inPaciente.value //Obtem nome do paciente

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