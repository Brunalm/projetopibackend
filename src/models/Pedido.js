const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {

    static init(sequelize) {
        super.init({     
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            cpf: DataTypes.STRING,
            nascimento: DataTypes.STRING,
            telefone: DataTypes.STRING,
            cep: DataTypes.STRING,
            entrega: DataTypes.STRING,
            endereco: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            estado: DataTypes.STRING,
            nome_cartao: DataTypes.STRING,
            cpf_titular: DataTypes.STRING,
            numero_cartao: DataTypes.STRING,
            codigo_segurança: DataTypes.STRING,      
            validade: DataTypes.STRING,

        }, {
            sequelize
        })
    }

    //belongsToMany = indicar que existe uma terceira tabela que liga as duas tabelas em questão (produto, pedido), utilizando o atributo through: 'pedidos_produtos',
    static associate(models) {
        this.belongsToMany(models.Produto, {
            foreignKey: 'pedido_id',
            through: 'pedidos_produtos',
            as: 'produtos'
        })

        //pedindo pertence ao usuário
        this.belongsTo(models.Usuario, {
            foreignKey: 'user_id',
            as: 'user'
        })
    }
}

module.exports = Pedido;