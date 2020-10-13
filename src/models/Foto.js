const { Model, DataTypes } = require('sequelize');

class Foto extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            diretorio: DataTypes.STRING,
        }, {
            sequelize
        })
    }

    static associate(models) {
        this.belongsTo(models.Produto, {
            foreignKey: 'produto_id',
            as: 'produto'
        })
    }
}

module.exports = Foto;