function parseCount(number) {
    try {
        let parseNumber = Number.parseFloat(number);
        if (isNaN(parseNumber)) {
            throw new Error ("Невалидное значение");
            }
            return parseNumber;
} catch (err) {
if (err.name !== "Невалидное значение") {
throw err;
}
}
}


function validateCount(number) {
    try {
        let parseNumber = parseCount(number);
        return parseNumber;
    } catch (err) {
        return err;
        }
}

class Triangle {
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        try {
            if (a + b < c || a + c < b || b + c < a) {
                throw new Error ("Треугольник с такими сторонами не существует");
                }
        } catch (err) {
            if (err.name !== "Треугольник с такими сторонами не существует") {
                throw err;
            }
        }
    }


    get perimeter() {
        let perimeter = this.a + this.b + this.c;
        if (perimeter === undefined){
            perimeter = "Ошибка! Треугольник не существует"
        }
        return perimeter;
    }

    get area() {
        let p = this.perimeter / 2;
        let area = Number((Math.sqrt (p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3));
        if (area === undefined){
            area = "Ошибка! Треугольник не существует"
        }
        return area;
    }

}

function getTriangle(a, b, c) {
    try {
        return getPerimeter(getTriangle);
    } catch (error) {
        console.log("Ошибка! Треугольник не существует");
    }
} 


    


