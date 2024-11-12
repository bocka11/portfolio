import '@testing-library/jest-dom';
import {render,screen,fireEvent} from '@testing-library/react';
import {CustomInput} from '../../src/components/CustomInput/CustomInput';

describe('Custom Input Component',()=>{
    test('Custom Input Component renders',()=>{
        render(<CustomInput type='text' />);
        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument()
        expect(input).toHaveAttribute('type','text')
    })

})