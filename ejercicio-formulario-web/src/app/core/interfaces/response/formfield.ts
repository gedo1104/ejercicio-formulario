export type InputType = 'text' | 'number' | 'email' | 'password' | 'date' | 'checkbox' | 'radio' | 'select';

export interface FormField {
  idPropiedad: number;
  label: string;
  name: string;
  type: InputType;
  required: boolean;
  readOnly: boolean;
  placeholder: string;
  maxLength: number;
  min: number;
  max: number;
  options: Array<SelectOption>;
}

export interface SelectOption {
  label: string;
  value: string;
}