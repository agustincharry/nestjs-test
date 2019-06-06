# NestJS Test
###### Prueba de concepto del framework NestJS para NodeJS.

## Prerequisitos
```
npm install
```

## Tecnologías usadas
* NodeJS
* NestJs
* Typescript
* Typeorm
* PostgreSQL

## Conceptos importantes usados
* Controladores
* Servicios
* Módulos
* Entidades - Modelos
* DTO (Data Transfer Object)
* Mappers
* Llave foranea (Foreign Key)

## Servicios
### /person
##### POST /person/
```
Body: {
	"name": "nombre",
	"lastname": "apellido"
}
```
##### GET /person
##### GET /person/:id
##### PUT /person/:id
```
Body: {
	"name": "nombre",
	"lastname": "apellido"
}
```
##### DELETE /person/:id
##### POST /person/:id/addPet/:petId
### /pet
##### POST /pet/
```
Body: {
	"name": "nombre",
	"color": "color"
}
```
##### GET /pet/
##### GET /pet/:id
##### PUT /pet/:id
```
Body: {
	"name": "nombre",
	"color": "color"
}
```
##### DELETE /pet/:id