/**
 * Contenido de landing por servicio (slug en URL).
 */
export const serviceLandings = {
  'pymes-emprendedores': {
    title: 'Acompañamiento para pymes y emprendedores',
    eyebrow: 'Servicio',
    intro:
      'Acompañamiento estratégico para que tomes decisiones con claridad y tu negocio crezca con bases sólidas.',
    sections: [
      {
        title: '¿Qué incluye el Servicio de Acompañamiento?',
        subtitle: 'Intervenciones estratégicas',
        bullets: [
          'Diagnóstico de Salud Financiera: Una revisión inicial para ver qué tan "en orden" están las cuentas, deudas e impuestos.',
          'Mentoría en Toma de Decisiones: revisar si puede contratar a alguien más, si debe subir precios o si puede pedir un crédito.',
          'Capacitación Administrativa: Enseñarles a ellos (o a su equipo) cómo organizar las facturas, cómo pedir una cuenta de cobro y cómo no mezclar el dinero personal con el del negocio.',
          'Alertas de Cumplimiento: Avisarles con tiempo: "Ojo, este mes vendiste mucho, prepárate porque el IVA va a salir alto".',
          'Radar de Novedades Legales: Mantenerlos al tanto de cambios en leyes (como la reducción de jornada o cambios en retenciones) para que no los tomen por sorpresa.',
        ],
      },
      {
        paragraphs: [
          'Ofrecemos paquetes tipo "Suscripción de Asesoría" que incluyen una reunión mensual de 1 hora para revisar resultados. Los emprendedores valoran mucho tener a alguien profesional a quien poder hacerle una pregunta rápida por WhatsApp sin sentir que les van a cobrar una consulta aparte cada vez.',
        ],
      },
    ],
  },

  'nomina-seguridad-social': {
    title: 'Gestión de nómina y seguridad social',
    eyebrow: 'Servicio',
    intro:
      'Liquidación integral de nómina, seguridad social y apoyo laboral para que tu equipo esté en regla y tú tranquilo.',
    sections: [
      {
        title: '1. Gestión Integral de Nómina',
        note: 'Se puede ofrecer como un paquete mensual.',
        bullets: [
          'Liquidación de Nómina: Procesamiento de salarios, horas extras, recargos nocturnos, dominicales y festivos.',
          'Liquidación de Prestaciones Sociales: Cálculo de prima, cesantías, intereses sobre cesantías y vacaciones (tanto el pago anual como la provisión mensual).',
          'Liquidación de Contratos: Cálculos de finiquitos e indemnizaciones en caso de retiros.',
          'Emisión de Nómina Electrónica: Generación y envío de los archivos XML exigidos por la DIAN.',
        ],
      },
      {
        title: '2. Seguridad Social y Parafiscales',
        bullets: [
          'Liquidación de PILA: Gestión de pagos a salud, pensión, ARL y Caja de Compensación.',
          'Trámites de Afiliaciones: Ingresos y retiros de trabajadores en todas las entidades del sistema.',
          'Gestión de Incapacidades: Cobro y seguimiento de incapacidades ante las EPS y ARL para que la empresa recupere ese dinero.',
          'Reporte de Novedades: Manejo de licencias de maternidad/paternidad, permisos no remunerados y suspensiones.',
        ],
      },
      {
        title: '3. Consultoría y Auditoría Laboral',
        note: 'Se cobra por proyecto.',
        bullets: [
          'Auditoría de Nómina Pre-UGPP: Revisión de pagos para evitar sanciones de la Unidad de Gestión Pensional y Parafiscales (UGPP).',
          'Diseño de Políticas Salariales: Asesoría en qué pagos constituyen salario y cuáles no (desalarización legal) para optimizar costos.',
          'Elaboración de Reglamentos Internos: Creación de manuales de convivencia y reglamentos de trabajo ajustados a la ley.',
        ],
      },
      {
        title: '4. Servicios Contables Tradicionales',
        bullets: [
          'Outsourcing Contable: Registro de transacciones, conciliaciones bancarias y estados financieros.',
          'Declaraciones Tributarias: Elaboración de IVA, Retención en la Fuente e Impuesto de Renta.',
          'Certificaciones de Ingresos: Muy solicitadas por empleados para créditos bancarios.',
        ],
      },
    ],
  },

  'gestion-contable': {
    title: 'Gestión contable',
    eyebrow: 'Servicio',
    quote:
      'Mi servicio no es solo registrar facturas; es entregarte cada mes una radiografía de tu negocio. Sabrás exactamente en qué se va el dinero, cuánto te queda libre de verdad y cómo prepararte para crecer sin sorpresas negativas.',
    sections: [
      {
        title: '1. Outsourcing Contable',
        note: 'Es el servicio mensual donde me encargo de todo el ciclo.',
        bullets: [
          'Causación y registro de transacciones: Clasificación de facturas de venta, gastos y costos.',
          'Conciliaciones Bancarias: Asegurar que lo que dice el extracto coincida perfectamente con los libros.',
          'Manejo de Activos Fijos: Control de depreciaciones y estado de los bienes de la empresa.',
          'Control de Cuentas por Cobrar y Pagar: Reportes de quién les debe dinero y a quién le deben, para cuidar el flujo de caja.',
        ],
      },
      {
        title: '2. Generación de Información Financiera',
        note: 'Esto es lo que el banco o los socios siempre piden.',
        bullets: [
          'Estados Financieros Mensuales: Balance General y Estado de Resultados con sus respectivas notas.',
          'Certificaciones Contables: Firmadas por ti para trámites de créditos, licitaciones o contratos.',
          'Conversión a NIIF (Normas Internacionales): Asegurar que la contabilidad cumpla con los estándares exigidos en Colombia (Grupo 1, 2 o 3).',
        ],
      },
      {
        title: '3. Control y Presupuesto (Contabilidad Administrativa)',
        bullets: [
          'Análisis de Rentabilidad: Decirle al cliente qué productos o servicios le dejan dinero y cuáles le están dando pérdidas.',
          'Análisis de Costos: Ayudar a fijar precios de venta basados en costos reales (materia prima, mano de obra y costos indirectos).',
          'Elaboración de Presupuestos: Ayudar a la empresa a proyectar cuánto planea vender y gastar en el año, y hacer el seguimiento mensual.',
        ],
      },
    ],
  },

  'declaraciones-tributarias': {
    title: 'Declaraciones tributarias',
    eyebrow: 'Servicio',
    quote:
      'No dejes tu patrimonio al azar. Mi servicio de Declaraciones Tributarias no solo cumple con la DIAN, sino que protege tu dinero mediante una planeación estratégica legal. Yo me encargo de los formularios, tú de disfrutar los resultados.',
    sections: [
      {
        title: '1. Impuestos para Personas Naturales',
        note: 'Fechas entre agosto y octubre.',
        bullets: [
          'Declaración de Renta: Elaboración de la declaración para empleados, independientes o rentistas de capital, buscando siempre el mayor beneficio legal (deducciones y rentas exentas).',
          'Planeación Tributaria Personal: Asesoría previa para que el cliente organice sus gastos y ahorros de modo que el impuesto del próximo año sea menor.',
        ],
      },
      {
        title: '2. Impuestos para Personas Jurídicas (Empresas)',
        bullets: [
          'Impuesto de Renta y Complementarios: Liquidación anual para sociedades.',
          'IVA (Impuesto al Valor Agregado): Preparación de declaraciones bimestrales o cuatrimestrales.',
          'Retención en la Fuente: Declaraciones mensuales de retenciones practicadas.',
          'ICA (Industria y Comercio) y Rete-ICA: Gestión de impuestos municipales según la ciudad donde opere la empresa.',
          'Impuesto al Consumo: Si tu cliente es del sector de restaurantes, bares o eventos.',
        ],
      },
      {
        title: '3. Información Exógena (Medios Magníficos)',
        note: 'Servicio especializado y obligatorio que puedes cobrar por separado.',
        bullets: [
          'Reporte a la DIAN: Preparación y envío de los archivos XML con el detalle de las operaciones con terceros.',
          'Reporte a Municipios: Algunas ciudades también piden información exógena local.',
        ],
      },
    ],
  },

  'tramites-dian': {
    title: 'Trámites DIAN',
    eyebrow: 'Servicio',
    quote:
      'No esperes a que te llegue un correo de la DIAN. Te ayudo a gestionar tu RUT, facturación electrónica y declaraciones a tiempo para que duermas tranquilo mientras tu negocio crece legalmente.',
    sections: [
      {
        title: '1. Gestión del RUT (Registro Único Tributario)',
        bullets: [
          'Inscripción y actualización: Cambios de dirección, actividades económicas (códigos CIIU) o responsabilidades tributarias.',
          'Formalización de empresas: Acompañamiento en la obtención del RUT para nuevas sociedades.',
          'Cancelación de RUT: Para personas fallecidas o empresas en liquidación.',
        ],
      },
      {
        title: '2. Obligaciones Tributarias (Impuestos)',
        bullets: [
          'Declaración de Renta (Personas Naturales y Jurídicas): Elaboración y presentación anual.',
          'IVA y Retención en la Fuente: Liquidación mensual, bimestral o cuatrimestral según corresponda.',
          'Impuesto al Consumo: Especial para restaurantes, bares y servicios de telefonía.',
          'ICA (Industria y Comercio): Aunque es municipal, suele ir de la mano con la gestión de la DIAN.',
        ],
      },
      {
        title: '3. Facturación y Nómina Electrónica',
        bullets: [
          'Habilitación de Facturación Electrónica: Configuración del software, obtención de resolución de numeración y pruebas ante la DIAN.',
          'Documento Soporte Electrónico: Para compras realizadas a proveedores no obligados a facturar.',
          'Implementación de Nómina Electrónica.',
          'Radián: Registro de facturas como título valor (para quienes hacen Factoring).',
        ],
      },
      {
        title: '4. Representación y Trámites Especiales',
        bullets: [
          'Solicitud de Devolución de Saldos a Favor: Gestión para recuperar dinero de renta o IVA que quedó a favor del contribuyente.',
          'Respuesta a Requerimientos: Elaboración de respuestas técnicas ante cartas o procesos de fiscalización de la DIAN.',
          'Régimen Simple de Tributación (RST): Análisis y migración de clientes al modelo SIMPLE para que ahorren impuestos de forma legal.',
          'Firma Electrónica: Gestión y renovación de la firma digital.',
        ],
      },
    ],
  },

  'formatos-plantillas': {
    title: 'Formatos y plantillas',
    eyebrow: 'Servicio',
    intro:
      'Documentación profesional lista para usar: laboral, administrativa, tributaria y correspondencia formal.',
    sections: [
      {
        title: '1. Pack de Documentación Laboral (Gestión de Nómina)',
        note: 'El más valioso para evitar demandas laborales.',
        bullets: [
          'Modelos de Contratos de Trabajo: (Término fijo, indefinido, obra o labor) ajustados a la ley vigente.',
          'Formato de Otrosí: Para cambios de sueldo, de cargo o prórrogas.',
          'Plantilla de Liquidación de Prestaciones: Un Excel formulado para que el cliente calcule cesantías, prima y vacaciones.',
          'Carta de Terminación de Contrato: Modelos con justa causa y sin justa causa.',
          'Formato de Control de Horas Extras: Para que los empleados registren sus recargos y el contador solo tenga que validar.',
        ],
      },
      {
        title: '2. Pack Administrativo y de Control Interno',
        bullets: [
          'Plantilla de Flujo de Caja (Cash Flow): Un Excel sencillo donde registren entradas y salidas diarias para saber cuánto dinero real tienen.',
          'Formato de Cuenta de Cobro: Especial para sus proveedores que son personas naturales.',
          'Recibo de Caja y Comprobante de Egreso: Plantillas digitales profesionales.',
          'Formato de Reembolso de Caja Menor: Para controlar los "gastos hormiga" de la oficina.',
        ],
      },
      {
        title: '3. Pack de Documentos Tributarios (DIAN)',
        bullets: [
          'Checklist de Documentos para Renta: Una lista clara de qué certificados deben pedir al banco, empresas, etc.',
          'Formato de Certificado de Dependientes: Para que sus empleados declaren a quién tienen a cargo.',
          'Plantilla de Viáticos y Gastos de Viaje: Para que los gastos sean deducibles correctamente ante la DIAN.',
        ],
      },
      {
        title: '4. Pack de Correspondencia Formal',
        bullets: [
          'Cartas de Certificación Laboral: El modelo estándar que siempre piden los empleados.',
          'Cartas de Cobro Persuasivo: Para clientes que están en mora (Cartera).',
          'Respuesta a Requerimientos Ordinarios: Un borrador base de cómo dirigirse a una entidad estatal o bancaria.',
        ],
      },
    ],
  },
};

export const serviceSlugs = Object.keys(serviceLandings);
