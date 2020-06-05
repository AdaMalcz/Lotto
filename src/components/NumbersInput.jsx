import React from 'react';
import { MDBCol, MDBRow } from 'mdbreact';
import { Formik, Form, Field } from 'formik';

const NumbersInput = props => {
  return (
      <MDBRow className="my-4">
        <MDBCol>
          <div>
            <h2>Moje liczby</h2>
            <Formik
              initialValues={{
                myNumbers: ['', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''],
              }}
              onSubmit={values => {
                props.setMyNumbers(values.myNumbers);
                props.setMyBets(values.myNumbers)
              }}
            >
              <Form>
                <Field name="myNumbers[0]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[1]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[2]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[3]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[4]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[5]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[6]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[7]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[8]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[9]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[10]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[11]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[12]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[13]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[14]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[15]" className='m-1' style={{width: "30px"}}/>
                <Field name="myNumbers[16]" className='m-1' style={{width: "30px"}}/>
                <button type="submit" className="m-1">Wygeneruj zakłady</button>
              </Form>
            </Formik>
          </div>
        </MDBCol>
      </MDBRow>
  );
}

export default NumbersInput;