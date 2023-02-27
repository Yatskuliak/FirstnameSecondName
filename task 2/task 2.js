class Effectiveness{
    name;
    superEffective;
    neutral;
    notVeryEffective;

    constructor(name, superEffective, neutral, notVeryEffective) {
        this.name = name;
        this.superEffective = superEffective;
        this.neutral = neutral;
        this.notVeryEffective = notVeryEffective;
    }
}

const fire = 'Fire';
const water = 'Water';
const grass = 'Grass';
const electric = 'Electric';

const FIRE = new Effectiveness(fire, [grass], [electric], [water, fire]);
const WATER = new Effectiveness(water, [fire], [], [grass, electric, water]);
const GRASS = new Effectiveness(grass, [water], [electric], [fire, grass]);
const ELECTRIC = new Effectiveness(electric, [water], [grass, fire], [electric]);

const damage = (heroType, opponentType, attackPower, opponentDefense) => {
    return 50 * (attackPower/opponentDefense) * Effectiveness(heroType, opponentType)
}