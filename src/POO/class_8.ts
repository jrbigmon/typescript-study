// Abstract class 

export abstract class Player {
  constructor(protected name: string, protected life: number, protected power: number) {}

  atack (player : Player): void {
    this.voiceAttack()
    player.loseLife(this.power, this)
  }

  loseLife (power: number, playerAttack: Player) : void {
    this.life -= power;
    console.log(`${this.name} lose ${power} life points to ${playerAttack.name}`)
  }

  abstract voiceAttack(): void
}

export class Guard extends Player {
  voiceAttack(): void {
    console.log(`I ${this.name} will kill you!`)
  }
}
export class Monster extends Player {
  voiceAttack(): void {
    console.log(`I ${this.name} will devour you limb by limb`)
  }
}

const guard = new Guard('Galadriel', 1000, 200)
const org = new Monster('Uruk', 1000, 300)

guard.atack(org)
org.atack(guard)
