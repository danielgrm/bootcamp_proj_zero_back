let lista_usuarios = []

class Usuario {
    constructor(nome, email, senha, is_active=true, is_admin=false) {
        this.id = this.gerar_id()
        this.nome = nome
        this.email = email
        this.senha = senha
        this.is_active = is_active
        this.is_admin = is_admin
    }
    gerar_id() {
        if (lista_usuarios.length === 0){
            return 1
        }
        return lista_usuarios[lista_usuarios.length-1].id + 1
    }
}

lista_usuarios.push(new Usuario(nome="Carlos Eduardo", email="carlos@bootcamp.com", senha="a12345",is_active=true, is_admin=false))
lista_usuarios.push(new Usuario("Eduardo", "eduardo@bootcamp.com", "a12345"))
lista_usuarios.push(new Usuario(nome="Robson", email="rob@bootcamp.com", senha="a12345",is_active=false,  is_admin=false))
lista_usuarios.push(new Usuario(nome="Thais", email="ta@bootcamp.com", senha="a12345",is_active=true,  is_admin=true))
lista_usuarios.push(new Usuario(nome="Juliana", email="ju@bootcamp.com", senha="a12345",is_active=true,  is_admin=false))

module.exports = { 
    Usuario, 
    lista_usuarios 
} 