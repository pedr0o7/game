class Retangulo {

    constructor(x,y,altura,largura,cor){
        this.x=x;
        this.y=y;
        this.altura=altura;
        this.largura=largura;
        this.cor=cor;
        this.vx=0;
        this.vy=0;
        this.ang=0;
    }
    
    update() {
        this.x+=this.vx;
        this.y+=this.vy;
        
    }

    draw(ctx){
       
        ctx.fillStyle=this.cor;
        ctx.translate(+this.x,+this.y)
        ctx.rotate(this.ang*Math.PI/180)
        ctx.fillRect(-this.largura/2,-this.altura/2,this.largura,this.altura);
        ctx.rotate(-this.ang*Math.PI/180)
        ctx.translate(-this.x,-this.y)
    }
}