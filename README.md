# API-Rest com MongoDB | JapaFoods

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

### API JapaFoods  
Esta API é utilizada para gerenciar um catálogo que contém diferentes pratos de comida de origem japonesa, permitindo operações de visualização, cadastro e consulta do catálogo de pratos desta origem.

## Endpoints
### - GET /foods
Este endpoint é responsável por retornar a listagem de todas os pratos cadastrados no banco de dados.

#### Parâmetros:
Nenhum.

#### Respostas:
#### OK! (código 200)  
Caso seja retornada esta resposta, você receberá a listagem de todos os pratos de comida japonesa cadastrados na API.

#### Exemplo de resposta:

```node.js
{
	"foods": [
		{
			"_id": "66e613124f5d2bdd0d14c635",
			"name": "Sushi",
			"price": "35",
			"descriptions": [
				{
					"ingredients": "peixe, arroz, e outros ingredientes",
					"_id": "66e613124f5d2bdd0d14c636"
				}
			],
			"__v": 0
		}
	]
}
```

#### Erro Interno do Servidor! (código 500)  
Caso essa resposta seja retornada, significa que ocorreu um erro interno no servidor. Podem ter várias causas, mas a mais comum é a falta de comunicação com o servidor, que pode dar-se por diversos motivos diferentes.

#### Exemplo de resposta:
```node.js
{
    "error": "Erro interno do servidor!"
}
```
### - POST /food
Esse endpoint é o responsável pelo cadastramento de novos pratos no banco de dados.

#### Parâmetros:
name: Nome do prato.  
price: Preço do prato.  
descriptions: Descrições adicionais sobre o prato, mais especificamente seus ingredientes.  

#### Exemplo de requisição:
```node.js
{
"name": "Sushi",
"price": 35,
"descriptions": [{"ingredients": "peixe, arroz, e outros ingredientes"}]
}
```
#### Respostas:
#### Criado! (código 201)  
Caso essa resposta seja retornada, o novo prato foi criado e armazenado no banco com sucesso.  

#### Exemplo de resposta: 
'Nenhum conteúdo retornado.'

#### Erro Interno do Servidor! (código 500)  
Caso essa resposta retorne, significa que ocorreu um erro interno no servidor.  

#### xemplo de resposta:
```
{
    "error": "Erro interno do servidor!"
}
```
### - DELETE /food/:id
Esse endpoint é o responsável por deletar um prato específico, usando seu ID.

#### Parâmetros:
id: ID do prato a ser deletado.

#### Respostas:
#### Sem Conteúdo! (código 204)  
Caso essa resposta retorne ao usuário, o prato terá sido deletado do banco de dados com sucesso e não há mais conteúdo para retornar.  

#### Exemplo de resposta: 
'Nenhum conteúdo retornado.'

#### Requisição Inválida! (código 400)  
Caso essa resposta retorne ao usuário, o ID fornecido é inválido.  

#### Exemplo de resposta:
```
{
    "error": "ID inválido!"
}
```
#### Erro Interno do Servidor! (código 500)  
Caso essa resposta retorne ao usuário, ocorreu um erro interno no servidor.  

#### Exemplo de resposta:
```
{
    "error": "Erro interno do servidor!"
}
```
### - PUT /food/:id
Esse endpoint é o responsável por atualizar as informações de um prato específico pelo ID dele.

#### Parâmetros:
id: ID do prato a ser atualizado.  
name: Nome do prato.  
price: Preço do prato.  
descriptions: Descrições adicionais sobre o prato, mais especificamente seus ingredientes.  

#### Exemplo de requisição:
```
{
"name": "Sushi",
"price": 50,
"descriptions": [{"ingredients": "salmão, arroz e shoyu."}]
}
```
#### Respostas:
#### OK! (código 200)  
Caso essa resposta retorne ao usuário, as informações do prato foram atualizadas com sucesso.  

#### Exemplo de resposta:
```
{
"name": "Sushi",
"price": 50,
"descriptions": [{"ingredients": "salmão, arroz e shoyu."}]
}
```
#### Requisição Inválida! (código 400)  
Caso essa resposta retorne, significa que o ID fornecido é inválido ou a requisição contém dados formados de forma errada.  

#### Exemplo de resposta:
```
{
    "error": "ID inválido ou dados malformados!"
}
```
#### Erro Interno do Servidor! (código 500)  
Caso essa resposta retorne ao usuário, significa que ocorreu um erro interno no servidor.  

#### Exemplo de resposta:
```
{
    "error": "Erro interno do servidor!"
}
```
### - GET /food/:id
Esse endpoint é o responsável por retornar informações de um prato específico pelo seu ID.

#### Parâmetros:
id: ID do prato que será consultado.

#### Respostas:
#### OK! (código 200)  
Caso essa resposta aconteça, você vai receber todas as informações do prato solicitado.  

#### Exemplo de resposta:
```
{
	"food": {
		"_id": "66e613124f5d2bdd0d14c635",
		"name": "Sushi",
		"price": "50",
		"descriptions": [
			{
				"ingredients": "ingredients": "salmão, arroz e shoyu.",
				"_id": "66e613124f5d2bdd0d14c636"
			}
		],
		"__v": 0
	}
}
```
#### Não Encontrado! (código 404)  
Caso essa resposta aconteça, significa que o prato com o ID fornecido não foi encontrado.  

#### Exemplo de resposta:
```
{
    "error": "Prato não encontrado!"
}
```
#### Requisição Inválida! (código 400)  
Caso essa resposta retorne ao usuário, significa que o ID fornecido é inválido.  

#### Exemplo de resposta:
```
{
    "error": "ID inválido!"
}
```
#### Erro Interno do Servidor! (código 500)  
Caso essa resposta retorne ao usuário, significa que ocorreu um erro interno no servidor.  

#### Exemplo de resposta:
```
{
    "error": "Erro interno do servidor!"
}
```
