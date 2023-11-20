module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define(
    "user",
    {
      role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      fullname: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      avatar: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.BOOLEAN,
        // allowNull: false,
        // default: true
      },
    },
    {
      timestamps: false,
      tableName: "users",
    }
  );

  user.associate = (models) => {
    user.hasOne(models.transaction, {
      foreignKey: 'cashier_id',
    });
  };

  return user;
};
