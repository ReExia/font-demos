import { FormFieldBase } from './form-field-base';

export class FormTextArea extends FormFieldBase<string>{

    //覆盖父辈的controlType
    controlType = 'textarea';
    
    rows : number;

    constructor(options:{} = {}){
            super(options);
            this.rows = options['rows'] || 1;
    }

}