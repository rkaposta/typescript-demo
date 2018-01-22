namespace ClassCompatibility {

    class Animal {
        private feet: number;
        constructor(name: string, numFeet: number) { }
    }

    class Animal2 extends Animal {
        asd: string;
        constructor(name: string, numFeet: number) { 
            super(name, numFeet);
        }
    }

    class Size {
        private feet: number;
        constructor(numFeet: number) { }
    }

    let a: Animal;
    let a2: Animal2;
    let s: Size;

     a = a2;
     a2 = a; 



    interface SuperInterface {
        label: string;
        readonly x: number;
        readOnlyArray: ReadonlyArray<number>;
        color?: string;
    }

    let num: number[] = [1, 2, 3, 4];
    let obj: SuperInterface = { label: 'label', x: 5, readOnlyArray: num }

    // obj.readOnlyArray[0] = 2;
    // console.log(obj.readOnlyArray);

    num = obj.readOnlyArray as number[];
    num.push(5);


    class Control {
        select(): void {console.log();};
    private state: any;
}
interface SelectableControl extends Control {
    select(): void;
}




}