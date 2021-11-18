import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {useHistory} from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/tokensReducer";
import { addToken } from "../../../store/tokens/actions";
import {toast} from 'react-toastify';

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  let history = useHistory();
  const dispatch = useDispatch(); //Dispara a ação para ser armazenada no store

  function goLogout(){
    /*
    Ao invés de enviar um token, vai modifica-lo para vazio
    sendo assim por não ter o token ele desloga da aplicação
    e redireciona para a tela de login
    */
    dispatch(addToken(''));
    toast.info('Usuário deslogado', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      theme: "colored",
      progress: undefined,
  });
    history.push('login')
  }

  var navbarComponent;
  /*
  Renderiza o componente, se o token não for vazio
  */
  if(token != ""){
        navbarComponent = <AppBar position="static">
        <Toolbar variant="dense" className="toolbar">
          <Box className="boxTopo" display="flex">
            <Grid
              container
              spacing={8}
              justifyContent="space-between"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Box className="cursor">
                  <Typography variant="h5" className="cor-font-typography">
                    BlogPessoal
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  display="flex"
                  justifyContent="start"
                  alignItems="center"
                  className="margin-left"
                >
                  <Link to="/home" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      HOME
                    </Typography>
                  </Box>
                  </Link>

                  <Link to="/posts" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      POSTAGENS
                    </Typography>
                  </Box>
                  </Link>

                  <Link to="/temas" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography variant="h6" className="cor-font-typography">
                      TEMAS
                    </Typography>
                  </Box>
                  </Link>

                  <Link to="/formularioTema" className="text-decorator-none">
                  <Box mx={1} className="cursor hover">
                    <Typography
                      variant="h6"
                      className="cor-font-typography"
                      noWrap
                    >
                      CADASTRAR TEMA
                    </Typography>
                  </Box>
                  </Link>
                  
                    <Box mx={1} className="hover" onClick={goLogout}>
                      <Typography variant="h6" className="cor-font-typography">
                        LOGOUT
                      </Typography>
                    </Box>
                  

                </Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
  }
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
