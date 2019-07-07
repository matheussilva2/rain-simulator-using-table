const gota = "#00CED1"
const sky = "000080"

const renderMatriz = ( lista,  largura, altura) => {
	const debug = true

	let html = "<table cellpadding=0 cellspacing=0>"
	for (let row = 0; row < altura; row++){
		html += "<tr>"

		for(let col = 0; col < altura; col++){
			const tileIndex = col + (altura * row)

			if(debug === true){
				html += `<td class='tile' style="background-color: ${ lista[tileIndex] };">`
				html += `<div class="tile-index"></div>`
				html += "</td>"
			}
		}
		html += "</tr>"
	}
	html += "</table>"
	document.querySelector("#mapCanvas").innerHTML = html
}

const criarLista = (largura, altura) => {
	let lista = []
	for(let i = 0; i < (altura * largura); i++){
		lista.push(sky)
	}
	return lista
}

const instanciarGota = (x, y, mapWidth) =>{
	let indice = get1DPosition({x: x, y: y}, mapWidth)
	lista[indice] = gota
}

const randint = (min, max) => {
	return Math.round(Math.random() * (+max - +min) + +min)
}

const get1DPosition = (coords, mapWidth) => {
	return coords.x + mapWidth * coords.y
}

const posicionarGota = (x, y) => {
	instanciarGota(x, y, largura)
	let ny = y
	let contador = 0
	let interval = setInterval(() => {
		if(ny >= altura){
			clearInterval(interval)
		}
		instanciarGota(x, y + contador, largura)
		renderMatriz(lista, largura, altura)
		lista[get1DPosition({ x: x, y: ny }, largura)] = sky
		ny = y + contador
		contador = contador + 1
	}, 10)
}


const largura = 20
const altura = 20

lista = criarLista(largura, altura)

setInterval(()=> {
	posicionarGota(randint(0, largura - 1), 0)
}, 1)