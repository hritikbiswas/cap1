// Problem-1 Rectangle Object

// Create a rectangle object with length and width properties
// Create two methods area and perimeter, that will return the area and perimeter of the rectangle

let rectangle={
    length:0,
    width:0,
    setLength:function(newLength){
        this.length=newLength;
    },
    setWidth:function(newWidth){
        this.width=newWidth;
    },
    area:function(){
        return this.length*this.width;
    },
    perimeter:function(){
        return 2*(this.length+this.width);
    },

};
rectangle.setLength(6);
rectangle.setWidth(12);

console.log(`Area: ${rectangle.area()}`);
console.log(`perimeter: ${rectangle.perimeter()}`);

