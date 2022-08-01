export var ficha = {
	id:1,
	nome:"Buddy Weiser",
	role:"Midia",
	attr:{
		INT:5,
		REF:6,
		TEC:8,
		AutCon:9,
		ATR:10,
		SOR:9,
		MOV:10,
		TCO:7,
		EMP:9,
		Correr:30,
		Saltar:7.5,
		Levantar:40
	},
	rd:{
		cabeca:0,
		torso:0,
		bracoD:0,
		bracoE:0,
		pernaD:0,
		pernaE:0
	},
	VIT:13,
	MTC:2,
	imgPath:"./assets/bud.png",
	perks:{
		special:[
			["Credibilidade",4],
			["Recursos",4],
			["Negociar",4]
		],
		auCon:[
			["Manha",4]
		],
		emp:[
			["Percepção",4],
			["Entrevista",4],
			["Sedução",4],
			["Persuasão e Lábia",4]
		],
		int: [
			["Atenção/Notar",4],
			["Composição",4],
			["Educação e Cultura Geral",4],
			["Esconder/Evadir",3],
			["Idioma",2],
			["Programação",2]
		],
		ref: [
			["Artes Marciais",2],
			["Furtividade",3]
		],
		tec: [
			["Fotografia e Filmagem",4],
			["Tocar Instrumento",4]
		]
	},
	REP:2,
	PEA:0,
	Humanidade:0,
	implantes:[
		["Bolso Subcutaneo",0,0],
		["Armadura Subcutanea",0,0],
		["Gravador Digital",0,0],
		["Anticorpos Reforçados",0,0],
		["Nano Cirurgiões",0,0],
		["Time Square Marquee",0,0],
		["Proteção Ante Ofuscante",0,0]
	],
	armas:[],
	equipo:[
		["Apartamento Medio",0,0],
		["Moto Aprimorada Off-Road",0,0],
		["Estudio de Video - Utencilios Gravar e Editar",0,0],
		["500k Seguidores",0,0],
		["Capa Invisibilidade",0,0]
	]
}