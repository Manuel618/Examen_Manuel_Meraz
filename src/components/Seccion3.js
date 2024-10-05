import React, { useState } from 'react';

// Importar las imágenes desde la carpeta `src/Imagen`
import accesibilidadImg from '../Imagen/Accesibilidad.png';
import confidencialidadImg from '../Imagen/Confidencialidad.png';
import disponibilidadImg from '../Imagen/Disponibilidad.png';
import autenticacionImg from '../Imagen/Autenticación.png';
import integridadImg from '../Imagen/Integridad.png';
import controlAccesoImg from '../Imagen/Control de acceso.png';

const seccion3Items = [
  { 
    name: 'Accesibilidad', 
    description: 'La accesibilidad se refiere al diseño y adaptación de entornos, productos, servicios o tecnologías para que sean utilizables por el mayor número de personas posible, incluidas aquellas con discapacidades o limitaciones temporales o permanentes. En el contexto digital, la accesibilidad implica crear sitios web, aplicaciones y plataformas tecnológicas que sean fáciles de navegar y comprender por personas con diferentes capacidades, como usuarios con discapacidades visuales, auditivas o motoras. El objetivo es eliminar barreras y garantizar que todos, independientemente de sus habilidades, puedan acceder y utilizar la información y los servicios de manera equitativa.', 
    img: accesibilidadImg 
  },
  { 
    name: 'Confidencialidad', 
    description: 'La confidencialidad es el principio de seguridad que garantiza que la información solo sea accesible por aquellas personas, entidades o sistemas autorizados. Su objetivo es proteger la privacidad y evitar que datos sensibles, como información personal, financiera o empresarial, sean divulgados, alterados o accedidos por terceros no autorizados. Para asegurar la confidencialidad, se implementan diversas medidas como el cifrado de datos, controles de acceso y políticas de manejo de información. Mantener la confidencialidad es crucial en sectores como la salud, finanzas y gobierno, donde la exposición de información puede tener consecuencias graves tanto legales como económicas.', 
    img: confidencialidadImg 
  },
  { 
    name: 'Disponibilidad', 
    description: 'La disponibilidad es un principio clave de la seguridad de la información que garantiza que los datos, sistemas y servicios estén accesibles y operativos para los usuarios autorizados cuando los necesiten. Su objetivo es asegurar que los recursos de TI estén siempre disponibles, sin interrupciones, minimizando el impacto de fallos, ataques o desastres que puedan afectar su funcionamiento. Para mantener la disponibilidad, se implementan medidas como redundancia de sistemas, planes de recuperación ante desastres, respaldos periódicos y protección contra ataques de denegación de servicio (DoS). Es esencial en sectores como la banca, las telecomunicaciones y la atención médica, donde las interrupciones pueden tener consecuencias graves.', 
    img: disponibilidadImg 
  },
  { 
    name: 'Autenticación', 
    description: 'La autenticación es el proceso mediante el cual se verifica la identidad de un usuario, dispositivo o sistema antes de otorgar acceso a recursos o información protegida. Este proceso asegura que solo los individuos o sistemas autorizados puedan acceder a ciertos datos o realizar acciones dentro de un sistema. Los métodos de autenticación pueden variar, desde contraseñas y códigos PIN, hasta autenticación multifactor (MFA), que incluye factores adicionales como huellas dactilares, reconocimiento facial o códigos enviados a dispositivos móviles. La autenticación es fundamental para garantizar la seguridad de los sistemas y prevenir accesos no autorizados que puedan comprometer la confidencialidad y la integridad de la información.', 
    img: autenticacionImg 
  },
  { 
    name: 'Integridad', 
    description: 'La integridad es un principio fundamental de la seguridad de la información que garantiza que los datos sean precisos, consistentes y no hayan sido alterados o modificados de manera no autorizada. Su objetivo es proteger la confiabilidad y exactitud de la información durante su almacenamiento, procesamiento y transmisión, asegurando que permanezca intacta desde su creación hasta su uso. Para mantener la integridad, se implementan mecanismos como controles de acceso, firmas digitales, sumas de verificación (checksums) y tecnologías de hash. La integridad es crucial en sectores como la banca, salud y administración pública, donde cualquier modificación no autorizada puede tener graves consecuencias.', 
    img: integridadImg 
  },
  { 
    name: 'Control de acceso', 
    description: 'El control de acceso es un mecanismo de seguridad que regula quién o qué puede ver, utilizar o modificar recursos en un sistema de información. Su objetivo es garantizar que solo los usuarios o sistemas autorizados tengan acceso a datos, aplicaciones o sistemas, protegiendo así la confidencialidad, integridad y disponibilidad de la información. Los controles de acceso pueden ser físicos, como cerraduras o tarjetas de acceso, o lógicos, como contraseñas, autenticación multifactor y listas de control de acceso (ACLs). Este mecanismo es esencial para prevenir accesos no autorizados, asegurar el cumplimiento de políticas de seguridad y minimizar riesgos de robo, pérdida o manipulación de información sensible.', 
    img: controlAccesoImg 
  }
];

const Seccion3 = () => {
  const [modalContent, setModalContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const openModal = (item) => {
    setModalContent(item);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredItems = seccion3Items.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Confidencialidad de la información</h1>

      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchChange}
        style={styles.searchInput}
      />

      <ul style={styles.list}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li 
              key={index} 
              style={styles.listItem} 
              onClick={() => openModal(item)}
              onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
            >
              <div style={styles.card}>
                <img src={item.img} alt={item.name} style={styles.buttonImage} />
                <br />
                <span style={styles.itemName}>{item.name}</span>
              </div>
            </li>
          ))
        ) : (
          <p style={styles.noResults}>No se encontraron resultados.</p>
        )}
      </ul>

      {/* Modal */}
      {modalContent && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>{modalContent.name}</h2>
            <img src={modalContent.img} alt={modalContent.name} style={styles.image} />
            <p style={styles.modalText}>{modalContent.description}</p>
            <button onClick={closeModal} style={styles.closeButton}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    backgroundColor: '#FFFFF0',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  searchInput: {
    marginBottom: '20px',
    padding: '10px',
    width: '300px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    gap: '20px',
  },
  listItem: {
    cursor: 'pointer',
    textAlign: 'center',
  },
  card: {
    border: '1px solid #ccc',
    borderRadius: '10px',
    padding: '15px',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s ease',
    width: '200px',
    backgroundColor: '#F0F0F0',
  },
  buttonImage: {
    width: '188px',
    height: '166px',
    marginBottom: '10px',
  },
  itemName: {
    fontSize: '16px',
  },
  modalOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: 'white',
    padding: '20px',
    borderRadius: '10px',
    maxWidth: '460px',
    textAlign: 'center',
  },
  modalTitle: {
    marginBottom: '20px',
  },
  modalText: {
    textAlign: 'left',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px',
  },
  closeButton: {
    marginTop: '10px',
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  noResults: {
    fontSize: '18px',
    color: '#999',
  },
};

export default Seccion3;