class Keyboard {
    static _instance = null

    constructor(){
        if(Keyboard._instance != null){
            return Keyboard._instance
        }
        this.keys = {}
        document.addEventListener('keydown', (e) => (
            this.keys[e.key] = true
        ))

        document.addEventListener('keyup', (e) => (
            this.keys[e.key] = false
        ))
        Keyboard._instance = this
    }

    isPressed(key){
        return this.keys[key]
    }

    static getInstance(){
        if(!Keyboard._instance){
            Keyboard._instance = new Keyboard()
        }
        return Keyboard._instance
    }
}

const keyboard = Keyboard.getInstance()
export{keyboard}