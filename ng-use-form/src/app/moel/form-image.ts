import { FormFieldBase } from './form-field-base';


export class FormImage extends FormFieldBase<string>{
    
    controlType = 'image';
    src : string;

    constructor(options : {} = {}){
        super(options);
        //比原型增加的，自己独有的
        this.src = options['src'] || '';
    }    

}