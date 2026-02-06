import {render,screen,fireEvent} from "@testing-library/react";
import {describe,it,expect} from 'vitest';
import Counter from "./Counter";


describe('Counter comp test',()=>{
    it('renders heading correctly',()=>{
    render(<Counter />);
    expect(screen.getByText("Counter Component")).toBeInTheDocument();
    })

    it('shows initial counter value as 0',()=>{
        render(<Counter />);
        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
    })

    it('increments counter on click of button',()=>{
        render(<Counter />);
  
        const button = screen.getByText(/Increment/i);
        fireEvent.click(button)
        expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();

    })


})

