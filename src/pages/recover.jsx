import { useState } from "react"
import Card from "../styles/form-layout/card"
import Form from "../styles/form-layout/form"
import Input from "../styles/global/input"
import Label from "../styles/global/label"
import Logo from "../styles/global/logo"
import WrapperInput from "../styles/global/wrapper-input"
import FormButton from "../styles/global/form-button"
import { Link } from "react-router-dom"
import FormLink from "../styles/form-layout/form-link"
import Titulo from "../styles/global/titulo"

const Recover = () => {

  const [user, setUser] = useState('');

  const handleUser = (event) => {
    const {value} = event.target;
    setUser(value);
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

        <>
        <Titulo recover>Recuperar Acesso</Titulo>
        </>

        <WrapperInput>
          <Label>Insira seu Úsuario</Label>
          <Input 
          type="text"
          value={user}
          onChange={handleUser}
          />
        </WrapperInput>

        <>
          <FormButton 
          type="submit"
          disabled={user.length < 4}
          onClick={handleSubmit}
          >
            Avançar
          </FormButton>
        </>

        <>
        <Link  to={`/login`}><FormLink>Retornar ao Login</FormLink></Link>
        </>

      </Card>
    </Form>
  )
}

export default Recover