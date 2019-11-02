const config ={
    dbUrl:process.env.DB_URL || 'mongodb+srv://arieljr10699@gmail.com:ariel100@cluster0-kmy8z.mongodb.net/test',
    secret: process.env.SECRET || 'supersecret',
}
module.exports = config;