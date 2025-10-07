class FlyingBird {
    fly() {
        console.log("I can fly");
    }
}
class SwimmingBird {
    swim() {
        console.log("I can swim");
    }
}
class Duck extends FlyingBird {
    quack() {
        console.log("I can quack");
    }
}
class Penguin extends SwimmingBird {
}
function make_bird_fly(bird) {
    bird.fly();
}
function make_bird_swim(bird) {
    bird.swim();
}
const duck = new Duck();
const penguin = new Penguin();
make_bird_fly(duck);
make_bird_swim(penguin);
