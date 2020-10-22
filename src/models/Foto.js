const { Model, DataTypes } = require('sequelize');

class Foto extends Model {

    static init(sequelize) {
        super.init({
            nome: DataTypes.STRING,
            diretorio: DataTypes.STRING,
            url: {
            type: DataTypes.VIRTUAL,
            get() {
                if (this.getDataValue('nome'))
                    return `http://localhost:3333/files/${this.getDataValue('nome')}`;
                else
                    return null;
        },
      },
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