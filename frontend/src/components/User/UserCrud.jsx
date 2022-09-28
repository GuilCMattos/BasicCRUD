import React, {Component} from "react";

import Main from "../templates/Main";

const headerProps = { 
    icon: 'users',
    title: 'Usuários',
    subtitle: 'Cadastro de usuários: Incluir, Listar, Editar e Deletar'
}

export default class UserCRUD extends Component { 
    render() { 
        return ( 
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}