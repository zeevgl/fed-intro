class Parent {
  public foo() {
  }

}

class Child extends Parent {
    private name: string;
    private age: number;
    public eat( food: Food): void {
        console.log( 'eat' );
    }
  public override foo() {
  }
}

interface Food {
    name: string;
    taste: string;
    //...
}