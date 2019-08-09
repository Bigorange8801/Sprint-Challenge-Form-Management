import React from 'react';
import ReactDOM from 'react-dom';
import FormUser from './component/FormUser';
import { Form, Field, withFormik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import {getByTestId,render} from '@testing-library/react'
import "@testing-library/react/cleanup-after-each"
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe( "<FormUser/>", () =>{
  it('renders without crashing', () => {
    const form = document.createElement('div')
    ReactDOM.render(<FormUser/>,form);
    ReactDOM.unmountComponentAtNode(form);
  })
  it('renders check button', ()=> {
    const {div} = render(<FormUser/>);
    const button = getByTestId(div,"submit");
    expect(button.textContent).toBe("Submit");
  })
}) ;

  


