class Metaball {
    constructor(m) {
        this.m = m;
        this.dir = createVector(random(-1, 1), random(-1, 1));
        this.dir = this.dir.normalize();
        this.radius = random(1, 6);
        this.pos = createVector(random(-gfx.width/2+this.radius, gfx.width/2-this.radius), random(-gfx.height/2+this.radius, gfx.height/2-this.radius) );
    }

    update(s) {

        if(this.m == 10){
            this.pos.x = (mouseX - gfx.width)/4 - gfx.width/4;
            this.pos.y = (mouseY - gfx.height) / 4 - gfx.height/4;
        }else{

            this.pos.x += this.dir.x * s;
            this.pos.y += this.dir.y * s;

            if (abs(this.pos.x) + this.radius > gfx.width / 2) {
                this.dir.x *= -1;
            }
            if (abs(this.pos.y) + this.radius > gfx.height / 2) {
                this.dir.y *= -1;
            }

        }
    }
}