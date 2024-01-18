import Input from "./Input";

export default function Fieldset(props) {
  return (
    <fieldset>
      <legend>{props.legend}</legend>
      <Input label="Test1" type="text" />
      <Input label="Test1" type="text" />
      <Input label="Test1" type="text" />
    </fieldset>
  );
}
