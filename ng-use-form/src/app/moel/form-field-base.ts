export class FormFieldBase<T>{

    //一般T传入string
    value : T;
    key : string;
    label : string;
    controlType:string;
    placeholder:string;

    constructor(options:{
        value?:T,
        key?:string,
        label?:string,
        required?:boolean,
        order?:number,
        controlType?:string,
        placeholder?:string
    } = {}){
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.controlType = options.controlType || '';
        this.placeholder = options.placeholder || '';
    }

}