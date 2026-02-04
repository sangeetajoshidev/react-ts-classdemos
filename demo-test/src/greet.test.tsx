import {describe,it,expect} from 'vitest';
import { Greeting } from './greeting';
import {render,screen} from '@testing-library/react' 

describe("Greeting comp test",()=>{

    it('renders name rightly',()=>{
          render(<Greeting name="User" />)
          expect(
                screen.getByText("Hello,User")
          ).toBeInTheDocument();

    })


})