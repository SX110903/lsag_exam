# EXAMEN FINAL SADJ

Aplicación web estática para rendir el examen final de la Academia del
**San Andreas Department of Justice**, con la identidad visual del
District Attorney's Office - County of Los Santos.

El postulante indica su nombre y el del evaluador, elige una de las tres
versiones del examen (20 preguntas de alternativas cada una) y dispone de
20 minutos. Al finalizar se emite un **certificado de evaluación** y puede
revisarse el examen pregunta por pregunta.

## Características

- **Tres versiones** del examen (60 preguntas en total) transcritas del documento oficial.
- **Nombre del evaluador**, que queda impreso en el certificado.
- **Temporizador de 20 minutos**, con aviso en ámbar y rojo, y entrega automática al agotarse.
- **Preguntas y alternativas barajadas** en cada rendición.
- **Navegación libre** entre preguntas, con rejilla de avance.
- **Confirmación** antes de entregar si quedan preguntas sin responder.
- **Certificado de evaluación** con calificación, aciertos, tiempo, evaluador y fecha de emisión.
- **Revisión del examen** con la respuesta correcta y la marcada en cada pregunta.

## Estructura del proyecto

```
index.html                  Marcado de las cuatro pantallas
vercel.json                 Configuración de despliegue estático
assets/
  css/styles.css            Estilos
  img/logo.png              Sello del District Attorney's Office
src/
  main.js                   Punto de entrada: conecta modelo y vistas
  data/exams.js             Banco de preguntas (transcripción del documento)
  core/
    config.js               Parámetros de la evaluación
    question-bank.js        Normalización y validación del banco
    exam-session.js         Modelo de la rendición y calificación
    random.js               Barajado
  ui/
    dom.js                  Ayudantes de DOM
    screens.js              Cambio entre pantallas
    timer.js                Cuenta regresiva y formato de tiempos
    exam-view.js            Vista de rendición
    certificate-view.js     Certificado de evaluación
    review-view.js          Revisión del examen
    modal.js                Confirmación de entrega
```

La separación es intencional: `src/core` no toca el DOM y `src/ui` no contiene
reglas de la evaluación. Para ajustar el examen basta con editar
`src/core/config.js` (duración, porcentaje de aprobación, barajado) o
`src/data/exams.js` (preguntas y claves).

> El documento original no fija duración ni porcentaje mínimo de aprobación.
> Se mantienen los de la versión anterior de la aplicación: **20 minutos** y
> **70 %**, ambos configurables en `src/core/config.js`.

## Ejecución local

El proyecto usa módulos ES, por lo que debe servirse por HTTP (abrir el archivo
con `file://` no funciona):

```bash
npx serve .
```

Luego abrir la dirección que indique la consola.

## Despliegue

Sitio estático sin proceso de build. En Vercel: importar el repositorio,
dejar *Framework Preset* en **Other** y los campos de build vacíos; la
configuración ya está declarada en `vercel.json`.
