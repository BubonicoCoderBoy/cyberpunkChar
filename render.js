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

			item.innerText = `${char.perks[x][y][0]} [${char.perks[x][y][1]}]`

			list.append(item)			
		}
	}

	// -------------- IMPLANTES -------------

	inputPool[23].innerText = "Rep : " + char.REP
	inputPool[24].innerText = "PE Atuais " + char.PEA
	inputPool[25].innerText = "Humanidade " + char.Humanidade

	let implantesTable = document.querySelector(".imp-table")

	implantesTable.innerHTML = ""	

	let headerRow = document.createElement("tr")

	let tableHeader1 = document.createElement("th")
	tableHeader1.innerText = "Tipo"
	let tableHeader2 = document.createElement("th")
	tableHeader2.innerText = "PH"
	let tableHeader3 = document.createElement("th")
	tableHeader3.innerText = "Preço"

	headerRow.append(tableHeader1)
	headerRow.append(tableHeader2)
	headerRow.append(tableHeader3)

	implantesTable.append(headerRow)

	for (let x = 0 ; x < char.implantes.length ; x++){

		let row = document.createElement("tr")

		let data1 = document.createElement("td")
		data1.innerText = char.implantes[x][0]

		let data2 = document.createElement("td")
		data2.innerText = char.implantes[x][1]

		let data3 = document.createElement("td")
		data3.innerText = char.implantes[x][2]

		row.append(data1)
		row.append(data2)
		row.append(data3)

		implantesTable.append(row)

	}

	// -------------- ARMAS -------------

	let armasTable = document.querySelector(".armas-table")

	armasTable.innerHTML = ""	

	headerRow = document.createElement("tr")

	tableHeader1 = document.createElement("th")
	tableHeader1.innerText = "Nome"

	tableHeader2 = document.createElement("th")
	tableHeader2.innerText = "Tipo"

	tableHeader3 = document.createElement("th")
	tableHeader3.innerText = "Precisão"

	let tableHeader4 = document.createElement("th")
	tableHeader4.innerText = "Ocult."

	let tableHeader5 = document.createElement("th")
	tableHeader5.innerText = "Dispon."

	let tableHeader6 = document.createElement("th")
	tableHeader6.innerText = "Dano"

	let tableHeader7 = document.createElement("th")
	tableHeader7.innerText = "Tiros"

	let tableHeader8 = document.createElement("th")
	tableHeader8.innerText = "CdT"	

	let tableHeader9 = document.createElement("th")
	tableHeader9.innerText = "Conf"			

	headerRow.append(tableHeader1)
	headerRow.append(tableHeader2)
	headerRow.append(tableHeader3)
	headerRow.append(tableHeader3)
	headerRow.append(tableHeader4)
	headerRow.append(tableHeader5)
	headerRow.append(tableHeader6)
	headerRow.append(tableHeader7)
	headerRow.append(tableHeader8)
	headerRow.append(tableHeader9)

	armasTable.append(headerRow)

	for (let x = 0 ; x < char.armas.length ; x++){

		let row = document.createElement("tr")

		let data1 = document.createElement("td")
		data1.innerText = char.armas[x][0]

		let data2 = document.createElement("td")
		data2.innerText = char.armas[x][1]

		let data3 = document.createElement("td")
		data3.innerText = char.armas[x][2]

		let data4 = document.createElement("td")
		data4.innerText = char.armas[x][3]

		let data5 = document.createElement("td")
		data5.innerText = char.armas[x][4]

		let data6 = document.createElement("td")
		data6.innerText = char.armas[x][5]

		let data7 = document.createElement("td")
		data7.innerText = char.armas[x][6]

		let data8 = document.createElement("td")
		data8.innerText = char.armas[x][7]

		let data9 = document.createElement("td")
		data9.innerText = char.armas[x][8]

		row.append(data1)
		row.append(data2)
		row.append(data3)
		row.append(data4)
		row.append(data5)
		row.append(data6)
		row.append(data7)
		row.append(data8)
		row.append(data9)

		armasTable.append(row)

	}

	// -------------- Equipo -------------

	let equipoTable = document.querySelector(".equipo-table")

	equipoTable.innerHTML = ""

	headerRow = document.createElement("tr")

	tableHeader1 = document.createElement("th")
	tableHeader1.innerText = "Tipo"
	tableHeader2 = document.createElement("th")
	tableHeader2.innerText = "Preço"
	tableHeader3 = document.createElement("th")
	tableHeader3.innerText = "Peso"

	headerRow.append(tableHeader1)
	headerRow.append(tableHeader2)
	headerRow.append(tableHeader3)

	equipoTable.append(headerRow)

	console.log(char.equipo.length)

	for (let x = 0 ; x < char.equipo.length ; x++){

		let row = document.createElement("tr")

		let data1 = document.createElement("td")
		data1.innerText = char.equipo[x][0]

		let data2 = document.createElement("td")
		data2.innerText = char.equipo[x][1]

		let data3 = document.createElement("td")
		data3.innerText = char.equipo[x][2]

		row.append(data1)
		row.append(data2)
		row.append(data3)

		equipoTable.append(row)

	}
}