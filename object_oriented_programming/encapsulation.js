class Polygon {
    constructor(height, width) {
        this.height = height
        this.width = width
    }

    get area() {
        return this.#calculateArea()
    }

    #calculateArea() {
        return this.height * this.width
    }
}

let polygon = new Polygon(50, 60)
console.log(polygon.area)