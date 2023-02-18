import { Component } from 'react';
import { Formik, Form } from 'formik';
import { Button, ButtonGoogl, Container, Div, Input, P } from './App.styled';
import { schema } from 'utils/schema';
import { FormError } from 'errors/error';

export class App extends Component {
  render() {
    const handleSubmit = (velues, { resetForm }) => {
      console.log(velues);
      resetForm();
    };
    return (
      <Container>
        <P>You can log in with your Google Account:</P>
        <ButtonGoogl type="button">Google</ButtonGoogl>
        <P>Or log in using an email and password, after registering:</P>
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={schema}
          onSubmit={handleSubmit}
        >
          {/* {({ errors, touched }) => ( */}
          <Form autoComplete="off">
            <label htmlFor="login">
              Email:
              <Input type="text" name="email" placeholder="your email" />
              <FormError name="email" component="div" />
              {/* <br /> */}
            </label>
            <label htmlFor="password">
              Password:
              <Input type="password" name="password" />
              <FormError name="password" />
            </label>
            <Div>
              <Button type="submit">LOG IN</Button>
              <Button type="button">REGISTRATION</Button>
            </Div>
          </Form>
          {/* )} */}
        </Formik>
      </Container>
    );
  }
}
// const Input = styled(Field)`
//   font-size: 50px;
// `;
