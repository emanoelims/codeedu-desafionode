# CodeEducation desafio node

## Database

- Criei uma imagem MYSQL com algumas variáveis de ambiente inicializadas 
- Usei um arquivo chamado `db/people.sql` para inicializar alguns dados junto com o container

## Nodejs

### Foi utilizado:
- `dockerizer` que fica verificando se o container `db` está pronto
- `promisify` para usar async/await no método query do pacote `mysql`

Quando o container estiver em funcionamento, ele realiza a conexão com o banco de dados e carrega um nome cadastrado na tabela `people`

Resolvi ir um pouco além do pedido no desafio e criei alguns estilos e adicionei uma opção para adicionar mais nomes na tabela.

O arquivo de entrada está localizado em `node/index.mjs`

## Nginx

Nginx é responsável por fazer o proxy reverso para a aplicação em nodejs

O arquivo `nginx/default.conf` é carregado para a pasta `/etc/nginx/conf.d/` dentro do container nginx

