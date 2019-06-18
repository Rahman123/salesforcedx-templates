
// tslint:disable-next-line:no-var-requires
const GENERATOR = require('yeoman-generator');

export interface StringKeyValueObject<V> {
    [opt: string]: V;
}
export type OptionsMap = StringKeyValueObject<string>;

export type Answers = StringKeyValueObject<string>;

export default class ApexClassCreateGenerator extends GENERATOR {
    private apiName: string;
    constructor(args: string | string[], options: OptionsMap) {
        super(args, options);
        this.sourceRoot (__dirname);
        this.argument('apiName', {
            desc: 'The name of the Apex class',
            required: false,
            type: 'String',
            defaults: ''
        });
        this.options('name');
    }
    public writing() {
        this.fs.copyTpl(
        this.templatePath('templates/DefaultApexClass.cls'),
        this.destinationPath(this.apiName + '.cls'),
        { apiName: this.apiName}
            );
    }
}