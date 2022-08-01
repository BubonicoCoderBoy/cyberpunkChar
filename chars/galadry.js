export var ficha = {
	id:1,
	nome:"Galadriel",
	role:"Rockeira",
	attr:{
		INT:3,
		REF:10,
		TEC:3,
		AutCon:9,
		ATR:7,
		SOR:4,
		MOV:6,
		TCO:10,
		EMP:7,
		Correr:18,
		Saltar:4.5,
		Levantar:10
	},
	rd:{
		cabeca:0,
		torso:0,
		bracoD:0,
		bracoE:0,
		pernaD:0,
		pernaE:0
	},
	VIT:14,
	MTC:0,
	imgPath:"./assets/galadry.jpg",
	perks:{
		special:[
			["Familia",3],
			["Resistencia",6]
		],
		int: [
			["Atenção/Notar",1],
			["Sobrevivencia",5]
		],
		ref: [
			["Atletismo",6],
			["Briga",10],
			["Condução",2],
			["Artes Marciais - Boxe",7],
			["Armas Brancas - Porrete",4],
			["Fuzil",2]
		],
		tec: [
			["Tecnologia Básica",1]
		]
	},
	REP:2,
	PEA:0,
	Humanidade:0,
	implantes:[
		["Amplificador Sandevistan",0,0],
		["Intensificador de Adrenalina",0,0],
		["Pele Reforçada",0,0],
		["Soqueira de Aço",0,0],
		["Ariete Hidráulico",0,0],
		["Articulação Reforçada",0,0],
		["Armação - B",0,0],
		["Arma Retratil - Militech Elect. Canhão Laser",0,0]
	],
	armas:[],
	equipo:[]
}