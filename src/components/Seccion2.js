import React, { useState } from 'react';

// Importar las imágenes desde la carpeta `src/Imagen`
import leyProteccionDatosImg from '../Imagen/Ley General de protección de datos Personales de México.jpg';
import leyPropiedadIndustrialImg from '../Imagen/Ley de propiedad industrial.jpg';
import leyDerechosAutorImg from '../Imagen/Ley federal de derechos de autor.jpg';
import leyDatosPersonalesImg from '../Imagen/Ley federal de datos personales en posesión de particulares.jpg';
import codigoPenalFederalImg from '../Imagen/Código penal federal.png';
import leyTransparenciaImg from '../Imagen/Ley general de transparencia y acceso a la información.png';
import criptografiaSimetricaImg from '../Imagen/Criptografía simétrica.png';
import criptografiaAsimetricaImg from '../Imagen/Criptografía asimétrica.png';
import cifradoBloquesFlujoImg from '../Imagen/Cifrado por bloques y por flujo.jpg';
import criptoanalisisImg from '../Imagen/criptoanálisis.png';

const seccion2Items = [
  { 
    name: 'Ley General de protección de datos Personales de México', 
    description: 'La Ley General de Protección de Datos Personales en Posesión de Sujetos Obligados de México, promulgada en 2017, tiene como objetivo regular el tratamiento de los datos personales que están en manos de entidades gubernamentales (federales, estatales y municipales) para garantizar el derecho a la privacidad y protección de la información de los ciudadanos. Esta ley establece principios y obligaciones para el manejo adecuado de los datos, como la licitud, calidad, consentimiento y seguridad, además de otorgar a las personas derechos para acceder, rectificar, cancelar y oponerse (derechos ARCO) al uso de sus datos. Su propósito es proteger la información personal de posibles abusos, asegurando que las instituciones públicas actúen con transparencia y responsabilidad.', 
    img: leyProteccionDatosImg 
  },
  { 
    name: 'Ley de propiedad industrial', 
    description: 'La Ley de Propiedad Industrial de México tiene como objetivo proteger y regular los derechos de propiedad industrial, que incluyen las invenciones, patentes, marcas, diseños industriales, nombres comerciales y secretos industriales. Esta ley busca fomentar la innovación, el desarrollo tecnológico y la competencia leal en el mercado, garantizando que los creadores, inventores y titulares de marcas puedan explotar sus creaciones y obtener reconocimiento económico por ellas. Asimismo, establece mecanismos para prevenir y sancionar la infracción de derechos de propiedad industrial, promoviendo un entorno en el que los activos intangibles de las empresas e individuos estén protegidos contra usos indebidos o imitaciones.', 
    img: leyPropiedadIndustrialImg 
  },
  { 
    name: 'Ley federal de derechos de autor', 
    description: 'La Ley Federal de Derechos de Autor de México protege los derechos de los creadores sobre sus obras literarias, artísticas y científicas, garantizando el reconocimiento y la compensación por el uso de sus creaciones. Esta ley cubre una amplia gama de obras, incluidas las literarias, musicales, audiovisuales, pictóricas, fotográficas y software, otorgando a los autores derechos morales (como el reconocimiento de la autoría) y patrimoniales (que les permiten explotar económicamente su obra). Además, establece los procedimientos para el registro de obras y los mecanismos para protegerlas contra plagio o uso no autorizado, promoviendo así la creatividad y la cultura en el país.', 
    img: leyDerechosAutorImg 
  },
  { 
    name: 'Ley federal de datos personales en posesión de particulares', 
    description: 'La Ley Federal de Protección de Datos Personales en Posesión de los Particulares de México, promulgada en 2010, regula cómo las empresas y organizaciones privadas deben recopilar, almacenar, usar y proteger los datos personales de las personas. Esta ley otorga a los individuos el derecho a acceder, rectificar, cancelar y oponerse al uso de sus datos (derechos ARCO), y establece principios como la licitud, el consentimiento, la seguridad y la responsabilidad en el tratamiento de la información. Su propósito es garantizar la privacidad y proteger los datos personales de los abusos o mal manejo, estableciendo sanciones para quienes incumplan las disposiciones de la ley. Es un marco clave para garantizar que las organizaciones manejen los datos de manera ética y segura.', 
    img: leyDatosPersonalesImg 
  },
  { 
    name: 'Código penal federal', 
    description: 'El Código Penal Federal de México es el marco legal que establece los delitos y las sanciones correspondientes en el ámbito federal. Promulgado originalmente en 1931 y actualizado en diversas ocasiones, el Código Penal Federal define conductas ilícitas que afectan al orden público y a la seguridad del Estado, como delitos contra la salud, el patrimonio, la vida, la integridad física, y la administración de justicia. También regula delitos cibernéticos, ambientales, financieros y relacionados con la corrupción. El código establece las penas que pueden incluir prisión, multas o inhabilitación, y busca garantizar el respeto a las leyes y derechos en todo el territorio mexicano, contribuyendo al mantenimiento de la justicia y el orden social.', 
    img: codigoPenalFederalImg 
  },
  { 
    name: 'Ley general de transparencia y acceso a la información', 
    description: 'La Ley General de Transparencia y Acceso a la Información Pública de México, promulgada en 2015, establece el derecho de todas las personas a acceder a la información en posesión de cualquier autoridad, entidad o persona que reciba y ejerza recursos públicos. Su objetivo es promover la rendición de cuentas y la transparencia en la gestión pública, garantizando que la información gubernamental sea accesible, clara y verificable. La ley obliga a los sujetos obligados, como los gobiernos y entidades públicas, a proporcionar la información solicitada, salvo excepciones como la confidencialidad o seguridad nacional. También crea mecanismos y procedimientos para garantizar el acceso a la información, fomentando así un gobierno abierto y participativo.', 
    img: leyTransparenciaImg 
  },
  { 
    name: 'Criptografía simétrica', 
    description: 'La criptografía simétrica es un método de cifrado en el que se utiliza una sola clave para tanto el cifrado como el descifrado de la información. Esto significa que el emisor y el receptor deben compartir la misma clave secreta para asegurar la comunicación. La principal ventaja de la criptografía simétrica es su eficiencia, ya que permite un cifrado y descifrado rápido, siendo útil para grandes cantidades de datos. Sin embargo, su principal desafío radica en la gestión segura de las claves, ya que, si la clave es interceptada, el sistema completo queda vulnerable. Ejemplos comunes de algoritmos simétricos incluyen AES (Advanced Encryption Standard) y DES (Data Encryption Standard).', 
    img: criptografiaSimetricaImg 
  },
  { 
    name: 'Criptografía asimétrica', 
    description: 'La criptografía asimétrica es un método de cifrado que utiliza un par de claves: una clave pública y una clave privada. La clave pública se puede compartir libremente y se utiliza para cifrar la información, mientras que la clave privada, que es secreta, se emplea para descifrarla. A diferencia de la criptografía simétrica, no es necesario que el emisor y el receptor compartan una clave secreta, lo que mejora la seguridad en la transmisión de datos. Este tipo de criptografía es fundamental para asegurar comunicaciones en Internet, como en correos electrónicos o transacciones en línea. Algoritmos comunes de criptografía asimétrica son RSA y ECC (Elliptic Curve Cryptography).', 
    img: criptografiaAsimetricaImg 
  },
  { 
    name: 'Cifrado por bloques y por flujo', 
    description: 'El cifrado por bloques y el cifrado por flujo son dos métodos principales de cifrado en criptografía. El cifrado por bloques divide los datos en bloques de tamaño fijo (como 64 o 128 bits), y cada bloque se cifra por separado usando una clave, lo que lo hace más adecuado para manejar grandes volúmenes de datos de forma segura y estructurada. Ejemplos de algoritmos de cifrado por bloques son AES y DES. Por otro lado, el cifrado por flujo cifra los datos bit por bit o byte por byte, en tiempo real, lo que lo hace más rápido y eficiente para transmitir datos continuos, como en comunicaciones en tiempo real. RC4 es un ejemplo común de cifrado por flujo. Ambos métodos tienen ventajas y desventajas dependiendo del contexto y el tipo de datos a proteger.', 
    img: cifradoBloquesFlujoImg 
  },
  { 
    name: 'Criptoanálisis', 
    description: 'El criptoanálisis es la disciplina que se encarga de estudiar y atacar los sistemas de cifrado para descifrar información sin conocer la clave secreta. Su objetivo es encontrar debilidades o vulnerabilidades en los algoritmos criptográficos con el fin de acceder a los datos protegidos. Los criptoanalistas emplean diversas técnicas, como el análisis de patrones en los mensajes cifrados, ataques de fuerza bruta o la explotación de errores en la implementación del cifrado. El criptoanálisis desempeña un papel crucial tanto para evaluar la seguridad de los sistemas de cifrado como para mejorar los métodos de protección de la información, además de ser utilizado en contextos como el espionaje, la seguridad informática y la investigación forense.', 
    img: criptoanalisisImg 
  }
];

const Seccion2 = () => {
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

  const filteredItems = seccion2Items.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Confidencialidad de la información</h1>
      
      {/* Input de búsqueda */}
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

export default Seccion2;