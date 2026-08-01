/**
 * Banco de preguntas del EXAMEN FINAL SADJ.
 *
 * Transcripción literal del documento "EXAMEN FINAL DE ACADEMIA SADJ"
 * (3 versiones de 20 preguntas cada una).
 *
 * Formato de cada pregunta:
 *   - `text`    : enunciado.
 *   - `options` : alternativas en el orden original A, B, C, D.
 *   - `answer`  : letra correcta según la tabla de respuestas del documento.
 *
 * Se guarda la letra (y no el índice) para que la clave sea contrastable
 * de un vistazo contra el PDF original. La conversión a índice y la
 * validación del banco se hacen en `src/core/question-bank.js`.
 */

export const EXAMS = [
  {
    id: 1,
    title: "Examen Final SADJ - Examen 1",
    questions: [
      {
        text: "Según la Normativa Interna, ¿cuál es uno de los deberes generales de todo funcionario del Departamento de Justicia?",
        options: [
          "Priorizar los intereses personales cuando exista conflicto institucional.",
          "Resguardar la información y documentación institucional a la que tenga acceso.",
          "Difundir procedimientos internos para mejorar la transparencia pública.",
          "Resolver investigaciones disciplinarias sin autorización.",
        ],
        answer: "B",
      },
      {
        text: "Durante una audiencia, la defensa cuestiona la validez de una prueba porque no fue correctamente documentada desde su incautación. ¿Qué principio procesal se encuentra comprometido?",
        options: [
          "Principio de publicidad.",
          "Cadena de custodia.",
          "Competencia territorial.",
          "Jurisdicción concurrente.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es la función principal del fiscal cuando asiste a una escena con una persona fallecida?",
        options: [
          "Retirar personalmente el cuerpo.",
          "Realizar la autopsia.",
          "Garantizar la legalidad del procedimiento y coordinar jurídicamente la investigación.",
          "Asegurar físicamente la escena como primer respondedor.",
        ],
        answer: "C",
      },
      {
        text: "Según el Manual de Acusación y Juicios, ¿cuál es el objetivo principal de una acusación presentada por Fiscalía?",
        options: [
          "Solicitar el archivo de la investigación.",
          "Exponer los hechos, las pruebas y los fundamentos jurídicos para que la Corte conozca el caso.",
          "Solicitar la detención inmediata del acusado sin audiencia.",
          "Informar únicamente a las agencias policiales sobre el procedimiento.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es el propósito de la coordinación permanente entre Fiscalía y las agencias investigativas durante una investigación compleja?",
        options: [
          "Evitar que existan informes escritos.",
          "Mantener una estrategia investigativa coherente y conforme a la normativa vigente.",
          "Transferir completamente la investigación al Departamento de Justicia.",
          "Sustituir la autoridad de los supervisores policiales.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Comunicaciones, ¿cuál es el propósito principal de la comunicación simplex?",
        options: [
          "Solicitar órdenes judiciales.",
          "Coordinar actividades operativas y mantener actualizado el estado del personal en terreno.",
          "Informar únicamente situaciones de emergencia.",
          "Reemplazar completamente la radio de hombro.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál de las siguientes situaciones representa un posible conflicto de interés?",
        options: [
          "Un fiscal supervisa un procedimiento de una agencia distinta.",
          "Un fiscal investiga disciplinariamente a un familiar o persona con quien mantiene una relación cercana.",
          "Dos fiscales trabajan conjuntamente en un mismo caso.",
          "Un fiscal solicita una orden judicial.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Acusación y Juicios, ¿qué finalidad tiene el aviso legal contenido en una acusación?",
        options: [
          "Determinar la pena máxima aplicable.",
          "Evitar la difusión del documento a personas no autorizadas.",
          "Autorizar la publicación del expediente.",
          "Informar la fecha del juicio.",
        ],
        answer: "B",
      },
      {
        text: "Un departamento investigativo desea solicitar un juicio extraordinario contra una organización criminal. Según el documento Jurisdicción y Acción de Fiscalía, ¿qué debe hacer primero?",
        options: [
          "Presentar directamente la acusación ante la Corte.",
          "Solicitar el juicio mediante un ticket en el aplicativo de LSAG.",
          "Solicitar autorización al FIB.",
          "Enviar el informe únicamente al Fiscal General.",
        ],
        answer: "B",
      },
      {
        text: "¿Qué finalidad tiene documentar todas las actuaciones relevantes realizadas durante una investigación?",
        options: [
          "Aumentar el número de informes institucionales.",
          "Garantizar transparencia, trazabilidad y respaldo del procedimiento.",
          "Facilitar únicamente el trabajo administrativo.",
          "Evitar que la defensa acceda a los antecedentes.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Procedimientos SADJ, ¿cuál es una limitación fundamental de la Fiscalía durante un allanamiento?",
        options: [
          "No puede supervisar la actuación de las agencias participantes.",
          "No puede manipular físicamente la evidencia incautada.",
          "No puede permanecer en la escena durante el procedimiento.",
          "No puede solicitar informes posteriores al operativo.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál de las siguientes actuaciones corresponde a la etapa previa a la presentación de una acusación?",
        options: [
          "Dictar sentencia.",
          "Reunir, analizar y organizar los antecedentes y medios de prueba del caso.",
          "Ejecutar la condena impuesta por la Corte.",
          "Ordenar el cumplimiento de la pena.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es el principio que exige que toda actuación investigativa que afecte derechos fundamentales esté sustentada en antecedentes suficientes y razonables?",
        options: [
          "Presunción de inocencia.",
          "Debido proceso.",
          "Causa probable.",
          "Buena fe procesal.",
        ],
        answer: "C",
      },
      {
        text: "Según la Normativa Interna, ¿qué conducta se espera de un funcionario respecto al trato con otros miembros del Departamento?",
        options: [
          "Competencia constante entre compañeros.",
          "Respeto, profesionalismo y colaboración institucional.",
          "Priorizar únicamente la jerarquía sobre el respeto.",
          "Mantener contacto solo con su división.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál de las siguientes acciones corresponde al fiscal durante un procedimiento de levantamiento de cadáver?",
        options: [
          "Realizar personalmente el análisis forense del cuerpo.",
          "Dirigir jurídicamente la investigación y velar por la legalidad del procedimiento.",
          "Transportar el cuerpo hasta SAES.",
          "Ejecutar las diligencias policiales de búsqueda de sospechosos.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál de las siguientes afirmaciones representa correctamente el rol general del San Andreas Department of Justice?",
        options: [
          "Dirigir todas las operaciones policiales del Estado.",
          "Garantizar la correcta aplicación de la ley mediante la investigación, persecución penal, asesoría jurídica y representación del Estado ante la Corte.",
          "Actuar exclusivamente como organismo disciplinario.",
          "Resolver conflictos civiles sin intervención judicial.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es uno de los objetivos principales de las mesas de trabajo investigativas dirigidas por Fiscalía?",
        options: [
          "Reemplazar completamente a las agencias investigativas.",
          "Coordinar investigaciones entre distintas agencias bajo dirección fiscal.",
          "Resolver causas civiles sin intervención judicial.",
          "Administrar únicamente procedimientos disciplinarios.",
        ],
        answer: "B",
      },
      {
        text: "De acuerdo con el Manual de Procedimientos SADJ, durante un allanamiento el fiscal debe:",
        options: [
          "Manipular toda la evidencia encontrada.",
          "Supervisar el procedimiento y velar por la cadena de custodia, evitando manipular físicamente la evidencia.",
          "Liderar el ingreso táctico al inmueble.",
          "Ejecutar las detenciones junto a la agencia solicitante.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Comunicaciones, ¿qué debe evitar un funcionario al utilizar los canales oficiales del Departamento?",
        options: [
          "Utilizar lenguaje claro y profesional.",
          "Compartir información ajena al servicio o que no tenga relación con la función institucional.",
          "Confirmar la recepción de un procedimiento.",
          "Mantener comunicación con otras agencias.",
        ],
        answer: "B",
      },
      {
        text: "Durante una audiencia, el juez pregunta al fiscal por qué solicita una orden de registro. ¿Qué elemento debe justificar principalmente dicha solicitud?",
        options: [
          "La experiencia del funcionario solicitante.",
          "La existencia de causa probable sustentada en antecedentes objetivos.",
          "La gravedad del delito investigado, sin necesidad de pruebas.",
          "La opinión del jefe de la agencia investigadora.",
        ],
        answer: "B",
      },
    ],
  },
  {
    id: 2,
    title: "Examen Final SADJ - Examen 2",
    questions: [
      {
        text: "Durante un allanamiento supervisado por Fiscalía, se detecta evidencia relacionada con un delito federal. Según el Manual de Procedimientos SADJ, ¿qué corresponde hacer?",
        options: [
          "Trasladar inmediatamente la evidencia a la Corte.",
          "Notificar al FIB antes de continuar con el procedimiento.",
          "Esperar la autorización del Attorney General para informar.",
          "Entregar la evidencia únicamente a la agencia solicitante.",
        ],
        answer: "B",
      },
      {
        text: "Durante una investigación compleja participan varias agencias. ¿Quién mantiene la dirección jurídica del caso?",
        options: [
          "El jefe de la agencia con mayor dotación.",
          "El Fiscal encargado del procedimiento.",
          "El oficial que realizó la primera detención.",
          "El Director del FIB.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es el objetivo principal de mantener la cadena de custodia durante un procedimiento?",
        options: [
          "Facilitar el traslado de la evidencia entre agencias.",
          "Garantizar la integridad y validez de la evidencia obtenida.",
          "Agilizar la elaboración de informes policiales.",
          "Permitir que cualquier funcionario manipule la evidencia.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Comunicaciones, ¿qué sistema de comunicación debe utilizarse principalmente para situaciones de emergencia o coordinaciones inmediatas?",
        options: [
          "Radio de canal general.",
          "Comunicación simplex.",
          "Radio de hombro.",
          "Dispositivo móvil oficial.",
        ],
        answer: "C",
      },
      {
        text: "Según la Normativa Interna, ¿qué representa una falta de profesionalismo por parte de un funcionario?",
        options: [
          "Mantener comunicación formal con otras agencias.",
          "Utilizar lenguaje ofensivo o realizar conductas incompatibles con el cargo durante el servicio.",
          "Solicitar apoyo jurídico durante una investigación.",
          "Elaborar un informe complementario.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es uno de los principios que debe mantener todo fiscal durante una investigación penal?",
        options: [
          "Favorecer a la agencia que inició el procedimiento.",
          "Actuar con objetividad e imparcialidad durante toda la investigación.",
          "Priorizar únicamente la obtención de condenas.",
          "Defender exclusivamente la versión policial.",
        ],
        answer: "B",
      },
      {
        text: "Una vez que el fiscal considera que la investigación reúne antecedentes suficientes para ir a juicio, ¿qué corresponde hacer según el documento Jurisdicción y Acción de Fiscalía?",
        options: [
          "Disolver inmediatamente la mesa de trabajo.",
          "Pausar la mesa de trabajo y presentar el caso ante la Corte.",
          "Solicitar una nueva investigación policial.",
          "Archivar los antecedentes hasta el juicio.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Procedimientos SADJ, ¿qué debe hacer un fiscal cuando detecta que una diligencia podría vulnerar derechos fundamentales?",
        options: [
          "Autorizarla igualmente por razones investigativas.",
          "Suspender o corregir la actuación para garantizar el cumplimiento de la normativa.",
          "Esperar que la Corte detecte la irregularidad.",
          "Delegar la decisión únicamente en el oficial a cargo.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Órdenes Judiciales e Investigativas, ¿cuál es la excepción que permite ingresar a una propiedad sin autorización judicial previa?",
        options: [
          "Cuando el propietario no se encuentra presente.",
          "Cuando existe un allanamiento en flagrancia conforme a los requisitos establecidos.",
          "Cuando la agencia investigadora lo considera conveniente.",
          "Cuando un fiscal autoriza verbalmente el ingreso.",
        ],
        answer: "B",
      },
      {
        text: "Según la Normativa Interna, si una autoridad mantiene una relación personal cercana con el funcionario investigado, deberá:",
        options: [
          "Continuar el procedimiento con normalidad.",
          "Solicitar únicamente la aprobación de un supervisor.",
          "Abstenerse de intervenir e informar la situación a la autoridad competente.",
          "Resolver el procedimiento antes de informar el conflicto.",
        ],
        answer: "C",
      },
      {
        text: "Según el Manual de Procedimientos SADJ, ¿cuál es una función principal de la Fiscalía?",
        options: [
          "Realizar patrullajes preventivos en todo el Estado.",
          "Procesar acusaciones derivadas de investigaciones dentro de su jurisdicción.",
          "Ejecutar órdenes de captura emitidas por la Corte.",
          "Asumir el mando operativo de las agencias policiales.",
        ],
        answer: "B",
      },
      {
        text: "Una agencia solicita a Fiscalía iniciar una mesa de trabajo para investigar una organización criminal. ¿Cuál es el principal objetivo de esta instancia?",
        options: [
          "Reemplazar la investigación policial por una investigación fiscal.",
          "Coordinar, planificar y dirigir jurídicamente la investigación entre las agencias participantes.",
          "Autorizar automáticamente allanamientos y detenciones.",
          "Presentar inmediatamente una acusación ante la Corte.",
        ],
        answer: "B",
      },
      {
        text: "Cuando un funcionario policial encuentra un cadáver, ¿qué actuación corresponde antes del levantamiento?",
        options: [
          "Retirar inmediatamente el cuerpo del lugar.",
          "Esperar únicamente al personal médico.",
          "Resguardar la escena e informar por radio interdepartamental a Fiscalía, FIB y SAES.",
          "Trasladar toda la evidencia al laboratorio.",
        ],
        answer: "C",
      },
      {
        text: "¿Quién realiza materialmente el levantamiento y traslado del cadáver durante una investigación?",
        options: [
          "Fiscalía y LSPD.",
          "USMS y Fiscalía.",
          "FIB junto con SAES.",
          "El fiscal encargado del caso.",
        ],
        answer: "C",
      },
      {
        text: "¿Cuál es el propósito de que los procedimientos de Fiscalía se encuentren debidamente documentados?",
        options: [
          "Aumentar la cantidad de informes administrativos.",
          "Garantizar la trazabilidad, transparencia y respaldo de las actuaciones institucionales.",
          "Facilitar únicamente el trabajo de la Corte.",
          "Evitar la participación de otras agencias.",
        ],
        answer: "B",
      },
      {
        text: "De acuerdo con el Manual de Órdenes Judiciales e Investigativas, ¿qué requisito debe contener una solicitud de orden de allanamiento?",
        options: [
          "Únicamente el nombre del sospechoso.",
          "La descripción del delito, el lugar a registrar y los antecedentes que acrediten la causa probable.",
          "Solo la autorización del jefe de la agencia solicitante.",
          "El historial disciplinario del sospechoso.",
        ],
        answer: "B",
      },
      {
        text: "Durante una investigación disciplinaria, un fiscal tiene conocimiento de antecedentes que podrían favorecer al funcionario investigado. ¿Cómo debe actuar?",
        options: [
          "Omitir esa información porque perjudica el caso.",
          "Incorporar todos los antecedentes relevantes, tanto favorables como desfavorables, actuando con objetividad.",
          "Entregar únicamente los antecedentes que acrediten responsabilidad.",
          "Esperar que la defensa presente esa información.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es la finalidad de una orden de incautación emitida por la autoridad judicial?",
        options: [
          "Autorizar el ingreso a cualquier propiedad del Estado.",
          "Permitir la obtención legal de bienes o elementos relacionados con una investigación.",
          "Autorizar la detención de cualquier sospechoso.",
          "Permitir la revisión de antecedentes disciplinarios.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es la regla general para ejecutar un allanamiento a una propiedad privada?",
        options: [
          "Basta con la autorización de un fiscal.",
          "Solo se requiere la aprobación del jefe de la agencia policial.",
          "Debe existir una orden judicial emitida por un juez competente, salvo las excepciones legales.",
          "Puede realizarse siempre que exista una denuncia ciudadana.",
        ],
        answer: "C",
      },
      {
        text: "Durante una investigación disciplinaria, ¿qué principio exige que las decisiones se basen en hechos verificables y evidencia disponible?",
        options: [
          "Legalidad.",
          "Objetividad.",
          "Lealtad institucional.",
          "Jerarquía.",
        ],
        answer: "B",
      },
    ],
  },
  {
    id: 3,
    title: "Examen Final SADJ - Examen 3",
    questions: [
      {
        text: "Respecto a la información relacionada con investigaciones activas, ¿cuál de las siguientes afirmaciones es correcta?",
        options: [
          "Puede compartirse con cualquier funcionario de SADJ.",
          "Solo puede compartirse con personal que deba conocerla por razón de sus funciones y mediante canales autorizados.",
          "Puede enviarse por cualquier medio si existe confianza entre funcionarios.",
          "Puede publicarse una vez finalizado el procedimiento policial.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Procedimientos SADJ, cuando una agencia requiere apoyo jurídico durante un procedimiento, el fiscal debe:",
        options: [
          "Asumir el mando operativo del procedimiento.",
          "Brindar asesoría legal dentro del ámbito de sus competencias.",
          "Reemplazar al supervisor policial.",
          "Limitarse únicamente a observar el procedimiento.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Acusación y Juicios, ¿qué principio jurídico impide que una persona sea juzgada dos veces por los mismos hechos?",
        options: [
          "Habeas Corpus.",
          "Presunción de inocencia.",
          "Non bis in idem.",
          "In dubio pro reo.",
        ],
        answer: "C",
      },
      {
        text: "Durante una investigación conjunta, ¿cuál es la función principal de las agencias policiales respecto a Fiscalía?",
        options: [
          "Sustituir completamente la labor del fiscal.",
          "Ejecutar las diligencias investigativas dentro de sus competencias, coordinadas con Fiscalía.",
          "Resolver la causa sin intervención judicial.",
          "Autorizar la presentación de acusaciones.",
        ],
        answer: "B",
      },
      {
        text: "Durante una investigación disciplinaria, una autoridad participó directamente en los hechos que ahora debe investigar. Según la Normativa Interna, ¿qué corresponde?",
        options: [
          "Continuar con la investigación debido a su experiencia.",
          "Resolver el caso junto con otro funcionario.",
          "Abstenerse de intervenir e informar el conflicto de interés a la autoridad superior.",
          "Esperar que el funcionario investigado solicite la recusación.",
        ],
        answer: "C",
      },
      {
        text: "¿Qué debe hacer un fiscal si, durante la preparación de una acusación, advierte que las pruebas obtenidas son insuficientes para sostener uno de los cargos?",
        options: [
          "Mantener el cargo para que sea la Corte quien decida.",
          "Eliminar o modificar el cargo conforme a la evidencia disponible.",
          "Solicitar una condena reducida.",
          "Presentar igualmente la acusación completa.",
        ],
        answer: "B",
      },
      {
        text: 'Según el Manual de Acusación y Juicios, ¿qué debe contener el apartado denominado "Fundamentación de los cargos"?',
        options: [
          "Únicamente la pena solicitada.",
          "La explicación de cada cargo y el acusado al que corresponde.",
          "Solo un resumen policial de los hechos.",
          "Exclusivamente las declaraciones de los testigos.",
        ],
        answer: "B",
      },
      {
        text: "Una agencia policial desea solicitar una orden de allanamiento, pero solo cuenta con sospechas y ningún antecedente objetivo. Según el Manual de Órdenes Judiciales e Investigativas, ¿qué debe hacer Fiscalía?",
        options: [
          "Solicitar igualmente la orden para no retrasar la investigación.",
          "Solicitar antecedentes adicionales que acrediten la causa probable antes de acudir a la Corte.",
          "Autorizar un allanamiento sin orden judicial.",
          "Delegar la decisión en la agencia solicitante.",
        ],
        answer: "B",
      },
      {
        text: "Según la Normativa Interna, ¿qué busca principalmente la aplicación de medidas disciplinarias?",
        options: [
          "Castigar al funcionario sin posibilidad de corrección.",
          "Cumplir exclusivamente una finalidad sancionadora.",
          "Mantener altos estándares institucionales mediante una finalidad correctiva, preventiva y formativa.",
          "Reducir la dotación institucional.",
        ],
        answer: "C",
      },
      {
        text: "¿Cuál de las siguientes conductas constituye una infracción respecto al manejo de información sensible?",
        options: [
          "Compartir antecedentes reservados con funcionarios autorizados.",
          "Informar una investigación activa mediante canales internos autorizados.",
          "Conversar sobre una investigación reservada en un canal general del Departamento.",
          "Utilizar el despacho institucional para coordinar un procedimiento.",
        ],
        answer: "C",
      },
      {
        text: "Según el Manual de Comunicaciones, ¿por qué es importante mantener una comunicación clara durante un procedimiento?",
        options: [
          "Para reducir la cantidad de informes posteriores.",
          "Para evitar errores de coordinación y garantizar una actuación eficiente entre las instituciones.",
          "Para disminuir la participación de otras agencias.",
          "Para reemplazar completamente la documentación escrita.",
        ],
        answer: "B",
      },
      {
        text: "Según el Manual de Comunicaciones, ¿cómo deben caracterizarse las comunicaciones oficiales entre funcionarios del Departamento?",
        options: [
          "Informales y extensas.",
          "Breves, claras y profesionales.",
          "Reservadas únicamente para supervisores.",
          "Exclusivamente escritas.",
        ],
        answer: "B",
      },
      {
        text: "Una agencia solicita verbalmente la emisión de una orden judicial, pero no presenta antecedentes suficientes. ¿Qué corresponde hacer?",
        options: [
          "Emitir igualmente la solicitud para agilizar el procedimiento.",
          "Rechazar o requerir antecedentes adicionales que acrediten la causa probable antes de solicitar la orden.",
          "Solicitar únicamente la aprobación del Director de la agencia.",
          "Esperar 24 horas y emitir la orden automáticamente.",
        ],
        answer: "B",
      },
      {
        text: "Un fiscal detecta que un procedimiento podría afectar derechos constitucionales de un ciudadano. ¿Cuál debe ser su prioridad?",
        options: [
          "Continuar la diligencia para evitar retrasos.",
          "Garantizar el respeto al debido proceso y la legalidad del procedimiento.",
          "Esperar instrucciones de la agencia policial.",
          "Finalizar el procedimiento y corregir posteriormente los errores.",
        ],
        answer: "B",
      },
      {
        text: "Si durante una investigación un fiscal advierte que un funcionario está vulnerando la cadena de custodia de una evidencia, ¿qué corresponde hacer?",
        options: [
          "Ignorar la situación si la evidencia ya fue incautada.",
          "Documentar la irregularidad y adoptar las medidas necesarias para preservar la legalidad del procedimiento.",
          "Destruir la evidencia comprometida.",
          "Delegar completamente la situación a la agencia policial.",
        ],
        answer: "B",
      },
      {
        text: "De acuerdo con el Manual de Órdenes Judiciales e Investigativas, ¿qué ocurre si durante un allanamiento judicial se omite uno de los pasos obligatorios del procedimiento?",
        options: [
          "El procedimiento continúa sin consecuencias.",
          "La evidencia mantiene siempre plena validez judicial.",
          "Puede iniciarse un expediente en Asuntos Internos y la evidencia podría ser inadmisible.",
          "Solo se aplica una advertencia verbal.",
        ],
        answer: "C",
      },
      {
        text: "Antes de presentar una acusación formal, ¿qué debe verificar el fiscal?",
        options: [
          "Que el acusado haya reconocido voluntariamente los hechos.",
          "Que existan antecedentes suficientes para sostener jurídicamente los cargos presentados.",
          "Que todas las agencias estén de acuerdo con la acusación.",
          "Que la Corte haya anticipado una condena.",
        ],
        answer: "B",
      },
      {
        text: "Según la Normativa Interna, ¿qué debe hacer un funcionario cuando recibe una instrucción que contraviene la normativa institucional?",
        options: [
          "Cumplirla sin formular observaciones.",
          "Informar la situación por los conductos correspondientes y actuar conforme a la normativa vigente.",
          "Publicar la situación en los canales generales.",
          "Ignorar completamente la instrucción.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es el objetivo principal de mantener una adecuada coordinación entre Fiscalía y las agencias investigativas?",
        options: [
          "Sustituir las funciones policiales.",
          "Garantizar investigaciones legales, eficientes y correctamente dirigidas.",
          "Centralizar todas las decisiones operativas en Fiscalía.",
          "Evitar que otras instituciones participen en la investigación.",
        ],
        answer: "B",
      },
      {
        text: "¿Cuál es uno de los principales objetivos de los manuales institucionales de SADJ?",
        options: [
          "Permitir que cada funcionario actúe según su propio criterio.",
          "Estandarizar los procedimientos y garantizar actuaciones uniformes conforme a la normativa institucional.",
          "Reducir la documentación administrativa.",
          "Limitar la coordinación entre instituciones.",
        ],
        answer: "B",
      },
    ],
  },
];
