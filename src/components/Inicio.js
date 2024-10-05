import React, { useState } from 'react';

// Importar las imágenes desde la carpeta `src/Imagen`
import seguridadInformacionImg from '../Imagen/Seguridad de la información.png';
import ataquesCiberneticosImg from '../Imagen/Ataques cibernéticos_Sección 1.png';
import confidencialidadInformacionImg from '../Imagen/Confidencialidad de la información_Sección 2.png';
import principiosSeguridadImg from '../Imagen/Principios de seguridad de la información_Seccion 3.png';


const inicioItems = [
  {
    name: 'Seguridad de la información',
    description: 'La Seguridad de la Información es la disciplina que busca proteger los datos y sistemas de información mediante la aplicación de principios clave como la confidencialidad, para restringir el acceso a personas autorizadas; la integridad, que asegura la exactitud y consistencia de la información evitando alteraciones no autorizadas; y la disponibilidad, que garantiza que los datos estén accesibles cuando sean necesarios. Para lograr esto, se implementan controles de acceso, medidas de cifrado, políticas de seguridad y estrategias de recuperación ante desastres, protegiendo la información tanto digital como física frente a amenazas internas y externas.',
    img: seguridadInformacionImg,
  },
  {
    name: 'Ataques cibernéticos (Sección 1)',
    description: 'Un ataque cibernético es una acción maliciosa dirigida a sistemas, redes o dispositivos con el objetivo de robar, alterar, o destruir datos, o interrumpir servicios. Estos ataques pueden incluir técnicas como malware (software malicioso), phishing (engaño para robar información), ataques de denegación de servicio (DoS), inyección de SQL (acceso indebido a bases de datos), ataques de fuerza bruta (adivinación de contraseñas), y ataques de intermediario (Man-in-the-Middle). Los atacantes buscan explotar vulnerabilidades en sistemas para obtener acceso no autorizado, causando pérdidas de datos, daños financieros y afectando la integridad y disponibilidad de la información.',
    img: ataquesCiberneticosImg,
  },
  {
    name: 'Confidencialidad de la información (Sección 2)',
    description: 'La confidencialidad de la información es un principio clave de la seguridad que busca proteger los datos sensibles, asegurando que solo las personas o sistemas autorizados puedan acceder a ellos. Esto se logra mediante mecanismos como el cifrado, controles de acceso y políticas de seguridad que previenen el acceso no autorizado y la divulgación de información. Su objetivo es garantizar la privacidad y evitar la fuga de datos personales, financieros o empresariales, protegiendo así la integridad y confianza en los sistemas que gestionan la información.',
    img: confidencialidadInformacionImg,
  },
  {
    name: 'Principios de seguridad de la información (Sección 3)',
    description: 'Los principios de seguridad de la información se basan en tres pilares fundamentales: confidencialidad, integridad, y disponibilidad. La confidencialidad asegura que solo las personas o sistemas autorizados puedan acceder a la información, protegiendo su privacidad mediante el uso de controles de acceso y cifrado. La integridad garantiza que los datos no sean alterados de manera indebida, manteniendo su exactitud y consistencia. Finalmente, la disponibilidad asegura que la información y los sistemas estén accesibles cuando se necesiten, a través de medidas como respaldos y planes de recuperación. Estos principios son esenciales para proteger la información frente a amenazas y garantizar su uso seguro.',
    img: principiosSeguridadImg,
  },
];

const Inicio = () => {
  // Establecer "Seguridad de la información" como el cuadro abierto por defecto al inicio
  const [selectedItem, setSelectedItem] = useState(inicioItems[0]);

  const selectItem = (item) => {
    setSelectedItem(item);
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageGrid}>
        {inicioItems.map((item, index) => (
          <div 
            key={index} 
            style={styles.gridItem}
            onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.05)'}
            onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
          >
            {/* Imagen */}
            <div
              style={styles.imageContainer}
              onClick={() => selectItem(item)}
            >
              <img
                src={item.img}
                alt={item.name}
                style={styles.image} // Mantener el mismo ancho siempre
              />
            </div>

            {/* Cuadro de texto al lado derecho si la imagen está seleccionada */}
            {selectedItem === item && (
              <div style={styles.descriptionBox}>
                <h2>{selectedItem.name}</h2>
                <p>{selectedItem.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
  },
  imageGrid: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    width: '100%',
    maxWidth: '1400px', // Limitar el ancho máximo
  },
  gridItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 10px',
    position: 'relative',
    flexGrow: 1,
    transition: 'transform 0.3s ease', // Animación suave
  },
  imageContainer: {
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '260px', // Ancho más pequeño
    height: '520px', // Alto más pequeño
    objectFit: 'cover',
    borderRadius: '5px',
  },
  descriptionBox: {
    padding: '10px',
    backgroundColor: '#F0F0F0',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginLeft: '20px',
    width: '270px', // Mismo ancho que la imagen
    height: '520px', // Mismo alto que la imagen
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centrar horizontalmente
    justifyContent: 'flex-start', // El texto comienza desde arriba
    textAlign: 'left', // Alinear el texto a la izquierda
  },
};

export default Inicio;