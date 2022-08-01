import {ficha as Cassandra} from './chars/cassy.js'
import {ficha as Galadriel} from './chars/galadry.js'
import {ficha as Bud} from './chars/bud.js'
import {renderChar} from './render.js'

renderChar(Cassandra)

let buttons = document.querySelectorAll(".ctr-btn")

buttons[0].addEventListener("click",()=>renderChar(Cassandra))

buttons[1].addEventListener("click",()=>renderChar(Galadriel))

buttons[2].addEventListener("click",()=>renderChar(Bud))
