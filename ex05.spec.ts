import {describe, expect, test} from "@jest/globals";

/*
    Fill out the Car class so that all of the tests pass.
    Commands:
    ```
    tsc
    jest ex05.spec.ts
    ```
*/

class Car {
        
}


describe('Car Tests', () => {
    test('Create car', () => {
    const car = new Car("Toyota", "Corolla", 60);
    expect(car.make).toBe("Toyota");
    expect(car.model).toBe("Corolla");
    expect(car.speed).toBe(60);
    });

    test ('Drive 30 minutes', () => {
        const car = new Car("Honda", "Civic", 30);
        expect(car.drive(30)).toBe(15)
    });

    test ('Set Speed', () => {
        const car = new Car("Honda", "Civic", 30);
        car.speed = 100;
        expect(car.speed).toBe(100);
    })

    test ('No negative speed', () => {
        const car = new Car("Honda", "Accord", 70);
            expect(() => {car.speed = -90}).toThrow(new Error("Can't have negative speed"))
        
    });

  });