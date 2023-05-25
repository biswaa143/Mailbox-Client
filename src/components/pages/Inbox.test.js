import { render, screen } from "@testing-library/react";
import Inbox from "./Inbox";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import userEvent from "@testing-library/user-event";

describe("Sign In", () => {
  test("Checking Button Click", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Inbox />
        </BrowserRouter>
      </Provider>
    );
    // Act
    const buttonElement = screen.getAllByRole("button");
    userEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByText("Please Enter Correct Details!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });

  test("Checking Blue Dot", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Inbox />
        </BrowserRouter>
      </Provider>
    );
    // Act
    const buttonElement = screen.getAllByRole("button");
    userEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByText("primary", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
