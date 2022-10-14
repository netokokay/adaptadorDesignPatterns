interface Duck {
  doQuack(): void;
  fly(): void;
}

interface Chicken {
  doCocorico(): void;
  fly(): void;
}

class CapoeiraChicken implements Chicken {
  doCocorico(): void {
    console.log("Cocorico!");
  }

  fly(): void {
    console.log("**Vôo patético**");
  }
}

// Duck chicken adapter
class DuckChickenAdapter implements Duck {
  private chicken: Chicken;

  constructor(chicken: Chicken) {
    this.chicken = chicken;
  }

  doQuack() {
    this.chicken.doCocorico();
  }

  fly() {
    this.chicken.fly();
  }
}

const runExercise = () => {
  let differentiatedDuck = new DuckChickenAdapter(new CapoeiraChicken());
  differentiatedDuck.doQuack();
};

runExercise();