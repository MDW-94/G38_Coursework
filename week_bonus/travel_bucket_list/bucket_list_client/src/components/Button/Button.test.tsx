import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import userEvent from '@testing-library/user-event';

describe("Button", () => {
  it("display a label", () => {
    render(<Button>Submit</Button>); // rendered my button
    const button = screen.getByRole('button'); //got my button from a fake screen
    expect(button.textContent).toEqual('Submit');
  });

  it("fires onClick when clicked", async () => {
    const onClickSpy = jest.fn();
    render(<Button onClick={onClickSpy}> Submit </Button>);
    const button = screen.getByRole('button');
    // click the button
    await userEvent.click(button)
    // expect that onClick was called
    expect(onClickSpy).toHaveBeenCalled();
  });
});


// bucket_list_client> npm test
// cmd + . to import feature into file
// https://testing-library.com/
// https://jestjs.io/
