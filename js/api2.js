// async indica que la función es asincrónica
const getNombre = async (idPost) => {
    // El bloque try se intenta ejecutar. En caso de error, se pasa a la sección catch(error)
    try {
    // await hace que axios espere por la respuesta
    const resPost = await axios(`https://jsonplaceholder.typicode.com/posts/${idPost}`)
    console.log(resPost); //Mostramos el objeto (el post) completo
    console.log(resPost.data.userId) //Mostramos el userID, contenido en data.userId
    const resUser = await axios(`https://jsonplaceholder.typicode.com/users/${resPost.data.userId}`)
    console.log(resUser) //Mostramos el objeto (el usuario) completo
    console.log(resUser.data.name) //Mostramos el nombre del usuario, que está en data.name
    } catch (error) {
    console.log('Ocurrió un error grave', error)
    }
   }
   getNombre(99); // El llamado a la función se hace de la forma habitual.
   