import {ficha as Cassandra} from './chars/cassy.js'

let inputPool = document.querySelectorAll(".input")

console.log(inputPool.length)

renderChar(Cassandra)



function renderChar(char){

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

	// ALTERE AQUI
	inputPool[22].src = char.imgPath

	let spcList = document.querySelector(".perk-list-special")

	for (let x = 0 ; x < char.perks.special.length ; x++){

		let item = document.createElement("li")

		item.innerText = `${char.perks.special[x][0]}[${char.perks.special[x][1]}]`

		spcList.append(item)

	}

	let auConList = document.querySelector(".perk-list-auCon")

	for (let x = 0 ; x < char.perks.auCon.length ; x++){

		let item = document.createElement("li")

		item.innerText = `${char.perks.auCon[x][0]}[${char.perks.auCon[x][1]}]`

		auConList.append(item)

	}

	let empList = document.querySelector(".perk-list-emp")

	for (let x = 0 ; x < char.perks.emp.length ; x++){

		let item = document.createElement("li")

		item.innerText = `${char.perks.emp[x][0]}[${char.perks.emp[x][1]}]`

		empList.append(item)

	}

	let intList = document.querySelector(".perk-list-int")

	for (let x = 0 ; x < char.perks.int.length ; x++){

		let item = document.createElement("li")

		item.innerText = `${char.perks.int[x][0]}[${char.perks.int[x][1]}]`

		intList.append(item)

	}

	let refList = document.querySelector(".perk-list-ref")

	for (let x = 0 ; x < char.perks.ref.length ; x++){

		let item = document.createElement("li")

		item.innerText = `${char.perks.ref[x][0]}[${char.perks.ref[x][1]}]`

		refList.append(item)

	}

	let tecList = document.querySelector(".perk-list-tec")

	for (let x = 0 ; x < char.perks.tec.length ; x++){

		let item = document.createElement("li")

		item.innerText = `${char.perks.tec[x][0]}[${char.perks.tec[x][1]}] `

		tecList.append(item)

	}

	inputPool[23].innerText = "Rep : " + char.REP
	inputPool[24].innerText = "PE Atuais" + char.PEA
	inputPool[25].innerText = "Humanidade " + char.Humanidade

	let implantesTable = document.querySelector(".imp-table")

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


}