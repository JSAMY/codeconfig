import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

export enum ControlType {
  Input = 1,
  Button,
  Select,
  MultiSelect,
  RadioButton,
  CheckBox,
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
}

export interface IBaseControl {
  name: string;
  required?: boolean;
  errorMessage?: string;
  placeHolder?: string;
  controlType: ControlType;
}

export class BaseControl implements IBaseControl {
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

export class InputControl extends  BaseControl {
  type: DataType;
  defaultValue?: string;
  minLength?: number;
  maxLength?: number;
  required?: boolean;
  errorMessage?: string;
  placeHolder?: string;
  restriction?: Allow;

  constructor(name: string,
              type?: DataType,
              defaultValue?: string,
              required?: boolean,
              minLength?: number,
              maxLength?: number,
              placeHolder?: string,
              errorMessage?: string,
              restriction?: Allow) {
                super( name, ControlType.Input, required, placeHolder, errorMessage);
                this.defaultValue = defaultValue;
                this.required = required;
                this.minLength = minLength;
                this.maxLength = maxLength;
                this.placeHolder = placeHolder;
                this.errorMessage = errorMessage;
                this.type =  (type) ? type : DataType.All;
                this.restriction = (restriction) ? restriction : Allow.AnyChars;
  }
}

export class SelectControl extends BaseControl {
  SelectedValue: string;
  SelectedText: string;
  MultiSelect: boolean;
  options: IOption[] = [];

  constructor(name: string,
              options: IOption[],
              required: boolean,
              placeHolder: string,
              errorMessage: string,
              selectedValue?: string,
              selectedText?: string,
              multiSelect?: boolean) {
                super(name, ControlType.Select, required, placeHolder, errorMessage);
                this.SelectedText = (selectedText) ? selectedText : '';
                this.SelectedValue = (selectedValue) ? selectedValue : '';
                this.MultiSelect = multiSelect;
                this.options = options;
  }
}
