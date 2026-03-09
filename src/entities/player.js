import { keyboard } from "../input/keyboard.js"

export class Player{

    sprites = []
    current_sprite_index = 0
    speed = 5

    constructor(x, y, width, height,){
        this.x = x
        this.y = y
        this.width = width
        this.height = height
    
    }

    draw(ctx){
        const sprite = this.sprites[this.current_sprite_index]
        ctx.drawImage(sprite, this.x, this.y, this.width, this.height)
    }

    boot(){
        const img = new Image()
        img.src = '/public/images/001.webp'
        this.sprites[0] = img
        console.log(this.sprites)
    }

    update(){
        const left = keyboard.isPressed('a') ? 1 : 0;
        const right = keyboard.isPressed('d') ? 1 :0;
        const hSpeeed = (right - left) * this.speed
        this.x += hSpeeed
    }

}

