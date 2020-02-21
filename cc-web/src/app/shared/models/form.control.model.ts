export enum ControlType {
  Input = 1,
  Button,
  Select,
  MultiSelect,
  RadioButton,
  CheckBox,
  DynamicCollection,
  HTMLTag
}

export enum DataType {
  All = 1,
  Text,
  Number,
  Date,
  DateTime,
  Time
}

export enum Allow {
  Custom = 1,
  AnyChars,
  Only_A_Z,
  Only_0_9,
  Only_A_Z_and_0_9,
  Only_0_9_and_2_Digits,
  Only_0_9_and_Many_Digits
}

export interface IOption {
  value: string;
  text: string;
  selected?: boolean;
}

export interface IBaseControlConfig {
  name: string;
  controlType: ControlType;
}

export interface IControlConfig extends IBaseControlConfig {
  required?: boolean;
  errorMessage?: string;
  placeHolder?: string;
}

export interface DynamicCollection extends IBaseControlConfig {
  title: string;
  controls: IControlConfig[];
}

export interface IFormConfig {
  formTitle: string;
  controls: IControlConfig[];
}

export class FormConfig implements IFormConfig {
  formTitle: string;
  controls: IControlConfig[];
  constructor() {
    this.controls = [];
  }
}

export class ControlConfig implements IControlConfig {
  name: string;
  required?: boolean;
  errorMessage?: string;
  placeHolder?: string;
  controlType: ControlType;

  constructor(name: string,
              controlType: ControlType,
              required?: boolean,
              placeHolder?: string,
              errorMessage?: string) {
      this.name = name;
      this.controlType = controlType;
      this.required = required;
      this.placeHolder = placeHolder;
      this.errorMessage = errorMessage;
  }
}

export class InputConfig extends  ControlConfig {
  type: DataType;
  value?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  errorMessage?: string;
  placeHolder?: string;
  restriction?: Allow;

  constructor(name: string,
              type?: DataType,
              value?: string,
              required?: boolean,
              minLength?: number,
              maxLength?: number,
              placeHolder?: string,
              errorMessage?: string,
              restriction?: Allow) {
                super( name, ControlType.Input, required, placeHolder, errorMessage);
                this.value = value;
                this.required = required;
                this.minLength = minLength;
                this.maxLength = maxLength;
                this.placeHolder = placeHolder;
                this.errorMessage = errorMessage;
                this.type =  (type) ? type : DataType.All;
                this.restriction = (restriction) ? restriction : Allow.AnyChars;
  }
}

export class SelectConfig extends ControlConfig {
  selectedValue: string[] = [];
  multiSelect: boolean;
  options: IOption[] = [];

  constructor(name: string,
              options: IOption[],
              required: boolean,
              placeHolder: string,
              errorMessage: string,
              selectedValue?: string[],
              multiSelect?: boolean) {
                super(name, ControlType.Select, required, placeHolder, errorMessage);
                this.selectedValue = (selectedValue) ? selectedValue : [''];
                this.multiSelect = multiSelect;
                this.options = options;
  }
}

export class OptionConfig extends ControlConfig {
  options: IOption[] = [];
  title: string;
  selectedValues: IOption[] = [];
  constructor(name: string,
              title: string,
              controlType: ControlType,
              options: IOption[],
              required: boolean,
              errorMessage: string
              ) {
                super(name, controlType, required, undefined, errorMessage);
                this.options = options;
                this.title = title;
            }
}

export class CheckboxConfig extends OptionConfig {

  constructor(name: string,
              title: string,
              options: IOption[],
              required: boolean,
              errorMessage: string
              ) {
                super(name, title, ControlType.CheckBox, options, required, errorMessage);
              }
}


export class RadioConfig extends OptionConfig {

  constructor(name: string,
              title: string,
              options: IOption[],
              required: boolean,
              errorMessage: string
              ) {
                super(name, title, ControlType.RadioButton, options, required, errorMessage);
  }
}
