import Button from "./Button";

export default function Form() {
  return (
    <div>
      <form>
        <fieldset>
          <legend>General Information:</legend>
            <label>Test</label>
            <input></input>
            <label>Test2</label>
            <input></input>
            <label>Test3</label>
            <input></input>
        </fieldset>
        <fieldset>
          <legend>Education Experience:</legend>
            <label>Test</label>
            <input></input>
            <label>Test2</label>
            <input></input>
            <label>Test3</label>
            <input></input>
        </fieldset>
        <fieldset>
          <legend>Job Experience:</legend>
            <label>Test</label>
            <input></input>
            <label>Test2</label>
            <input></input>
            <label>Test3</label>
            <input></input>
        </fieldset>
        <Button type="submit" name="Submit"></Button>
      </form>
    </div>
  );
}
