module.exports = (sequelize, DataTypes) => {
  const History = sequelize.define("History", {
    cell: DataTypes.STRING,
    moves: DataTypes.STRING,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  },
  {
    freezeTableName: true,
  });
  return History;
}