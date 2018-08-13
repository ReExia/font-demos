import { FormFieldBase } from './form-field-base';

export class FormTextBox extends FormFieldBase<string>{

    controlType = "textbox";
    type : string;
    
    constructor(options : {} = {}){
        super(options);
        this.type = options['type'] || '';
    }


}