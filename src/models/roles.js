module.exports = (sequelize, Sequelize) => {
  const roles = sequelize.define(
    "roles",
    {
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: "roles",
    }
  );

  // role.associate = (models) => {
  //   role.hasMany(models.user, { foreignKey: "roleId" });
  // };

  return roles;
};
