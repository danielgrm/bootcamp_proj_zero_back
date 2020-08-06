class Usuario {
    constructor(id, nome, email, senha, is_active=true, is_admin=false) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.is_active = is_active;
        this.is_admin = is_admin;
    }
}
module.exports = Usuario;