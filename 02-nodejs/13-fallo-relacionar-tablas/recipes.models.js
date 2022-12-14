const { DataTypes } = require("sequelize");

const db = require("../utils/database");

const Users = require("./users.models");
const Categories = require("./categories.models");

const Recipes = db.define("recipes", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING(),
    allowNull: false,
    validate: {
      min: 5,
    },
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },

  urlImg: {
    type: DataTypes.STRING,
    validate: {
      isUrl: true,
    },
    field: "url_img",
  },
  time: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  portions: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  /* 
     las FK de sequelize tienen ciertas reglas:
     Debe contener la tabla a la que hace referencia en singular
     Debe terminar con el subfijo Id
  */
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    field: "user_id",
    //CAMPO REFERENCES VINCULA RECETAS CON LOS USUARIOS
    references: {
      key: "id",
      model: Users,
    },
  },

  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "category_id",
    references: {
      key: "id",
      model: Categories, //agregar modelo unavez cerado
    },
  },
  origin: {
    type: DataTypes.STRING,
  },
  likes: {
    type: DataTypes.INTEGER,
    allowNull: false,
    //cuando inicialize no va a tener likes y ese valor va ir incrementando.
    defaultValue: 0,
  },
});

module.exports = Recipes;
