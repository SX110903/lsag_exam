# EXAMEN FINAL SADJ

Aplicación web estática para rendir el examen final de la Academia del
**San Andreas Department of Justice**.

Al iniciar, se asigna al azar una de las tres versiones oficiales del examen
(20 preguntas de alternativas cada una), se corrige automáticamente y se
entrega la revisión pregunta por pregunta.

## Características

- **Tres versiones** del examen (60 preguntas en total) transcritas del documento oficial.
- **Asignación aleatoria** de la versión al comenzar.
- **Preguntas y alternativas barajadas** en cada rendición.
- **Navegación libre** entre preguntas, con indicador de las ya respondidas.
- **Entrega bloqueada** hasta responder las 20 preguntas.
- **Resultado con revisión**: respuesta marcada, respuesta correcta y porcentaje de logro.

## Estructura del proyecto

```
index.html                  Marcado de las tres pantallas
vercel.json                 Configuración de despliegue estático
assets/
  css/styles.css            Estilos
  img/logo.svg              Emblema y favicon
src/
  main.js                   Punto de entrada: conecta modelo y vistas
  data/exams.js             Banco de preguntas (transcripción del documento)
  core/
    config.js               Parámetros de la evaluación
    question-bank.js        Normalización y validación del banco
    exam-session.js         Modelo de la rendición y calificación
    random.js               Barajado y selección aleatoria
  ui/
    dom.js                  Ayudantes de DOM
    screens.js              Cambio entre pantallas
    exam-view.js            Vista de rendición
    result-view.js          Vista de resultado y revisión
```

La separación es intencional: `src/core` no toca el DOM y `src/ui` no contiene
reglas de la evaluación. Para ajustar el examen basta con editar
`src/core/config.js` (porcentaje de aprobación, barajado) o `src/data/exams.js`
(preguntas y claves).

> El documento original no fija un porcentaje mínimo de aprobación. Se dejó en
> **70 %**, configurable en `src/core/config.js`.

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
