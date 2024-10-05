import React, { useState } from 'react';

// Importar las imágenes desde la carpeta `src/Imagen`
import ddosImg from '../Imagen/DDoS.jpg';
import ordenadorZombieImg from '../Imagen/Ordenador Zombie.png';
import ciberdelincuenteImg from '../Imagen/Ciberdelincuente.png';
import botmasterImg from '../Imagen/Botmaster.jpg';
import botnetImg from '../Imagen/Botnet.png';
import ransomwareImg from '../Imagen/Ransomware.jpg';
import disclaimerImg from '../Imagen/Disclaimer.png';
import morrisWormImg from '../Imagen/The morris worm.jpg';
import ciberwarfareImg from '../Imagen/Ciberwarfare.png';
import stuxnetImg from '../Imagen/Stuxnet.jpg';
import moonlightMazeImg from '../Imagen/Moonlight Maze.jpg';
import operationAuroraImg from '../Imagen/Opetarin Aurora.jpg';
import freezeItImg from '../Imagen/Freeze it into submission.jpeg';
import wannacryImg from '../Imagen/Wannacry.png';
import petyaImg from '../Imagen/Petya.jpg';
import equifaxImg from '../Imagen/Equifax(ataque).jpg';
import cam4Img from '../Imagen/Cam4(ataque).jpg';

const Seccion1 = () => {
  const [modalContent, setModalContent] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const ataques = [
    { 
      name: 'DDoS', 
      img: ddosImg, 
      buttonImg: ddosImg, 
      description: 'Un ataque DDoS (Distributed Denial of Service) es una forma de ciberataque en la que múltiples dispositivos comprometidos, controlados por un atacante, se utilizan para inundar un servidor, red o servicio con un volumen masivo de tráfico. Esto satura los recursos del sistema, haciéndolo inaccesible para los usuarios legítimos. Los ataques DDoS suelen aprovechar botnets, que son redes de dispositivos infectados con malware, para enviar solicitudes simultáneas desde múltiples ubicaciones. Las consecuencias pueden incluir la interrupción del servicio, pérdidas económicas y daño reputacional. Las medidas de mitigación incluyen servicios especializados que filtran o dispersan el tráfico malicioso.' 
    },
    { 
      name: 'Ordenador Zombie', 
      img: ordenadorZombieImg, 
      buttonImg: ordenadorZombieImg, 
      description: 'Un ordenador zombie es un dispositivo que ha sido infectado con malware, permitiendo a un atacante tomar control remoto del mismo sin que el propietario lo sepa. Estos ordenadores forman parte de redes más grandes llamadas botnets, utilizadas para realizar actividades maliciosas como ataques DDoS, envío masivo de correos no deseados (spam), o incluso el robo de información. Aunque el ordenador sigue funcionando normalmente para el usuario, en segundo plano está ejecutando tareas controladas por el atacante, lo que lo convierte en una herramienta para ciberdelitos sin el conocimiento del propietario.' 
    },
    { 
      name: 'Ciberdelincuente', 
      img: ciberdelincuenteImg, 
      buttonImg: ciberdelincuenteImg, 
      description: 'Un ciberdelincuente es una persona o grupo que utiliza habilidades tecnológicas para realizar actividades ilegales en el mundo digital. Estos individuos buscan vulnerar la seguridad de sistemas, redes o dispositivos con el objetivo de robar información, cometer fraudes, interrumpir servicios o extorsionar a sus víctimas. Los ciberdelincuentes emplean tácticas como el phishing, el malware, y los ataques DDoS, entre otros. Pueden operar individualmente o como parte de organizaciones criminales sofisticadas, y sus acciones pueden tener graves consecuencias económicas, legales y de seguridad para personas, empresas y gobiernos.' 
    },
    { 
      name: 'Botmaster', 
      img: botmasterImg, 
      buttonImg: botmasterImg, 
      description: 'Un botmaster es el individuo o grupo que controla una botnet, una red de dispositivos infectados (conocidos como ordenadores zombies) que son utilizados de forma remota para realizar actividades maliciosas sin el conocimiento de sus propietarios. El botmaster gestiona estos dispositivos infectados, coordinando acciones como ataques DDoS, envío de spam masivo, robo de datos o fraudes en línea. Utilizan software malicioso para infectar los dispositivos y establecer canales de comunicación con la botnet, desde los cuales pueden ejecutar comandos a gran escala, lo que les permite causar daños significativos y realizar actividades ilegales de manera encubierta.' 
    },
    { 
      name: 'Botnet', 
      img: botnetImg, 
      buttonImg: botnetImg, 
      description: 'Una botnet es una red de dispositivos informáticos comprometidos, conocidos como ordenadores zombies, que han sido infectados con malware y están bajo el control remoto de un atacante o botmaster. Los dispositivos dentro de una botnet pueden ser computadoras, servidores e incluso dispositivos IoT (Internet de las Cosas). Los botnets se utilizan para llevar a cabo actividades maliciosas de gran escala, como ataques DDoS, envío masivo de correos spam, robo de información o fraude. Estas redes permiten a los ciberdelincuentes aprovechar el poder combinado de miles o millones de dispositivos para realizar operaciones coordinadas de manera oculta y eficaz, lo que las hace difíciles de detectar y desmantelar.' 
    },
    { 
      name: 'Ransomware', 
      img: ransomwareImg, 
      buttonImg: ransomwareImg, 
      description: 'El ransomware es un tipo de malware que cifra los archivos o bloquea el acceso a los sistemas de una víctima, exigiendo un pago (ransom) a cambio de restaurar el acceso o descifrar los datos. Los ciberdelincuentes que utilizan ransomware suelen amenazar con borrar los datos o hacerlos públicos si no se paga el rescate. El ransomware se propaga comúnmente a través de correos electrónicos maliciosos, enlaces fraudulentos o vulnerabilidades en software desactualizado. Las víctimas pueden ser individuos, empresas o incluso gobiernos, y las consecuencias incluyen pérdida de datos, interrupción de servicios y costos significativos, tanto por el rescate como por la restauración de sistemas.' 
    },
    { 
      name: 'Disclaimer', 
      img: disclaimerImg, 
      buttonImg: disclaimerImg, 
      description: 'Un disclaimer es una declaración legal o advertencia que tiene como objetivo limitar la responsabilidad de una persona o entidad en determinadas circunstancias. Suele utilizarse para aclarar que la información proporcionada, ya sea en un sitio web, documento, producto o servicio, no garantiza resultados específicos y que el usuario asume la responsabilidad de su uso. Los disclaimers también pueden advertir sobre posibles riesgos, corregir malentendidos o establecer los límites de las obligaciones del autor o proveedor. Son comunes en ámbitos como la medicina, las finanzas o la tecnología, donde se busca proteger al emisor frente a reclamaciones legales.' 
    },
    { 
      name: 'The Morris Worm', 
      img: morrisWormImg, 
      buttonImg: morrisWormImg, 
      description: 'The Morris Worm, creado en 1988 por Robert Tappan Morris, fue uno de los primeros gusanos informáticos distribuidos a través de Internet y marcó un hito en la historia de la ciberseguridad. Diseñado inicialmente como un experimento para medir el tamaño de Internet, el gusano se propagó rápidamente debido a un error en su código, infectando miles de computadoras. Utilizaba vulnerabilidades en Unix para replicarse, causando una sobrecarga en los sistemas infectados, lo que los hacía inoperativos. Este incidente resaltó la necesidad de mejorar las medidas de seguridad en la red y llevó a la creación de leyes contra delitos informáticos en Estados Unidos, como la Ley de Fraude y Abuso Informático.' 
    },
    { 
      name: 'Ciberwarfare', 
      img: ciberwarfareImg, 
      buttonImg: ciberwarfareImg, 
      description: 'La ciberwarfare o guerra cibernética se refiere al uso de técnicas y ataques cibernéticos por parte de naciones o actores estatales para dañar, interrumpir o desestabilizar las infraestructuras, sistemas y redes de un país enemigo. Estos ataques pueden tener como objetivo sistemas militares, gubernamentales, financieros, energéticos o de telecomunicaciones, con el fin de causar caos, sabotaje o manipulación de información crítica. A diferencia de los ataques cibernéticos convencionales, la ciberwarfare se caracteriza por estar dirigida estratégicamente para afectar la seguridad nacional, y puede ser parte de un conflicto más amplio o una forma de espionaje o sabotaje entre naciones.' 
    },
    { 
      name: 'Stuxnet', 
      img: stuxnetImg, 
      buttonImg: stuxnetImg, 
      description: 'Stuxnet es un gusano informático altamente sofisticado descubierto en 2010, diseñado específicamente para atacar sistemas de control industrial, particularmente aquellos utilizados en instalaciones nucleares. Es considerado uno de los primeros ciberataques que tuvo consecuencias físicas directas, ya que su objetivo era sabotear las centrifugadoras del programa nuclear de Irán, causando su mal funcionamiento. Stuxnet se propagaba a través de dispositivos USB y aprovechaba vulnerabilidades desconocidas (zero-day) en sistemas Windows, infectando redes aisladas de Internet. Se cree que fue desarrollado por los gobiernos de Estados Unidos e Israel, marcando un hito en la ciberwarfare al demostrar cómo un malware podía ser utilizado como arma estratégica en operaciones militares.' 
    },
    { 
      name: 'Moonlight Maze', 
      img: moonlightMazeImg, 
      buttonImg: moonlightMazeImg, 
      description: 'Moonlight Maze fue una serie de ciberataques descubiertos a finales de la década de 1990, considerados uno de los primeros grandes casos de espionaje cibernético a nivel estatal. Estos ataques, que se sospecha fueron perpetrados por actores vinculados al gobierno ruso, tuvieron como objetivo redes del gobierno de Estados Unidos, incluidas las del Departamento de Defensa, la NASA y otras instituciones clave. Los atacantes accedieron a datos altamente sensibles, como información militar y científica, durante varios años antes de ser detectados. Moonlight Maze destacó la vulnerabilidad de los sistemas informáticos gubernamentales y marcó el inicio de una nueva era de espionaje cibernético a gran escala.' 
    },
    { 
      name: 'Operation Aurora', 
      img: operationAuroraImg, 
      buttonImg: operationAuroraImg, 
      description: 'Operation Aurora fue una serie de sofisticados ciberataques descubiertos en 2010, dirigidos principalmente contra grandes empresas tecnológicas, como Google, Adobe, y otras corporaciones de alto perfil. Se cree que los ataques fueron perpetrados por un grupo de hackers respaldados por el gobierno chino con el objetivo de robar propiedad intelectual y acceder a información sensible, como el código fuente de software. Los atacantes explotaron vulnerabilidades en Internet Explorer para acceder a los sistemas de las víctimas. Operation Aurora llamó la atención global sobre la creciente amenaza del espionaje cibernético a gran escala y llevó a muchas empresas a reevaluar sus medidas de seguridad.' 
    },
    { 
      name: 'Freeze it into submission', 
      img: freezeItImg, 
      buttonImg: freezeItImg, 
      description: '"Freeze it into submission" es una expresión que se refiere a una táctica de neutralización que implica inmovilizar o detener algo, generalmente una situación o entidad, hasta que se somete o se vuelve manejable. En el contexto de tecnología o ciberseguridad, puede aludir a estrategias para detener un sistema o proceso mediante la sobrecarga o interrupción de sus recursos hasta que deja de funcionar o cede ante la presión. Esta frase puede aplicarse a una variedad de escenarios, como bloquear un sistema con tráfico excesivo en un ataque DDoS o congelar las operaciones de una empresa hasta que cumpla con ciertas demandas.' 
    },
    { 
      name: 'WannaCry', 
      img: wannacryImg,  
      buttonImg: wannacryImg, 
      description: 'WannaCry fue un devastador ataque de ransomware que se propagó en mayo de 2017, afectando a más de 200,000 computadoras en 150 países. Utilizaba una vulnerabilidad en el sistema operativo Windows conocida como EternalBlue, que había sido desarrollada por la Agencia de Seguridad Nacional de EE. UU. (NSA) y filtrada por un grupo de hackers llamado Shadow Brokers. WannaCry cifraba los archivos de las víctimas y exigía un pago en Bitcoin para recuperar el acceso. El ataque afectó a importantes infraestructuras, incluidas redes hospitalarias, empresas y gobiernos, causando grandes pérdidas económicas y poniendo de relieve las graves consecuencias de las vulnerabilidades no parcheadas en sistemas informáticos críticos.' 
    },
    { 
      name: 'Petya', 
      img: petyaImg, 
      buttonImg: petyaImg, 
      description: 'Petya es una familia de ransomware que apareció por primera vez en 2016, diseñada para cifrar los discos duros de las víctimas y exigir un rescate a cambio de restaurar el acceso a sus sistemas. A diferencia de otros ransomware que cifran archivos individuales, Petya ataca el Master Boot Record (MBR), lo que impide que la computadora arranque correctamente. En 2017, una variante más destructiva de Petya, conocida como NotPetya, se propagó rápidamente a nivel global, afectando a empresas, bancos y organizaciones gubernamentales. Aunque parecía ser ransomware, NotPetya estaba diseñado principalmente para causar daño y no para obtener ganancias, ya que no permitía recuperar los archivos cifrados incluso si se pagaba el rescate.' 
    },
    { 
      name: 'Equifax (ataque)', 
      img: equifaxImg, 
      buttonImg: equifaxImg, 
      description: 'El ataque a Equifax en 2017 fue una de las mayores violaciones de datos en la historia, afectando a aproximadamente 147 millones de personas. Los ciberdelincuentes aprovecharon una vulnerabilidad no parcheada en el software Apache Struts utilizado por Equifax para acceder a sus sistemas entre mayo y julio de 2017. Como resultado, se expuso información altamente sensible, incluidos nombres, números de Seguridad Social, fechas de nacimiento, direcciones y números de tarjetas de crédito. El ataque puso en evidencia la importancia de la gestión de vulnerabilidades y la actualización de software, y llevó a consecuencias financieras y legales significativas para Equifax, además de un daño duradero a su reputación.' 
    },
    { 
      name: 'Cam4 (ataque)', 
      img: cam4Img, 
      buttonImg: cam4Img, 
      description: 'El ataque a Cam4 en 2020 expuso una gran cantidad de datos personales de millones de usuarios debido a una base de datos no segura que estaba disponible públicamente. Cam4, un sitio web de transmisión en vivo para adultos, sufrió una violación de datos masiva en la que se filtraron más de 10.88 mil millones de registros. La información expuesta incluía direcciones IP, detalles de pago, historiales de chat y otros datos sensibles, aunque no se revelaron contraseñas o números de tarjetas de crédito completos. Este incidente subrayó la importancia de proteger bases de datos con configuraciones de seguridad adecuadas, y demostró cómo errores de configuración pueden llevar a fugas de información masivas y graves riesgos de privacidad para los usuarios.' 
    }
  ];

  const openModal = (ataque) => {
    setModalContent(ataque);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  // Filtrar los ataques en función del término de búsqueda
  const filteredAtaques = ataques.filter((ataque) =>
    ataque.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Ataques cibernéticos</h1>
      
      {/* Barra de búsqueda */}
      <input
        type="text"
        placeholder="Buscar ataque..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={styles.searchBar}
      />

      <ul style={styles.list}>
        {filteredAtaques.map((ataque, index) => (
          <li key={index}
              style={styles.listItem}
              onClick={() => openModal(ataque)}
              onMouseEnter={(e) => e.currentTarget.firstChild.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.firstChild.style.transform = 'scale(1)'}
          >
            <div style={styles.card}>
              <img src={ataque.buttonImg} alt={ataque.name} style={styles.buttonImage} />
              <br />
              <span style={styles.attackName}>{ataque.name}</span>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {modalContent && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2 style={styles.modalTitle}>{modalContent.name}</h2>
            <img src={modalContent.img} alt={modalContent.name} style={styles.image} />
            <p>{modalContent.description}</p>
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
    textAlign: 'center',
    marginBottom: '20px',
  },
  searchBar: {
    padding: '10px',
    marginBottom: '20px',
    fontSize: '16px',
    width: '80%',
    maxWidth: '400px',
    border: '1px solid #ccc',
    borderRadius: '5px',
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
  attackName: {
    fontSize: '18px',
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
    textAlign: 'left',
  },
  modalTitle: {
    textAlign: 'center',
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
    display: 'block',
    margin: '0 auto',
  },
};

export default Seccion1;