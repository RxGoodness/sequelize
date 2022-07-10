module.exports=  (sequelize, DataTypes) =>{
    const MyTable = sequelize.define('MyTable', {
   firstName: {
         type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true
}
   },
   age: {
    type: DataTypes.INTEGER,
       allowNull: false,
       validate: {
           notEmpty: true
}
}
}
    )
    return MyTable;
}