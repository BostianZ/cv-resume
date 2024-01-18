import Input from "./Input";
import Textarea from "./Textarea";

export default function Fieldset(props) {
  return (
    <fieldset>
      <legend>{props.legend}</legend>
      <Input label="Test1" type="text" />
      <Input label="Test1" type="text" />
      <Input label="Test1" type="text" />
      {props.legend.startsWith("J") ? <Textarea /> : false}
    </fieldset>
  );
}
