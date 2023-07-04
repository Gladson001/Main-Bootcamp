class UberPrice {
    constructor(distance, cartype) {
        this.distance = distance;
        this.cartype = cartype;
    }

    calculateprice() {
        let basicfare, costperkm, totalprice;

        switch (this.cartype) {

            case "ubermicro":
                basicfare = 10;
                costperkm = 5;
                break;

            case "ubermini":
                basicfare = 8;
                costperkm = 4;
                break;

            case "ubersedan":
                basicfare = 20;
                costperkm = 10;
                break;

            default:
                throw new Error("Invalid car type.");

        }

        totalprice = basicfare + costperkm * this.distance;
        return totalprice;
    }

}

const fare = new UberPrice(10, "ubermicro");
const price = fare.calculateprice();
console.log(price);  

/*
OUTPUT:

price: 60
