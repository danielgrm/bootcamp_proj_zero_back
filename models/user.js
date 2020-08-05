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
let lista_usuarios = []
lista_usuarios.push(new Usuario(id=1 ,nome="Carlos Eduardo", email="carlos@bootcamp.com", senha="a12345",is_active=true, is_admin=false))
lista_usuarios.push(new Usuario(2 ,"Eduardo", "eduardo@bootcamp.com", "a12345"))
lista_usuarios.push(new Usuario(id=3 ,nome="Robson", email="rob@bootcamp.com", senha="a12345",is_active=false,  is_admin=false))
lista_usuarios.push(new Usuario(id=4 ,nome="Thais", email="ta@bootcamp.com", senha="a12345",is_active=true,  is_admin=true))
lista_usuarios.push(new Usuario(id=5 ,nome="Juliana", email="ju@bootcamp.com", senha="a12345",is_active=true,  is_admin=false))

module.exports = lista_usuarios;