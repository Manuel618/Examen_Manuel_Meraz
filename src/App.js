import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Inicio from './components/Inicio';
import Seccion1 from './components/Seccion1';
import Seccion2 from './components/Seccion2';
import Seccion3 from './components/Seccion3';

// Importar la imagen circular
import navImage from './Imagen/Icono.png'; // Asegúrate de que la imagen esté en la carpeta correcta

// Componente de navegación que aplica estilos según la ruta activa
const Navigation = () => {
  const location = useLocation(); // Obtener la ubicación actual de la URL

  return (
    <nav style={styles.navbar}>
      <div style={styles.left}>Jesús Manuel Meraz Marrufo</div>
      <div style={styles.right}>
        <Link
          style={{
            ...styles.button,
            ...(location.pathname === '/' ? styles.activeButton : {}),
          }}
          to="/"
        >
          Inicio
        </Link>
        <Link
          style={{
            ...styles.button,
            ...(location.pathname === '/seccion1' ? styles.activeButton : {}),
          }}
          to="/seccion1"
        >
          Sección 1
        </Link>
        <Link
          style={{
            ...styles.button,
            ...(location.pathname === '/seccion2' ? styles.activeButton : {}),
          }}
          to="/seccion2"
        >
          Sección 2
        </Link>
        <Link
          style={{
            ...styles.button,
            ...(location.pathname === '/seccion3' ? styles.activeButton : {}),
          }}
          to="/seccion3"
        >
          Sección 3
        </Link>
        {/* Imagen circular en la parte derecha */}
        <img src={navImage} alt="Imagen Circular" style={styles.navImage} />
      </div>
    </nav>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/seccion1" element={<Seccion1 />} />
          <Route path="/seccion2" element={<Seccion2 />} />
          <Route path="/seccion3" element={<Seccion3 />} />
        </Routes>
      </div>
    </Router>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#333',
    color: 'white',
    flexWrap: 'wrap', // Permite que los elementos se muevan a la siguiente línea en pantallas pequeñas
  },
  left: {
    marginLeft: '20px',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  right: {
    display: 'flex',
    alignItems: 'center', // Alinear la imagen con los botones
    gap: '15px',
    marginRight: '20px',
  },
  button: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '16px',
    padding: '10px',
  },
  activeButton: {
    backgroundColor: '#007bff', // Color de fondo cuando el botón está activo
    borderRadius: '5px', // Bordes redondeados
    color: 'white',
  },
  navImage: {
    width: '40px', // Tamaño de la imagen circular
    height: '40px',
    borderRadius: '50%', // Hacer la imagen circular
    objectFit: 'cover',
  },
  // Media query para ajustar el diseño en pantallas pequeñas
  '@media (max-width: 768px)': {
    navbar: {
      flexDirection: 'column', // Cambia la dirección a columna en pantallas pequeñas
    },
    left: {
      marginBottom: '10px', // Espacio entre el nombre y los botones en pantallas pequeñas
      textAlign: 'center', // Centrar el nombre
    },
    right: {
      justifyContent: 'center', // Centrar los botones y la imagen
      flexDirection: 'column', // Colocar los botones y la imagen en columna en pantallas pequeñas
      gap: '10px', // Añadir espacio entre los elementos
    },
    button: {
      fontSize: '14px', // Reducir el tamaño de la fuente en pantallas pequeñas
    },
    navImage: {
      width: '35px', // Reducir el tamaño de la imagen en pantallas pequeñas
      height: '35px',
    },
  },
  '@media (max-width: 480px)': {
    button: {
      fontSize: '12px', // Aún más pequeño en pantallas muy pequeñas
    },
    left: {
      fontSize: '10px', // Reducir el tamaño de la fuente del nombre en pantallas pequeñas
    },
  },
};

export default App;
