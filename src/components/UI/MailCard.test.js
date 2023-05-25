import { act } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import MailCard from "./MailCard";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import userEvent from "@testing-library/user-event";

describe("Reading Mail", () => {
  test("Checking Button Click", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MailCard />
        </BrowserRouter>
      </Provider>
    );
    // Act

    act(() => {
      const buttonElement = screen.getAllByRole("button");
      userEvent.click(buttonElement[0]);
    });

    // Assert
    const outputElement = screen.queryByText("Authentication Successful!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });

  test("Subject", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MailCard />
        </BrowserRouter>
      </Provider>
    );
    // Act

    act(() => {
      const buttonElement = screen.getAllByRole("button");
      userEvent.click(buttonElement[0]);
    });

    // Assert
    const outputElement = screen.queryByText("Subject", {
      exact: false,
    });
    expect(outputElement).toBeInTheDocument();
  });

  test("From", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <MailCard />
        </BrowserRouter>
      </Provider>
    );
    // Act

    act(() => {
      const buttonElement = screen.getAllByRole("button");
      userEvent.click(buttonElement[0]);
    });

    // Assert
    const outputElement = screen.queryByText("From", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
