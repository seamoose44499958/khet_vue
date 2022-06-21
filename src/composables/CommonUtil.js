export class Piece{

    constructor(ref,angle,color,x,y,maxX,maxY) {
        this.ref = ref;
        this.color = color;
        this.maxX = maxX;
        this.maxY = maxY;
        this.x = x;
        this.y = y;
        if([0,90,180,270].includes(angle)) {
            this._angle = angle;
        }
        else{
            throw new Error("Improper angle");
        }

    }

    get angle(){
        return this._angle + "deg"
    }

    set x(value){
        if(typeof value !== 'number'){
            throw new TypeError("Coordinate x must be a number");
        }
        if(value > this.maxX || value < 0){
            throw new Error("Coordinate is out of bounds of min and max");
        }

        this._x = value;
    }

    get x(){
        return this._x;
    }

    set y(value){
        if(typeof value !== 'number'){
            throw new TypeError("Coordinate y must be a number");
        }
        if(value > this.maxY || value < 0){
            throw new Error("Coordinate is out of bounds of min and max");
        }

        this._y = value;
    }

    get y(){
        return this._y;
    }

    set maxX(value){
        if(typeof value !== 'number'){
            throw new TypeError("Coordinate y must be a number");
        }

        this._maxX = value;
    }

    get maxX(){
        return this._maxX;
    }

    set maxY(value){
        if(typeof value !== 'number'){
            throw new TypeError("Coordinate y must be a number");
        }

        this._maxY = value;
    }

    get maxY(){
        return this._maxY;
    }

    rotate180(){
        this._angle = (this._angle +  180) % 360
        this._x = this._maxX - this._x;
        this._y = this._maxY - this._y;
    }

    getCoord(){
        return "#c" + this._x + "_" + this._y;
    }

}

export function rotateBoard180(...pieces){
    for(let i = 0;i < pieces.length;i++){
        if(pieces[i] instanceof Piece) {
            pieces[i].rotate180();
        }
        else{
            throw new TypeError("pieces array should only contain piece objects")
        }
    }
}
