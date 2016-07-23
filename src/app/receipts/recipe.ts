export class Recipe {
    // Les paramètres dans ce constructeur font beaucoup de choses grâce à Typescript :
    // 1 - Déclare un paramètre au contructeur et son type
    // 2 - Déclare une propriété public du même nom
    // 3 - Initialise cette propriété avec la valeur du paramètre correspondant lorqu'on instancie cette classe
    constructor(
        // public id: number,
        public title: string,
        public slug: string,
        public time: string,
        public picture: string,
        public ingredients: Array<string>,
        public steps: Array<string>,
        public category: string
    ) {}

}
