class obj{
    constructor(x,y,w,h,a){
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.a = a
    }
    
    des_obj(){
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }
    des_quad(){
        // des.beginPath() // começo do obj
        des.strokeStyle = this.a
        des.lineWidth = '4'
        des.rect(this.x,this.y,this.w,this.h)
        // des.closePath() // fim do obj
        des.stroke()    
    }
}