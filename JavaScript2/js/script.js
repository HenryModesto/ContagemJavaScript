function validar() {
                var usuario = frmLogin.usuario.value;
                var senha = frmLogin.senha.value;
                var perfil = frmLogin.perfil.value;

                if (usuario == ""){
                    alert('Preencha o seu Usuário!');
                    frmLogin.usuario.focus();
                    return false;
                }

                if (senha == ""){
                    alert('Preencha a sua senha!');
                    frmLogin.senha.focus();
                    return false;
                }  

                if (perfil == ""){
                    alert('Escolha o seu perfil!');
                    frmLogin.perfil.focus();
                    return false;
                }    

            }