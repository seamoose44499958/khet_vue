export class Coord{

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    set x(value){
        if(typeof value !== 'number'){
            throw new TypeError("Coordinate x must be a number");
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

        this._y = value;
    }

    get y(){
        return this._y;
    }

    toString(){
        return "#c" + this._x + "_" + this._y;
    }

}