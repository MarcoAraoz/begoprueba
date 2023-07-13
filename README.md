# Prueba Técnica BeGo

Proyecto realizado con la finalidad de crear y consumir endpoints usando Stack de programación basado en MongoDB, Node, Express, Javascript y paqueterías de terceros para autenticar usuarios a través de tokens.

## Packages

npm

Node

Express

Nodemon

Morgan

Mongoose

bcrypt

jasonwebtoken

cookie-parser

zod


## Estructura de directorios

-Controllers: Directorio que define varias funciones para el manejo de rutas, incluida la obtención de todas las rutas, la creación de una nueva ruta, la obtención de una ruta específica, la eliminación de una ruta y la actualización de una ruta.

-Models: Contiene modelos de colecciones basadas en MongoDB usando la biblioteca Mongoose.

-Routes: Configura rutas para una aplicación web utilizando el marco Express.

-Libs: El archivo jwt.js contiene la función `createAccessToken`: genera un JSON Web Token (JWT) con una carga determinada y una clave secreta, y devuelve el token.

-Schemas: El código está definiendo un esquema para la validación de datos de registro y login de usuarios utilizando la biblioteca Zod.

-Middlewares: La función `auth` es un middleware que verifica el token en las cookies de solicitud y establece la propiedad `req.user` en el objeto de usuario decodificado si el token es válido.

## Contacto

marcojuarezaraoz@gmail.com

