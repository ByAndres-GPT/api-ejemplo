# 📌 API de Jugadores, Categorías y Entrenadores

CRUD de jugadores, categorías y entrenadores utilizando **Node.js, Express y Sequelize**.

## 🚀 Endpoints

📍 **Base URL:** `http://localhost:4444/`

### 🎮 Jugadores
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| **POST** | `/jugadores/` | Registrar un nuevo jugador |
| **PUT** | `/jugadores/:id_jugador` | Editar un jugador |
| **DELETE** | `/jugadores/:id_jugador` | Eliminar un jugador |
| **GET** | `/jugadores/` | Obtener todos los jugadores |
| **GET** | `/jugadores/:id_jugador` | Obtener un jugador por ID |

### 🏆 Entrenadores
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| **POST** | `/entrenadores/` | Registrar un nuevo entrenador |
| **PUT** | `/entrenadores/:id_entrenador` | Editar un entrenador |
| **DELETE** | `/entrenadores/:id_entrenador` | Eliminar un entrenador |
| **GET** | `/entrenadores/` | Obtener todos los entrenadores |
| **GET** | `/entrenadores/:id_entrenador` | Obtener un entrenador por ID |

### 📋 Categorías
| Método | Endpoint | Descripción |
|--------|---------|-------------|
| **POST** | `/categorias/` | Registrar una nueva categoría |
| **PUT** | `/categorias/:id_categoria` | Editar una categoría |
| **DELETE** | `/categorias/:id_categoria` | Eliminar una categoría |
| **GET** | `/categorias/` | Obtener todas las categorías |
| **GET** | `/categorias/:id_categoria` | Obtener una categoría por ID |


### 🔧 Instalación y Ejecución
1. Clonar el repositorio:
   ```sh
   git clone https://github.com/ByAndres-GPT/api-basica-express.git
2. Importar la base de datos
3. Instalar las dependencias:
   ```sh
   Abrir la terminal en la carpeta api-ejemplo
   npm i
4. Ejecutar el protecto:
   ```sh
   npm run dev
5. Probar con un cliente REST.
   
