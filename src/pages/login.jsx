import { Link } from "react-router-dom";
import Form from "../styles/form-layout/form";
import Card from "../styles/form-layout/card";
import Logo from "../styles/global/logo";
import WrapperInput from "../styles/global/wrapper-input";
import Label from "../styles/global/label";
import Input from "../styles/global/input";
import FormButton from "../styles/global/form-button";
import FormLink from "../styles/form-layout/form-link";
import { useState } from "react";


const Login = () => {

  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const handleUser = (event) => {
    const {value} = event.target;
    setUser(value);
  };

  const handlePassword = (event) => {
    const {value} = event.target;
    setPassword(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('submited')
  }

  return (
    <Form>
      <Card autoComplete="off" method="post">
        <>
          <Logo
            security
            src="https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg"
            alt="logo-fc"
          />
        </>

        <WrapperInput>
          <Label>Usuário</Label>
          <Input 
          type="text"
          value={user}
          onChange={handleUser}
          />
        </WrapperInput>

        <WrapperInput margin>
          <Label>Senha</Label>
          <Input 
          type="password"
          value={password}
          onChange={handlePassword}
          />
        </WrapperInput>

        <>
          <FormButton 
          type="submit"
          disabled={user.length < 4 || password.length < 6}
          onClick={handleSubmit}
          >
            Entrar
          </FormButton>
        </>

        <>
        <Link  to={`/recover-password`}><FormLink>Esqueci minha senha</FormLink></Link>
        </>
      </Card>
    </Form>
  );
};

export default Login;
