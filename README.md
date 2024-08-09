# LectuLocu


Bookstore App es una plataforma de comercio electrónico centrada en la venta de libros. Con esta aplicación, los usuarios pueden navegar por una base de datos de libros, filtrarlos y buscarlos según sus preferencias, agregar libros al carrito, y finalmente realizar un pedido. La aplicación está construida utilizando React para la interfaz de usuario, Firebase para la base de datos en la nube, y React Router para la navegación entre las diferentes vistas.

## Tecnologías

- React
- CSS
- Firebase
- React Router
- SweetAlert2

### Tabla de Contenidos
- Características Principales
- Uso
- Detalles Técnicos
- Dependencias


## Características Principales

### Gestión de Libros

- Listado de Libros: Los usuarios pueden ver una lista de libros obtenidos desde Firestore. Cada libro incluye detalles como el título, el autor, y su disponibilidad.

- Búsqueda y Filtrado: La aplicación permite a los usuarios buscar libros por título o autor, y filtrar los resultados por disponibilidad de eBooks.

### Carrito de Compras
- Añadir al Carrito: Los usuarios pueden añadir libros al carrito de compras desde la lista general o desde el detalle del producto.

- Modificar Cantidades: Se pueden ajustar las cantidades de libros en el carrito directamente desde el mismo.

- Eliminar Productos: Es posible eliminar libros del carrito de manera sencilla.

- Guardar Estado del Carrito: El estado del carrito se guarda en localStorage, lo que permite a los usuarios retomar su compra donde la dejaron, incluso si recargan la página.

### Confirmación de Pedidos
- Creación de Pedidos: Los usuarios pueden confirmar su compra, lo que generará un pedido en Firestore con todos los libros seleccionados.

- Gestión de Pedidos: Los pedidos confirmados se almacenan en Firestore y están disponibles para revisión posterior.



## Componentes Clave

### Context
El contexto (Context/Context.jsx) es el encargado de manejar el estado global de la aplicación. Se ocupa de:

- Gestión de Libros: Obtiene los libros desde Firestore y los almacena en el estado global.
- Gestión del Carrito: Almacena el carrito en el estado global y maneja la lógica para añadir, actualizar y eliminar productos.
- Pedidos: Almacena los pedidos y permite la creación y recuperación de estos desde Firestore.

### NavBar
El componente de navegación (NavBar/NavBar.jsx) proporciona enlaces a las diferentes secciones de la aplicación, incluyendo la página de inicio, productos, contacto, y la visualización de pedidos.

### ItemListContainer
Este componente (ItemListContainer/ItemListContainer.jsx) es el responsable de mostrar la lista de libros. También incluye funciones de búsqueda y filtrado, y muestra un loader mientras se cargan los datos.

### CartWidgetContainer
El componente del carrito (CartWidgetContainer/CartWidgetContainer.jsx) permite a los usuarios interactuar con su carrito de compras. Incluye botones para vaciar el carrito, confirmar la compra, y muestra el total de productos y el precio total.


## Uso

Una vez que la aplicación esté en ejecución, puedes navegar por las diferentes secciones:

- Inicio: Página principal de la aplicación.
- Productos: Explora la lista de libros disponibles.
- Contacto: Información de contacto.
- Mis Pedidos: Revisa los pedidos realizados anteriormente.

### Flujo de Compra

- Explorar Libros: Navega por la lista de libros disponibles.
- Añadir al Carrito: Selecciona los libros que deseas comprar y agrégalos al carrito.
- Revisar Carrito: Ajusta las cantidades o elimina productos según sea necesario.
- Confirmar Pedido: Finaliza la compra, lo que añadirá el pedido a la base de datos de Firestore.

## Detalles Técnicos

### Firebase Integration

La integración con Firebase se realiza a través del SDK de Firebase, utilizando Firestore como base de datos. Los libros y pedidos se almacenan en colecciones separadas:

- Libros: Almacena información sobre cada libro disponible.

- Compras: Almacena la información del pedido y los libros comprados por el usuario.

### Manejo del Estado

El manejo del estado global se realiza utilizando el Context API de React. Esto permite que los datos del carrito, libros, y pedidos sean accesibles desde cualquier parte de la aplicación.

### Persistencia del Carrito

El carrito de compras se persiste en localStorage, permitiendo que los usuarios mantengan su sesión de compra activa incluso si recargan la página o cierran el navegador.

## Dependencias
Este proyecto utiliza las siguientes dependencias:

- React: Biblioteca principal para construir la UI.
- React Router: Manejo de rutas y navegación.
- Firebase: Integración con Firestore para almacenamiento de datos.
- SweetAlert2: Para alertas y notificaciones.

- React Context API: Para la gestión del estado global de la aplicación.

