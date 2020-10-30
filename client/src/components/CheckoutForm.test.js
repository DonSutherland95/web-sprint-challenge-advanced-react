import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //Arrange: Setting up of our react component
    render(<CheckoutForm />)
    //Act: extracting the part of dom we want to sets. Doing the behavoir
    const header = screen.queryByText(/Checkout Form/i)
    //Assert: testing that that change exists
    // expect(header).toBeInTheComponent();
    expect(header).toHaveTextContent(/Checkout Form/i);


});

test("form shows success message on submit with form details", async () => {

    render(<CheckoutForm />)

    
    const firstNameInput = screen.getByLabelText(/first name:/i);
    const lastNameInput = screen.getByLabelText(/last name:/i);
    const addressInput = screen.getByLabelText(/address:/i);
    const cityInput = screen.getByLabelText(/city:/i);
    const stateInput = screen.getByLabelText(/state:/i);
    const zipInput = screen.getByLabelText(/zip:/i);
    const button = screen.getByRole("button")

    fireEvent.change(firstNameInput, { target:{ value: 'donnie', name:'firstName'}});
    fireEvent.change(lastNameInput, { target:{ value: 'sutherland', name:'lastName'}});
    fireEvent.change(addressInput, { target:{ value: '123 street main road', name:'address'}});
    fireEvent.change(cityInput, { target:{ value: 'north carolina', name:'city'}});
    fireEvent.change(stateInput, { target:{ value: 'NC', name:'state'}})
    fireEvent.change(zipInput, { target:{ value: '12345', name:'zip'}})
    fireEvent.click(button);

    const showSuccessMessage = await screen.getByText(/Woo-hoo/i);
    expect(showSuccessMessage).toBeTruthy();


    
});
