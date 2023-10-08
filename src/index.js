// Importamos la app (configuracion del server)
const app = require('./app.js') // app
require('./database.js') // database connection


app.listen(app.get('PORT'), () => {
    console.log(` ------------------------------------ \n           --- Server Up --- \n   [Port]: ${app.get('PORT')}\n   [URL]: -> http://localhost:${app.get('PORT')} <-\n\n ------------------------------------ `);
})
