import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Titulo from "../styles/global/titulo";
import WrapperInput from "../styles/global/wrapper-input";
import Label from "../styles/global/label";
import Input from "../styles/global/input";
import Select from "../styles/global/select";
import axios from "axios";
import ModalBackground from "../styles/modal/modal-background";
import ModalCard from "../styles/modal/modal-card";

const ModalMore = () => {
  
    const [data, setData] = useState({
    
        nome: '',
        cpf: '',
        data_nasc: '',
        mae: '',
        email: '',
        login: '',
        senha: '',
        celular: '',
        status: '',
        data_inc: '',
        data_alt: '',
    
      });
    
      const {id} = useParams();
    
    
      useEffect(() => {
        axios.get('http://localhost:3000/users/'+id)
        .then(res => setData(res.data))
        .catch(err => console.log('Erro'))
      }, [])
    
  
    return (
    <>
        <ModalBackground>
          <ModalCard autoComplete="off" method="post">
            <>
              <Titulo>Usuário</Titulo>
            </>

            <WrapperInput margin>
              <Label modal>Nome Completo*</Label>
              <Input modalbig 
              type="text" 
              name="nome"
              value={data.nome}
              readOnly 
              />
            </WrapperInput>

            <WrapperInput margin>
              <Label modal>E-mail*</Label>
              <Input modalbig 
              type="email" 
              name="email"
              value={data.email}
              readOnly 
              />
            </WrapperInput>

            <WrapperInput line space>

              <WrapperInput margin>
                <Label modal>Login*</Label>
                <Input modalmedium 
                type="text"
                name="login"
                value={data.login}
                readOnly
                />
              </WrapperInput>

              <WrapperInput margin>
                <Label modal>Senha*</Label>
                <Input modalmedium
                  type="text"
                  name="senha"
                  value={data.senha}
                  readOnly 
                />
              </WrapperInput>

            </WrapperInput>

            <WrapperInput line>
              <WrapperInput margin>
                <Label modal>Telefone*</Label>
                <Input modalsmall 
                type="text"
                name="celular"
                value={data.celular}
                readOnly 
                />
              </WrapperInput>

              <WrapperInput margin left>
                <Label modal>CPF*</Label>
                <Input modalsmall 
                type="text"
                name="cpf"
                value={data.cpf}
                readOnly
                />
              </WrapperInput>

              <WrapperInput margin left >
                <Label modal>Data de Nascimento*</Label>
                <Input modalsmall date
                type="text"
                name="data_nasc"
                placeholder="dd/mm/aaaa"
                value={data.data_nasc} 
                readOnly
                />
              </WrapperInput>
            </WrapperInput>

            <WrapperInput margin>
              <Label modal>Nome da Mãe*</Label>
              <Input modalbig 
              type="text"
              name="mae"
              value={data.mae}
              readOnly
              />
            </WrapperInput>


            <WrapperInput space line>
              <WrapperInput margin>
                <Label modal>Data de Inserção</Label>
                <Input modalmedium 
                type="text"
                name="data_inc"
                value={data.data_inc}
                readOnly
                />
              </WrapperInput>

              <WrapperInput margin>
                <Label modal>Data de Alteração</Label>
                <Input modalmedium 
                type="text"
                name="data_alt"
                value={data.data_alt}
                readOnly
                />
              </WrapperInput>
            </WrapperInput>

            <WrapperInput margin>
              <Label modal>Status*</Label>
              <Select modal
              name="status"
              value={data.status}
              readOnly 
              >
                <option value=""></option>
                <option value="Ativo">Ativo</option>
                <option value="Ausente">Ausente</option>
                <option value="Inativo">Inativo</option>
              </Select>
            </WrapperInput>
          </ModalCard>
        </ModalBackground>
      </>
  )
}


export default ModalMore