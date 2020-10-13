const { Sequelize } = require("sequelize");

const {Model, DataTypes} = require('sequelize');

class Usuario extends Model { //criando model no bd, representa tabela no projeto 

    static init(sequelize) {
        super.init({ //procedimnento padrão para iniciar os models
            nome: DataTypes.STRING,
            sobrenome: DataTypes.STRING,
            email: DataTypes.STRING,
            senha: DataTypes.STRING,
            categoria: {
                type: DataTypes.ENUM('admin', 'vendedor', 'comum'), //enum variavel de valores fixos
                defaultValue: 'comum'
            }
        }, {
            sequelize
        })
    }
}

module.exports = Usuario; 