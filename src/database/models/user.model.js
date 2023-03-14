const userModel = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    _id: {
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  }, {
    tableName: 'Users',
    timestamps: false,
  });

  return User;
};

module.exports = userModel;