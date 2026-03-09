import { Player } from "./entities/player.js";

const canvas = document.getElementById('game')
const ctx = canvas.getContext('2d')

const entities = []
const p1 = new Player(10, 10, 100, 100)
entities.push(p1)

function boot(){
    entities.forEach((entity) => {
        entity.boot()
    })
}

function main(ts){
    requestAnimationFrame(main);
    ctx.clearRect(0, 0, 800, 600)
    update()
    draw(ctx)
}

function update(){
    entities.forEach((entity) =>(
        entity.update()
    ))
}

function draw(ctx){
    entities.forEach((entity) => {
        entity.draw(ctx)
    })
}


boot()
main()