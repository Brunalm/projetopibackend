const { Model, DataTypes } = require('sequelize');

class Produto extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            descricao: DataTypes.STRING,
            cor: DataTypes.STRING,
            tamanho: DataTypes.STRING,
            preco: DataTypes.DOUBLE
        }, {
            sequelize
        })
    }

    //um produto tem varias fotos
    static associate(models) {
        this.hasMany(models.Foto, {
            foreignKey: 'produto_id',
            as: 'fotos'
        });

        this.belongsToMany(models.Pedido, {
            foreignKey: 'produto_id',
            through: 'pedidos_produtos',
            as: 'pedidos'
        })
    }
}

module.exports = Produto;