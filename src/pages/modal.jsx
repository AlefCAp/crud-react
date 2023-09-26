import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Titulo from "../styles/global/titulo";
import WrapperInput from "../styles/global/wrapper-input";
import Label from "../styles/global/label";
import Input from "../styles/global/input";
import Select from "../styles/global/select";
import FormButton from "../styles/global/form-button";
import axios from "axios";
import ModalBackground from "../styles/modal/modal-background";
import ModalCard from "../styles/modal/modal-card";

const Modal = () => {

  const dataFilter = new Date();
  const dia = String(dataFilter.getDate()).padStart(2, '0')
  const mes = String(dataFilter.getMonth() + 1).padStart(2, '0')
  const ano = dataFilter.getFullYear()
 

  const dataAtual = `${dia}/${mes}/${ano}`

  const [data, setData] = useState({
    
    nome: '',
    cpf: '',
    data_nasc: '',
    idade: '',
    mae: '',
    email: '',
    login: '',
    senha: '',
    celular: '',
    status: '',
    data_inc: dataAtual,
    data_alt: ''

  });

  const navigate = useNavigate();

  const [users, setUsers] = useState([])
  
 

  const handleSubmit = (event) => {
    event.preventDefault()
    const userExists = users.some((d) => d.login === data.login || d.cpf === data.cpf);
    if (userExists) {
      alert("Login e CPF já existe");
      return;
    }

    axios.post('http://localhost:3000/users', data)
    .then(res => {
      alert('Usuário criado com sucesso!')
      navigate('/')
    })
    .catch(err => console.log('Erro'))
  };

  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => setUsers(res.data))
    .catch(err => console.log('Erro'))
  }, [])
 
return (
      <>
        <ModalBackground>
          <ModalCard autoComplete="off" method="post" onSubmit={handleSubmit}>
            <>
              <Titulo>Adicionar Usuário</Titulo>
            </>

            <WrapperInput margin>
              <Label modal>Nome Completo*</Label>
              <Input modalbig 
              type="text" 
              name="nome"
              value={data.nome}
              onChange={e => setData({...data, nome: e.target.value})}
              />
            </WrapperInput>

            <WrapperInput margin>
              <Label modal>E-mail*</Label>
              <Input modalbig 
              type="email" 
              name="email"
              value={data.email}
              onChange={e => setData({...data, email: e.target.value})}
              />
            </WrapperInput>

            <WrapperInput line space>

              <WrapperInput margin>
                <Label modal>Login*</Label>
                <Input modalmedium 
                type="text"
                name="login"
                value={data.login}
                onChange={e => setData({...data, login: e.target.value})}
                />
              </WrapperInput>

              <WrapperInput margin>
                <Label modal>Senha*</Label>
                <Input modalmedium
                  type="password"
                  name="senha"
                  value={data.senha}
                  onChange={e => setData({...data, senha: e.target.value})}
                />
              </WrapperInput>

            </WrapperInput>

            <WrapperInput line>
              <WrapperInput margin>
                <Label modal>Telefone*</Label>
                <Input modalsmall 
                type="text"
                name="celular"
                placeholder="(00) 0000-0000"
                value={data.celular}
                onChange={e => setData({...data, celular: e.target.value})}
                />
              </WrapperInput>

              <WrapperInput margin left>
                <Label modal>CPF*</Label>
                <Input modalsmall 
                type="text"
                name="cpf"
                placeholder="000.000.000-00"
                value={data.cpf}
                onChange={e => setData({...data, cpf: e.target.value})}
                />
              </WrapperInput>

              <WrapperInput margin left>
                <Label modal>Data de Nascimento*</Label>
                <Input
                  modalsmall
                  type="date"
                  name="data_nasc"
                  placeholder="dd/mm/aaaa"
                  value={data.data_nasc}
                  onChange={(e) => {
                    const dataNascimento = new Date(e.target.value);
                    const hoje = new Date();
                    const idadeCalculada = hoje.getFullYear() - dataNascimento.getFullYear();
                    setData({ ...data, data_nasc: e.target.value, idade: idadeCalculada });
                  }}
                />
              </WrapperInput>
            </WrapperInput>

            <WrapperInput margin>
              <Label modal>Nome da Mãe*</Label>
              <Input modalbig 
              type="text"
              name="mae"
              value={data.mae}
              onChange={e => setData({...data, mae: e.target.value})}
              />
            </WrapperInput>

            <WrapperInput margin left absolute>
              <Label modal none relative>Data de Inserçao</Label>
              <Input modalbig none relative
              type="text"
              name="data_inc"
              value={data.data_inc}
              onChange={e => setData(e.target.value)}
              />
            </WrapperInput>

            <WrapperInput margin>
              <Label modal>Status*</Label>
              <Select modal
              name="status"
              value={data.status} 
              onChange={e => setData({...data, status: e.target.value})}
              >
                <option selected value="">Escolha uma opção</option>
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
                <option value="Bloqueado">Bloqueado</option>
              </Select>
            </WrapperInput>


            <>
              <FormButton maxwidth margin
              disabled={data.nome.length < 3 ||
                data.login.length < 4 || 
                data.senha.length < 6 || 
                data.celular.length < 8 || 
                data.cpf.length < 11 || 
                data.data_nasc.length < 8 || 
                data.status.length < 1 ||
                data.mae.length < 3}
              >
                Adicionar
                </FormButton>
            </>
          </ModalCard>
        </ModalBackground>
      </>
    );
  }

export default Modal;
