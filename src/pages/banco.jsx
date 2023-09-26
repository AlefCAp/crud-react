
import Container from "../styles/page-layout/container";
import Header from "../styles/page-layout/header";
import Nav from "../styles/page-layout/nav";
import Logo from "../styles/global/logo";
import PageButton from "../styles/page-layout/page-button";
import Main from "../styles/page-layout/main";
import TableSection from "../styles/banco/table-section";
import Titulo from "../styles/global/titulo";
import WrapperTopTable from "../styles/banco/wrapper-toptable";
import TableInput from "../styles/banco/table-input";
import Table from "../styles/banco/table";
import Tr from "../styles/banco/tr";
import Th from "../styles/banco/th";
import Td from "../styles/banco/td"
import WrapperButtons from "../styles/banco/wrapper-buttons";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import TableSelect from "../styles/banco/table-select";
import TableLabel from "../styles/banco/table-label";
import WrapperTableInput from "../styles/banco/wrapper-tableinput";


const Banco = () => {

  const [data, setData] = useState([]);
  
  
  const [usersPerPage, setUsersPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);


  
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [idadeFilter, setIdadeFilter] = useState('')
  const [nascimentoFilter, setNascimentoFilter] = useState('')
  const searchLowerCase = search.toLowerCase()

  const pages = Math.ceil(data.length / usersPerPage);
  const startIndex = currentPage * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const currentUsers = data.filter((d) => d.nome.toLowerCase().includes(searchLowerCase) ||
                                            d.cpf.toLowerCase().includes(searchLowerCase) ||
                                            d.login.toLowerCase().includes(searchLowerCase))
  
                            .filter((d) => statusFilter === 'Inativo' ? d.status === 'Inativo' : 
                            statusFilter === 'Bloqueado' ? d.status === 'Bloqueado' :
                            d.status === 'Ativo')
                            
                            .filter((d) => idadeFilter === '18-26' ? (d.idade > 18 && d.idade < 26) : 
                            idadeFilter === '25-31' ? (d.idade > 25 && d.idade < 31) : 
                            idadeFilter === '30-36' ? (d.idade > 30 && d.idade < 36) :
                            idadeFilter === '35-41' ? (d.idade > 35 && d.idade < 41) :
                            idadeFilter === 'Maior que 40' ? (d.idade > 40) :
                            true)
                            
                            .filter((d) => nascimentoFilter === '1990-2010' ? (d.idade >= 13 && d.idade <= 33) : 
                            nascimentoFilter === '1980-1990' ? (d.idade >= 33 && d.idade <= 43) : 
                            nascimentoFilter === '1960-1980' ? (d.idade >= 43 && d.idade <= 63) : 
                            nascimentoFilter === '1946-1960' ? (d.idade >= 63 && d.idade <= 77) :
                            true)
                            .slice(startIndex, endIndex)
                          
  useEffect(() => {
    axios.get('http://localhost:3000/users')
    .then(res => setData(res.data))
    .catch(err => console.log("Erro"))
  }, [])

  
  function handleDelete(id) {
    axios.put('http://localhost:3000/users/'+id, 
    {...data[id], status:"Inativo"} )
    .then(res => {
      alert('Deletado');
      window.location.reload();
    })
    .catch(err => console.log("Erro"))
  }

  return (
    <>
      <Container>
        <Header>
          <Nav>
            <>
              <Logo
                layout
                src="https://d3gcmglegmnvz8.cloudfront.net/logo/logo_fc.svg"
                alt="logo-fc"
              />
            </>

            <>
              <PageButton gray>Logout</PageButton>
            </>
          </Nav>
        </Header>

        <Main>
          <TableSection>
            <>
              <Titulo>Banco de Dados</Titulo>
            </>

            <WrapperTopTable>
              <>
                <TableInput 
                placeholder="Search"
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
              </>

              <WrapperTableInput>
                <TableLabel>Status</TableLabel>
                <TableSelect modal
                name="status"
                value={statusFilter} 
                onChange={e => setStatusFilter(e.target.value)}
                >
                  <option selected value="">Escolha uma opção</option>
                  <option value="Ativo">Ativo</option>
                  <option value="Inativo">Inativo</option>
                  <option value="Bloqueado">Bloqueado</option>
                </TableSelect>
              </WrapperTableInput>

              <WrapperTableInput>
                <TableLabel>Faixa Etaria</TableLabel>
                <TableSelect modal
                name="status"
                value={idadeFilter} 
                onChange={e => setIdadeFilter(e.target.value)}
                >
                  <option selected value="">Escolha uma opção</option>
                  <option value="18-26">Maior que 18 e menor que 26</option>
                  <option value="25-31">Maior que 25 e menor que 31</option>
                  <option value="30-36">Maior que 30 e menor que 36</option>
                  <option value="35-41">Maior que 35 e menor que 41</option>
                  <option value="Maior que 40">Maior que 40</option>
                </TableSelect>
              </WrapperTableInput>

              <WrapperTableInput>
                <TableLabel>Periodo de Nascimento</TableLabel>
                <TableSelect modal
                name="status"
                value={nascimentoFilter} 
                onChange={e => setNascimentoFilter(e.target.value)}
                >
                  <option selected value="">Escolha uma opção</option>
                  <option value="1990-2010">Geração Z (1990 - 2010)</option>
                  <option value="1980-1990">Geração Y (1980 - 1990)</option>
                  <option value="1960-1980">Geração X (1960 - 1980)</option>
                  <option value="1946-1960">Geração Baby Boomer (1946 - 1960)</option>
                </TableSelect>
              </WrapperTableInput>


              <WrapperButtons>
                <>
                  <Link to={`/create`}>
                    <PageButton green>
                    Adicionar Usuario 
                    </PageButton>
                    </Link>
                </>

                <>
                <PageButton red>Excluir Todos</PageButton>
                </>
              </WrapperButtons>
            </WrapperTopTable>

            <Table>
              <thead>
                <Tr>
                  <Th>#</Th>
                  <Th>Nome</Th>
                  <Th>E-mail</Th>
                  <Th>Telefone</Th>
                  <Th>CPF</Th>
                  <Th>Status</Th>
                  <Th>Ações</Th>
                </Tr>
              </thead>

              <tbody>
                {currentUsers.map((d, i) => (
                  <Tr key={i}>
                    <Td>{d.id}</Td>
                    <Td>{d.nome}</Td>
                    <Td>{d.email}</Td>
                    <Td>{d.celular}</Td>
                    <Td>{d.cpf}</Td>
                    <Td>{d.status}</Td>
                    <Td>
                      <Link to={`/modalmore/${d.id}`}><PageButton gray more>. . .</PageButton></Link>
                      <Link to={`/modalup/${d.id}`}><PageButton green edit>Editar</PageButton></Link>
                      <PageButton red delet onClick={e => handleDelete(d.id)}>Excluir</PageButton>
                    </Td>
                  </Tr>
                ))}
              </tbody>


            </Table>
              <WrapperButtons pagenavegation>
                  {Array.from(Array(pages), (user, index) => {
                    return <PageButton gray navegation value={index} onClick={e => setCurrentPage(Number(e.target.value))}>{index + 1}</PageButton>
                  })}
              </WrapperButtons>
          </TableSection>
        </Main>     
      </Container>
    </>
  );
};

export default Banco;
