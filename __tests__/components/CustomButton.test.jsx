import '@testing-library/jest-dom';
import {render,screen,fireEvent} from '@testing-library/react';
import {CustomButton} from '../../src/components/CustomButton/CustomButton';
import { Inter } from "next/font/google";
const interRegular = Inter({
    weight: "400",
    subsets: ["latin"],
  });
  
describe('Custom Button Component',()=>{
    test('Button Renders with text: Click Me!',()=>{
        render(<CustomButton text={'Click Me!'}/>);
        const button = screen.getByRole('button',{name: "Click Me!"});
        expect(button).toBeInTheDocument();
    })
    test('Button Renders with type submit',()=>{
        render(<CustomButton text={'Submit'} type='submit'/>);
        const button = screen.getByRole('button',{name: "Submit"});
        expect(button).toHaveAttribute('type','submit')
    })
    test('Button have appropriate style',()=>{
        render(<CustomButton text={'Style'}/>);
        const button = screen.getByRole('button',{name: "Style"});
        expect(button).toHaveStyle({
            width: "300px",
            height: "80px",
            borderRadius: "20px",
            border: "1px solid #999999",
            color: "white",
            fontSize: "24px",
        })
    })
    test('Button to have appropriate class',()=>{
        render(<CustomButton text={'Class'}/>);
        const button = screen.getByRole('button',{name: "Class"});
        expect(button).toHaveClass(interRegular.className)
    })
    test("triggers click handler when clicked", () => {
        const mockClickHandler = jest.fn();
        render(<CustomButton text="Click" type="button" clickHandler={mockClickHandler} />);
        const button = screen.getByRole("button", { name: /click/i });
        fireEvent.click(button);
        expect(mockClickHandler).toHaveBeenCalledTimes(1);
      });
});
