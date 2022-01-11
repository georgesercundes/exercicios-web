const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require ('axios')

const chines = funcionario => funcionario.pais === 'China'

const mulheres = funcionario => funcionario.genero === 'F'

const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then(response => {
    const funcionarios = response.data
    const chinesaMenorSalario = funcionarios.filter(chines).filter(mulheres).reduce(menorSalario)
    console.log(chinesaMenorSalario)
})