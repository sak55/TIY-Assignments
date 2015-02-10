
var assert = require("assert");
/**
 * @constructor Piece
 * @param String color of Piece: "white" or "black"
 * @param String name of Piece, e.g. "queen", "rook", "knight"
 * @param String position of Piece, e.g. "a7", "d8"
 */
function Piece(_color, _name, _position) {
  // Constructor
    this._color = _color;
    this._name = _name;
    this._position = _position;
}

it("should have Piece", function(){
    assert(Piece);
});

/** @property String _color of Piece passed to Constructor
 * @property String _name of Piece passed to Constructor
 * @property String _position of Piece passed to Constructor
 */

//Piece.prototype = {
//    getName: function (){
//        return this.name;
//        getFullName = {
//            return this.color + " " + this.name;
//        }
//    }
//};
//tests that we have a function piece

/** @method position
 * @returns String current position, e.g. "a8", "f3"
 */
Piece.prototype = {
    position: function() {
        return this._position;
    }
};
/** @method color
 * @returns String color of Piece: "white" or "black"
 */
Piece.prototype = {
    color: function() {
        return this._color;
    }
};
/** @method name
 * @returns String name of Piece, e.g. "queen", "rook", "knight"
 */

Piece.prototype = {
    name: function() {
        return this._name;
    }
};


/** @method abbrev
 * @returns String abbreviation of Piece, e.g. "white queen" == 'q'
 */

Piece.prototype = {
    abbrev: function() {
        return this._name.substring(0,1)
    }
}
 /** @method toString()
 * @return String for printing / debugging, e.g. "black queen d8"
 */

Piece.prototype = {
    toString: function() {
        return this._color + " " + this._name + " " + this._position
    }
}

 /** @method toHTML()
 * @return String HTML entity, e.g. "black knight" == "&#x265e"
 */
Piece.prototype = {
    toHTML: function() {
        return 
    }
};


/* @method toUTF8()
 * @return String UTF8 character, e.g. "black knight" == "\u265e"
 */
