export function renderChar(char){

	let inputPool = document.querySelectorAll(".input")

	// Valores crus, só vai na Tag e escreve texto nela

	inputPool[0].innerText = char.nome
	inputPool[1].innerText = char.role

	inputPool[2].innerText = char.attr.INT
	inputPool[3].innerText = char.attr.REF
	inputPool[4].innerText = char.attr.TEC
	inputPool[5].innerText = char.attr.AutCon
	inputPool[6].innerText = char.attr.ATR
	inputPool[7].innerText = char.attr.SOR
	inputPool[8].innerText = char.attr.MOV
	inputPool[9].innerText = char.attr.TCO
	inputPool[10].innerText = char.attr.EMP
	inputPool[11].innerText = char.attr.Correr
	inputPool[12].innerText = char.attr.Saltar
	inputPool[13].innerText = char.attr.Levantar

	inputPool[14].innerText = char.rd.cabeca
	inputPool[15].innerText = char.rd.torso
	inputPool[16].innerText = char.rd.bracoD
	inputPool[17].innerText = char.rd.bracoE
	inputPool[18].innerText = char.rd.pernaD
	inputPool[19].innerText = char.rd.pernaE

	inputPool[20].innerText = char.VIT
	inputPool[21].innerText = char.MTC

	inputPool[22].src = char.imgPath

	// --------------- PERKS ------------

	// Sumindo com o titulo de todas as pericias
	let titles = document.querySelectorAll(".perk-list-title")
	for(let t = 0; t < titles.length ; t++ ){		
		titles[t].style.display = "none"
	}

	// Renderizando exclusivamente as pericias do personagem
	for(let x in char.perks){

		let list = document.querySelector(".perk-list-"+x)

		let title = document.querySelector(".title-"+x)

		title.style.display = "block"

		list.innerHTML=""

		for(let y in char.perks[x]){

			// console.log(char.perks[x][y])

			let item = document.createElement("li")

			item.innerText = `${char.perks[x][y][0]} -> [ ${char.perks[x][y][1]} ]`

			list.append(item)			
		}
	}

	inputPool[23].innerText = "Rep : " + char.REP
	inputPool[24].innerText = "PE Atuais " + char.PEA
	inputPool[25].innerText = "Humanidade " + char.Humanidade

	// -------------- TABELA DE IMPLANTES -------------

	let implantesTable = document.querySelector(".imp-table")

	let implantesHeaderData = ["Tipo","PH","Preço"]

	generateTable(implantesHeaderData, char.implantes, implantesTable)

	// implantesTable.childNodes.forEach( (node,index) => {

	// 	if(index != 0){

	// 		node.addEventListener("mouseover",()=> {

	// 			let dialog = document.createElement("div")

	// 			dialog.className = "dialog"

	// 			dialog.innerText = "Teste"

	// 			node.parentElement.prepend(dialog)

	// 		})

	// 		node.addEventListener("mouseout",()=>{

	// 			node.parentElement.childNodes.forEach( child => {

	// 				if(child.className == "dialog"){ child.remove() }

	// 			})

	// 		})

	// 	}
		
	// })

	// -------------- TABELA DE ARMAS -------------

	let armasTable = document.querySelector(".armas-table")

	let armasHeaderData = ["Nome","Tipo","Precisão","Ocult.","Dispon.","Dano","Tiros","CdT","Conf"]

	generateTable(armasHeaderData, char.armas, armasTable)

	// -------------- TABELA DE EQUIPAMENTO -------------

	let equipoTable = document.querySelector(".equipo-table")

	let equipoHeaderData = ["Tipo","Peso","Preço"]

	generateTable(equipoHeaderData,char.equipo,equipoTable)

	// -------------- Funções Para Gerar Interface -------------

	function generateTable(header,data,table){
		// header -> Array com os titulos da tabela
		// data -> Matriz de dados a serem renderizados na tabela
		// table -> elemento HTML onde o material será renderizado

		table.innerHTML = ""

		let headerRow = document.createElement("tr")

		for (let h = 0 ; h < header.length ; h++){

			let headerCell = document.createElement("th")

			headerCell.innerText = header[h]

			headerRow.append(headerCell)

		}

		table.append(headerRow)

		for(let r = 0 ; r < data.length ; r++){

			let row = document.createElement("tr")

			for(let c = 0 ; c < data[r].length ; c++){

				let cell = document.createElement("td")

				cell.innerText = data[r][c]

				row.append(cell)

			}

			table.append(row)

		}

		return table

	}

}