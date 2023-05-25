import { render, screen } from "@testing-library/react";
import SendMail from "./SendMail";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store";
import userEvent from "@testing-library/user-event";

describe("Send Mail", () => {
  test("To", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SendMail />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText("To", { exact: true });
    expect(linkElement).toBeInTheDocument();
  });

  test("Subject", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SendMail />
        </BrowserRouter>
      </Provider>
    );
    const linkElement = screen.getByText("Subject", { exact: true });
    expect(linkElement).toBeInTheDocument();
  });

  test("Checking Button Click", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SendMail />
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

  test("Checking Button Click 2", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <SendMail />
        </BrowserRouter>
      </Provider>
    );
    // Act
    const buttonElement = screen.getAllByRole("button");
    userEvent.click(buttonElement[0]);

    // Assert
    const outputElement = screen.queryByText("Authentication Successful!", {
      exact: false,
    });
    expect(outputElement).toBeNull();
  });
});
