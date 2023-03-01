import Sequelize from "sequelize";
const sequelize = new Sequelize('admin','postgres','password',{
    host:'localhost',
    dialect:'postgres',
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
})
sequelize.authenticate()
.then(()=>{
    console.log("database has been connected successfully");
})
.catch((err)=>{
    console.log(err);
})
sequelize.sync()
export default sequelize