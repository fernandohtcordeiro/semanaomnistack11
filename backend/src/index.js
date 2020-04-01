/* Recursos/Rotas 
metodos http 
Get buscar uma informação back-end
Post criar uma informação back-end
Put alterar uma informação back-end
DELETE deletando informação do back-end
*/ 
/**Tipos de parametros
 * tipo Query(lista usuarios)
 */
  
const express = require('express');
const cors = require('cors')
const { errors } = require('celebrate');
const routes = require('./routes');

const app = express();

app.use(cors()); //apermit que todas as app frontend acessem o backend
app.use(express.json()); //Converte o json para javascript
app.use(routes);
app.use(errors());

app.listen(3333);