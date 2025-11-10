# Proyecto: Constructores y Objetos en JavaScript

Este proyecto contiene ejercicios para aprender sobre constructores, objetos y el uso de `this` en JavaScript.

## Tareas Realizadas

### Task 1: Mail Object Básico ✅
- utilizamos un constructor `Mail` con propiedades fijas
- **Aprendimos**: Cómo definir un constructor básico y crear instancias con `new`

### Task 2: Mail con Parámetros de Ejecución  ✅
- Modificamos el constructor para recibir parámetros desde `process.argv`
- **Aprendimos**: Cómo acceder a argumentos de línea de comandos y asignarlos a propiedades

### Task 3: Mail con Método ✅
- Agregamos el método `printMail()` al constructor
- **Aprendimos**: Cómo definir métodos dentro de constructores que pueden acceder a las propiedades del objeto

### Task 4: Constructor Journey ✅
- Creamos mi propio constructor `Journey` que toma parámetros start y end
- **Aprendimos**: Cómo diseñar un constructor desde cero y usarlo con datos dinámicos

### Task 5: FriendsList con Array ✅
- Implementamos un constructor que almacena nombres en un array
- **Aprendimos**: Cómo trabajar con arrays dentro de objetos y recoger input del usuario

### Task 6: Lista de compra✅
- Creamos un constructor ShoppingList que almacena productos en un array.
- Mediante prompts, el usuario define cuántos productos ingresará.
- Usamos un bucle for para recolectar nombre y cantidad de cada producto.
- Implementamos un sistema de eliminación de duplicados usando Set y JSON.stringify (cosecha de @tiagofabian).
- Los productos duplicados (mismo nombre y misma cantidad) se filtran al final.
- Mostramos la lista final sin duplicados con formato numerado.

### Task 7: Constructor para describir auto ✅
- Creamos un constructor car para modelar un automóvil con 6 características principales.
- Implementamos interacción completa con el usuario mediante prompts para cada propiedad.
- Desarrollamos un método mostrarInfo() que presenta la información de forma visualmente atractiva.
- El sistema recolecta datos en tiempo real y crea una instancia personalizada.
  
## Conceptos Clave Aplicados

### Uso de this
- this se refiere a la instancia actual del objeto en todos los constructores
- Se usa para asignar propiedades específicas: this.propiedad = valor
- Permite que cada objeto mantenga sus valores independientes
* Aplicado en: Mail, Journey, FriendsList, ShoppingList, Car

### Constructores
- Función constructora: function NombreConstructor(parametros) { ... }
- Sirven como plantilla para crear múltiples objetos del mismo tipo
- Definen la estructura base y comportamiento común
- Implementados en: Mail(), Journey(), FriendsList(), ShoppingList(), Car()

### Operador new
- new Constructor() crea una nueva instancia del objeto
- Asigna memoria para cada nuevo objeto
- Establece el contexto correcto de this para cada instancia
- Retorna automáticamente el nuevo objeto listo para usar
- Utilizado en todos los tasks para instanciar objetos

## Reflexión 
- Los objetos literales son rapidos de crear y tienen una sintaxis simple, siendo ideales para cuando se necesitan crear objetos unicos.
- las funciones constructoras, pueden tener un estructura que permite reutilizarse con distintos datos y son escalables.
- this permite diferenciar los objetos que son creados por un constructor, pudiendo tener distintos datos aunque sean de la misma familia.
