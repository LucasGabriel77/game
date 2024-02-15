let des = document.getElementById('des').getContext("2d")

console.log(des)

// const quadrado1 = new obj(10,10,100,100,'orange')
// const quadrado2 = new obj(200,200,150,150, 'blue')
// const quadrado3 = new obj(300,300,150,150, 'blue')

// quadrado1.des_obj()
// quadrado2.des_quad()
// quadrado3.des_quad()

const carro = new obj(400,400,100,100, 'blue')
carro.des_car()

document.addEventListener('keydown', (e)=>{
    if(e.key === 'a'){console.log(e)}
    else if(e.key === 'w'){console.log(e)}
    else if(e.key === 's'){console.log(e)}
    else if(e.key === 'd'){console.log(e)}

    
    }

)

document.addEventListener('keyup', (e)=>{
    // console.log(e)
}
)