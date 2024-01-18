import Button from "./Button";
import Fieldset from "./Fieldset";

export default function Form() {
  return (
    <div>
      <form>
        <Fieldset legend="General Information" />
        <Fieldset legend="Educational Experience" />
        <Fieldset legend="Job Experience" />
        <div>
          <Button type="submit" name="Submit" />
          <Button type="submit" name="Edit" />
        </div>
      </form>
    </div>
  );
}
