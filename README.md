# crawler

Implementação de um crawler com Nodejs


### Utilização

```npm run dev``` este comando iniciará o server na porta 2999

A aplicação oferece apenas uma rota:

```
POST /buscar

aceitando o seguinte corpo:
{
	"checkin": "dd/MM/yyyy",
	"checkout": "dd/MM/yyyy"
}

e retornando o objeto seguinte:

{
   "image": "string",
   "name": "string",
   "description": "string",
   "price": "string"
}

```
### Essa aplicação foi construída com as seguintes tecnologias:

* [Express](https://expressjs.com/)
* [Puppeteer](https://pptr.dev/)
* [Cheerio](https://cheerio.js.org/)
* [Dotenv](https://www.npmjs.com/package/dotenv)
* [Nodemon](https://nodemon.io/)
