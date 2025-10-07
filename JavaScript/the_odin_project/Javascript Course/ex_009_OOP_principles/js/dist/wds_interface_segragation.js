// first example (don't do this)
// interface Entity {
//     attack_damage: number;
//     health: number;
//     name: string;
//     move(): void;
//     attack(): void;
//     take_damage(amount: number): void;
// }
// class Character implements Entity {
//     move(): void {
//     }
//     attack(): void {
//     }
//     take_damage(amount: number): void {
//     }
// }
// class Turret implements Entity {
//     move(): void {
//     }
// }
// second example (don't do this)
// class Entity {
//     name
//     attack_damage,
//     health
//     constructor(name: string, attack_damage: number, health: number) {
//         this.name = name;
//         this.attack_damage = attack_damage;
//         this.health = health;
//     }
//     move() {
//         console.log(`${this.name} moved`);
//     }
//     attack(target_entity: Entity) {
//         console.log(`${this.name} attacked ${target_entity.name} for ${this.attack_damage} damage`);
//         target_entity.take_damage(this.attack_damage);
//     }
//     take_damage(attack_damage: number) {
//         this.health -= attack_damage;
//         console.log(`${this.name} has ${this.health} health remaining`);
//     }
// }
// class Character extends Entity {
// }
// class Wall extends Entity {
//     constructor(name: string, health: number) {
//         super(name, 0, health)
//     }
//     move() {
//         return null;
//     }
//     attack() {
//         return null
//     }
// }
// class Turret extends Entity {
//     constructor(name: string, attack_damage: number) {
//         super(name, attack_damage, -1);
//     }
//     move() {
//         return null;
//     }
//     take_damage() {
//         return null;
//     }
// }
// const turret = new Turret("Turret", 5);
// const character = new Character("Char", 2, 100);
// const wall = new Wall("Wall", 500);
// turret.attack(character);
// character.move();
// character.attack(wall);
// third example
class Entity {
    name;
    constructor(name) {
        this.name = name;
    }
}
const mover = {
    move() {
        console.log(`${this.name} moved`);
    }
};
const attacker = {
    attack(target_entity) {
        console.log(`${this.name} attacked ${target_entity.name} for ${this.attack_damage} damage`);
        target_entity.take_damage(this.attack_damage);
    }
};
const has_health = {
    take_damage(attack_damage) {
        this.health -= attack_damage;
        console.log(`${this.name} has ${this.health} health remaining`);
    }
};
class Character extends Entity {
    attack_damage;
    health;
    constructor(name, attack_damage, health) {
        super(name);
        this.attack_damage = attack_damage;
        this.health = health;
    }
}
Object.assign(Character.prototype, mover);
Object.assign(Character.prototype, attacker);
Object.assign(Character.prototype, has_health);
class Wall extends Entity {
    health;
    constructor(name, health) {
        super(name);
        this.health = health;
    }
}
Object.assign(Wall.prototype, has_health);
class Turret extends Entity {
    attack_damage;
    constructor(name, attack_damage) {
        super(name);
        this.attack_damage = attack_damage;
    }
}
Object.assign(Turret.prototype, attacker);
const turret = new Turret("Turret", 5);
const character = new Character("Char", 2, 100);
const wall = new Wall("Wall", 500);
turret.attack(character);
character.move();
character.attack(wall);
