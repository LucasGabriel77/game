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
    des_car(){
        //trapezio  do carro
        des.beginPath()
        des.moveTo(this.x,this.y)
        des.lineTo(this.x+50, this.y)
        des.lineTo(this.x+40, this.y-50)
        des.lineTo(this.x+10, this.y-50)
        des.closePath()
        des.lineWidth = '4'
        des.strokeStyle = 'black'
        des.fillStyle = this.a
        des.stroke()
        des.fill()
    
        
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'blue'
        des.fillStyle = this.a
        des.rect(this.x+10,this.y-70,30,20)
        des.closePath()
        des.stroke()
        des.fill()}
    
    // des_car(){
    //     des.beginPath()
    //     des.moveTo(this.x,this.y)
    //     des.lineTo(this.x+150, this.y)
    //     des.lineTo(this.x+150,this.y+150)
    //     des.lineTo(this.x,this.y+150)
    //     des.lineTo(this.x-10,this.y-10)
    //     des.closePath()
    //     des.lineWidth = '4'
    //     des.strokeStyle = 'black'
    //     des.fillStyle = this.a
    //     des.stroke()
    //     des.fill()
    // }
}