import React from 'react';

import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
      <img src={`https://i.pinimg.com/280x280_RS/d0/1c/9f/d01c9f1e289757b3cb6949c86f9125b4.jpg`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'bebelicha';
  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123', 
    title: 'Às quartas usamos rosa',
    image: 'https://i.pinimg.com/564x/6e/14/82/6e1482c2ae0967142c6f91e73b4a4117.jpg',
    
  },
  {
    id: '6425723236726324',
    title: 'Burn book',
    image: 'https://i.pinimg.com/564x/0a/eb/6b/0aeb6b09ac1aa93a91659678a82392da.jpg',
    
  },
  ]);
  // const comunidades = comunidades[0];
  // const alteradorDeComunidades/setComunidades = comunidades[1];

  console.log('Teste', );
  // const comunidades = ['Alurakut'];
  const pessoasFavoritas = [
    {
      id: '12802378123789378912789789123896123', 
      title: 'Cady Heron',
      image: 'https://img.wattpad.com/2ef1366c8ba5235e2c732763d8094013bbacaf29/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6f766a4e78782d6574636b6141673d3d2d3538383039363934372e3135333735613763373837316339623432363030303235363835322e6a7067',
      
    },
    {
      id: '12802378123789378912789789123896123', 
      title: 'Karen Smith',
      image: 'https://img.wattpad.com/fde2f99db019e54532c810ae2e54683d0eade7f2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5549306f42474832316248485a413d3d2d3538383039363934372e313533373561376434643562626330313334323133363738313430312e6a7067',
      
    },
    {
      id: '12802378123789378912789789123896123', 
      title: 'Gretchen Wieners',
      image: 'https://img.wattpad.com/2bd12702e08601a24eef37910b147867b7bcc0a1/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f36425f4c4e3564523968736759413d3d2d3538383039363934372e313533373561376536636162333639633638353138313731323132342e6a7067',
      
    },
    {
      id: '12802378123789378912789789123896123', 
      title: 'Regina George',
      image: 'https://img.wattpad.com/1b6f8ed06d5606a5fd707706ca12300a3b863aaa/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6f4d66543274475f5a64435046773d3d2d3538383039363934372e313533373561376662653466643065313130363636353336343534372e6a7067',
      
    },
  //   'teststudent-kb',
  //   'juan-20',
  //   'farlengeraldo',
  //   'peas',
  //   'juunegreiros',
  //  'omariosouto'
  
  ]

  return (
    <>
      <AlurakutMenu />
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Seja bem vinde! 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));

                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={`/users/${itemAtual.title}`}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                  // <li key={itemAtual}>
                  //   <a href={`/users/${itemAtual}`}>
                  //     <img src={`https://github.com/${itemAtual}.png`} />
                  //     <span>{itemAtual}</span>
                  //   </a>
                  // </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}

