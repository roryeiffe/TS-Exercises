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
    readonly make: string
    readonly model: string

    speed_: number

    constructor(make:string, model:string, speed:number) {
        this.make = make;
        this.model = model;
        this.speed_ = speed;
    }

    public set speed(new_speed) {
        if(new_speed < 0) {
            console.log("negative speed");
            throw new Error("Can't have negative speed");
        }
        this.speed_ = new_speed;
    }

    drive(time:number) {
        return time * this.speed_ / 60;
    }
    
}

let car = new Car("a","b", 100);

car.speed = -90;
