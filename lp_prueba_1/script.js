// Archivo: landing-page.js
// Descripción: Este archivo contiene el código para una landing page que recopila información de los usuarios y la almacena en una base de datos MySQL.

// Función para que el usuario conozca su IMC.
function calcularIMC() {
  var peso = parseFloat(document.getElementById("peso").value);
  var altura = parseFloat(document.getElementById("altura").value);
  var imc = peso / (altura * altura);
  var resultado = document.getElementById("resultado");
  resultado.innerHTML = "Su IMC es: " + imc.toFixed(2);


  var clasificacion = "";
  var mensaje = "";

  if (imc < 18.5) {
    clasificacion = "Bajo peso";
    mensaje = "Usted está por debajo del peso saludable. Riesgos: Las personas con bajo peso pueden enfrentar problemas de malnutrición, deficiencias nutricionales, debilidad muscular, y tienen un mayor riesgo de osteoporosis y problemas inmunológicos. Le recomendamos consultar a un profesional de la salud para recibir orientación y apoyo.";
  } else if (imc >= 18.5 && imc < 24.9) {
    clasificacion = "Peso normal";
    mensaje = "¡Felicidades! Usted se encuentra dentro del rango de peso normal o saludable. Mantenga un estilo de vida activo y una dieta equilibrada.";
  } else if (imc >= 25 && imc < 29.9) {
    clasificacion = "Sobrepeso";
    mensaje = "Usted tiene sobrepeso. Riesgos: El sobrepeso está asociado con un mayor riesgo de desarrollar enfermedades como la diabetes tipo 2, enfermedades cardiovasculares, hipertensión, apnea del sueño y ciertos tipos de cáncer. ¿Quieres perder peso de manera saludable y reducir tu riesgo de desarrollar problemas de salud? En Reactívate, te acompañamos con un plan de acción individualizado que se adapta a tus necesidades y objetivos.";
  } else if (imc >= 30 && imc < 34.9) {
    clasificacion = "Obesidad grado 1";
    mensaje = "Usted tiene obesidad de grado 1. Riesgos: El riesgo de enfermedades cardiovasculares, diabetes tipo 2, hipertensión y apnea del sueño aumenta significativamente. También puede haber impactos en la salud mental, como la depresión. ¿Quieres perder peso de manera saludable y reducir tu riesgo de desarrollar problemas de salud? En Reactívate, te acompañamos con un plan de acción individualizado que se adapta a tus necesidades y objetivos.";
  } else if (imc >= 35 && imc < 39.9) {
    clasificacion = "Obesidad grado 2";
    mensaje = "Usted tiene obesidad de grado 2. Riesgos: Los riesgos de enfermedades cardiovasculares, diabetes, hipertensión y apnea del sueño se intensifican. Además, hay un mayor riesgo de problemas articulares, enfermedades hepáticas y ciertos tipos de cáncer. ¿Quieres perder peso de manera saludable y reducir tu riesgo de desarrollar problemas de salud? En Reactívate, te acompañamos con un plan de acción individualizado que se adapta a tus necesidades y objetivos.";
  } else if (imc >= 40) {
    clasificacion = "Obesidad grado 3";
    mensaje = "Usted tiene obesidad de grado 3. Riesgos: También conocida como obesidad mórbida, conlleva riesgos graves para la salud, incluyendo una mayor probabilidad de enfermedades cardíacas, diabetes avanzada, hipertensión severa, problemas respiratorios, problemas musculoesqueléticos y una reducción significativa en la calidad de vida. ¿Quieres perder peso de manera saludable y reducir tu riesgo de desarrollar problemas de salud? En Reactívate, te acompañamos con un plan de acción individualizado que se adapta a tus necesidades y objetivos.";
  }

  resultado.innerHTML += "<br>Clasificación: " + clasificacion + "<br>" + mensaje;
}


// Funciones para validar el formulario
function validarFormulario() {
  // Validar que todos los campos del formulario estén completos
  if (!validarCampo("nombre")) {
    alert("Por favor, complete el campo nombre.");
    return false;
  }

  if (!validarCampo("edad")) {
    alert("Por favor, complete el campo edad.");
    return false;
  }

  if (!validarCampo("celular")) {
    alert("Por favor, complete el campo celular.");
    return false;
  }

  if (!validarCampo("correo")) {
    alert("Por favor, complete el campo correo electrónico. El correo electrónico ingresado no es válido.");
    return false;
  }

  if (!validarCampo("aspectoInnovador")) {
    alert("Por favor, complete el campo aspecto innovador.");
    return false;
  }

  if (!validarCampo("aplicabilidad")) {
    alert("Por favor, complete el campo aplicabilidad.");
    return false;
  }

  if (!validarCampo("usabilidad")) {
    alert("Por favor, complete el campo usabilidad.");
    return false;
  }

  if (!validarCampo("adaptabilidad")) {
    alert("Por favor, complete el campo adaptabilidad.");
    return false;
  }

  if (!validarCampo("calidad")) {
    alert("Por favor, complete el campo calidad.");
    return false;
  }

  if (!validarCampo("preguntaClave")) {
    alert("Por favor, complete el campo pregunta clave.");
    return false;
  }

  return true;
}

function validarCampo(campo, expresionRegular) {
  return expresionRegular.test(document.getElementById(campo).value);
}

/*
// Función para conectar a la base de datos de MySQL
function conectarBD() {
  // Configura los parámetros de la conexión
  const host = "localhost";
  const usuario = "root";
  const contrasena = "";
  const baseDatos = "mi_base_datos";

  // Crea la conexión
  const connection = new MySQLConnection({
    host,
    user: usuario,
    password: contrasena,
    database: baseDatos,
  });

  // Comprueba si la conexión se ha realizado correctamente
  connection.connect((err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Se ha conectado correctamente a la base de datos.");
    }
  });

  return connection;
}

// Función para insertar los datos en la base de datos
function insertarDatos(connection, tabla, datos) {
  // Crear la consulta SQL
  const sql = `
    INSERT INTO ${tabla} (
      nombre,
      edad,
      celular,
      correo,
      aspectoInnovador,
      aplicabilidad,
      usabilidad,
      adaptabilidad,
      calidad,
      preguntaClave,
      fecha
    )
    VALUES (
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      ?,
      CURDATE()
    );
  `;

  // Obtener los valores de los campos
  const values = [
    datos.nombre,
    datos.edad,
    datos.celular,
    datos.correo,
    datos.aspectoInnovador,
    datos.aplicabilidad,
    datos.usabilidad,
    datos.adaptabilidad,
    datos.calidad,
    datos.preguntaClave,
  ];

  // Ejecutar la consulta SQL
  connection.query(sql, values, (err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Los datos se han almacenado correctamente.");
    }
  });
}


// Función para obtener los datos del formulario
function obtenerDatosFormulario() {
  const datos = {
    nombre: document.getElementById("nombre").value,
    edad: document.getElementById("edad").value,
    celular: document.getElementById("celular").value,
    correo: document.getElementById("correo").value,
    aspectoInnovador: document.getElementById("aspectoInnovador").value,
    aplicabilidad: document.getElementById("aplicabilidad").value,
    usabilidad: document.getElementById("usabilidad").value,
    adaptabilidad: document.getElementById("adaptabilidad").value,
    calidad: document.getElementById("calidad").value,
    preguntaClave: document.getElementById("preguntaClave").value,
  };

  return datos;
}

// Obtener los datos del formulario
const datos = obtenerDatosFormulario();

// Conectar a la base de datos
const connection = conectarBD();

// Insertar los datos en la base de datos
insertarDatos(connection, "usuarios_validacion", datos);
*/

// Configura tu proyecto de Firebase aquí

const firebaseConfig = {
  apiKey: "AIzaSyCtKc7zDQsNIlSWkBAdBVZyg77rcyS6Ooc",
  authDomain: "landing-page-validacion.firebaseapp.com",
  projectId: "landing-page-validacion",
  storageBucket: "landing-page-validacion.appspot.com",
  messagingSenderId: "1067253837116",
  appId: "1:1067253837116:web:b691fb186b4681996d4239",
  measurementId: "G-5REZB89470"
};

firebase.initializeApp(firebaseConfig);

// Referencia a la colección de usuarios en Firestore
const usuariosCollection = firebase.firestore().collection('usuarios_validacion');

function enviarFormulario() {
  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value,
  const edad = document.getElementById("edad").value,
  const celular = document.getElementById("celular").value,
  const correo = document.getElementById("correo").value,
  const aspectoInnovador = document.getElementById("aspectoInnovador").value,
  const aplicabilidad = document.getElementById("aplicabilidad").value,
  const usabilidad = document.getElementById("usabilidad").value,
  const adaptabilidad = document.getElementById("adaptabilidad").value,
  const calidad = document.getElementById("calidad").value,
  const preguntaClave = document.getElementById("preguntaClave").value,
  // Obtener otros valores del formulario de manera similar...

  // Enviar los datos a Firestore
  usuariosCollection.add({
    nombre: nombre,
    edad: edad
    // Agregar otros campos aquí...
  })
    .then(() => {
      console.log('Datos insertados correctamente');
    })
    .catch((error) => {
      console.error('Error al insertar datos:', error);
    });
}



//Instala Firebase CLI
//Necesitas Firebase CLI (una herramienta de línea de comandos) para alojar tu sitio con Firebase Hosting.
//Ejecuta el siguiente comando de npm para instalar la CLI o actualizar a su versión más reciente.

/*npm install -g firebase-tools*/



//Realiza la implementación en Firebase Hosting
/*Puedes realizar la implementación ahora o más adelante. Para hacerlo ahora mismo, abre una ventana de la terminal y, luego, navega al directorio raíz de tu app web o crea uno.
Acceder a Google
$ firebase login

Inicia el proyecto
Ejecuta el siguiente comando en el directorio raíz de tu app:
$ firebase init

Cuando tengas todo listo, implementa tu app web
Ubica los archivos estáticos (p. ej., HTML, CSS y JS) en el directorio de implementación de la app (el directorio predeterminado es “public”). Luego, ejecuta este comando desde el directorio raíz de tu app:
$firebase deploy

Después de la implementación, consulta tu app en landing-page-validacion.web.app.
¿Necesitas ayuda? Consulta los documentos de Hosting.*/