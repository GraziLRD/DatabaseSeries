const series = require('./database')
//console.log(series)

//pegar o input
const readline = require('readline-sync')

const entradaInicial = readline.question('Deseja buscar uma serie? S/N')

//Se for sim, mostra as categorias disponiveis, e pergunta qual categoria ela escolhe

//Se for nao, mostra todas as séries em ordem crescente pela quantidade de temporadas

if(entradaInicial.toLocaleUpperCase() === 'S'){
    console.log('Essas são as categorias disponíveis:')
    console.log('Estilo de vida', '/Comedia', '/Suspense policial')

    const entradaCategoria = readline.question('Qual categoria voce escolhe?')

    const retorno = series.filter(series => series.categoria === entradaCategoria)

    console.table(retorno)
} else {
    const seriesOrdenadas = series.sort((a,b) => a.temporadas - b.temporadas)
    console.log('Essas sao as series disponiveis:')
    console.table(seriesOrdenadas)
}