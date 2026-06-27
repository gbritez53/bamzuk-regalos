export interface NavItem {
  label: string
  href: string
}

export interface NavGroup {
  title: string
  items: NavItem[]
}

export const mainLinks: NavItem[] = [
  { label: 'Início', href: '/' },
  { label: 'Quiénes Somos', href: '/quienes-somos' },
  { label: 'Visita Nuestro Blog', href: '/blog' },
  { label: 'Tu Producto', href: '/tu-producto' },
  { label: 'Contáctanos', href: '/contactanos' },
]

export const categoryGroups: NavGroup[] = [
  {
    title: 'Por Destinatario',
    items: [
      { label: 'Abuelas', href: '/regalos/abuelas' },
      { label: 'Abuelos', href: '/regalos/abuelos' },
      { label: 'Amigos', href: '/regalos/amigos' },
      { label: 'Chicas Adolescentes', href: '/regalos/chicas-adolescentes' },
      { label: 'Chicos Adolescentes', href: '/regalos/chicos-adolescentes' },
      { label: 'Compañeros de Trabajo', href: '/regalos/companeros-de-trabajo' },
      { label: 'Damas de Honor', href: '/regalos/damas-de-honor' },
      { label: 'Esposa', href: '/regalos/esposa' },
      { label: 'Hombres', href: '/regalos/hombres' },
      { label: 'Jefe', href: '/regalos/jefe' },
      { label: 'Mamá', href: '/regalos/mama' },
      { label: 'Marido', href: '/regalos/marido' },
      { label: 'Mascotas', href: '/regalos/mascotas' },
      { label: 'Mujeres', href: '/regalos/mujeres' },
      { label: 'Niños', href: '/regalos/ninos' },
      { label: 'Novia', href: '/regalos/novia' },
      { label: 'Novio', href: '/regalos/novio' },
      { label: 'Papá', href: '/regalos/papa' },
      { label: 'Pride', href: '/regalos/pride' },
      { label: 'Parejas', href: '/regalos/parejas' },
    ],
  },
  {
    title: 'Por Ocasión',
    items: [
      { label: 'Aniversario para Ella', href: '/regalos/aniversario-para-ella' },
      { label: 'Aniversario para Él', href: '/regalos/aniversario-para-el' },
      { label: 'Baby Shower', href: '/regalos/baby-shower' },
      { label: 'Bodas', href: '/regalos/bodas' },
      { label: 'Navidad y Fiestas', href: '/regalos/navidad-y-fiestas' },
      { label: 'Día de la Madre', href: '/regalos/dia-de-la-madre' },
      { label: 'Día del Padre', href: '/regalos/dia-del-padre' },
      { label: 'Graduaciones', href: '/regalos/graduaciones' },
      { label: 'Cumpleaños', href: '/regalos/cumpleanos' },
      { label: 'Estreno de Casa', href: '/regalos/estreno-de-casa' },
      { label: 'Compromiso', href: '/regalos/compromiso' },
      { label: 'Para Empresas', href: '/regalos/para-empresas' },
      { label: 'San Valentín Para Él', href: '/regalos/san-valentin-para-el' },
      { label: 'San Valentín Para Ella', href: '/regalos/san-valentin-para-ella' },
      { label: 'Supervivencia a un Apocalipsis', href: '/regalos/supervivencia-apocalipsis' },
    ],
  },
  {
    title: 'Por Tipo de Regalo',
    items: [
      { label: 'Regalos de Lujo', href: '/regalos/lujo' },
      { label: 'Regalos Ecoamigables', href: '/regalos/ecoamigables' },
      { label: 'Regalos Geeks', href: '/regalos/geeks' },
      { label: 'Regalos Musicales', href: '/regalos/musicales' },
      { label: 'Regalos Originales', href: '/regalos/originales' },
      { label: 'Regalos Personalizados', href: '/regalos/personalizados' },
      { label: 'Regalos de Oficina', href: '/regalos/oficina' },
      { label: 'Regalos Tecnológicos', href: '/regalos/tecnologicos' },
      { label: 'Regalos Útiles', href: '/regalos/utiles' },
      { label: 'Elefante Blanco', href: '/regalos/elefante-blanco' },
      { label: 'Regalos de Bromas', href: '/regalos/bromas' },
    ],
  },
  {
    title: 'Por Estilo de Vida',
    items: [
      { label: 'Para Amantes de los Animales', href: '/regalos/amantes-animales' },
      { label: 'Para Amantes del Café y la Cocina', href: '/regalos/cafe-y-cocina' },
      { label: 'Profesores y Cuidadores', href: '/regalos/profesores-cuidadores' },
      { label: 'Para Casa y Decoración', href: '/regalos/casa-y-decoracion' },
      { label: 'Para Deportistas', href: '/regalos/deportistas' },
      { label: 'Para Lectores/as', href: '/regalos/lectores' },
      { label: 'Para Gamers', href: '/regalos/gamers' },
      { label: 'Para Oficina o Teletrabajo', href: '/regalos/oficina-teletrabajo' },
      { label: 'Para Viajeros/as', href: '/regalos/viajeros' },
      { label: 'Para Cinéfilos', href: '/regalos/cinefilos' },
    ],
  },
  {
    title: 'Rango de Precio',
    items: [
      { label: 'Por menos de 10 Euros', href: '/regalos/menos-de-10' },
      { label: 'Por 20€', href: '/regalos/por-20' },
      { label: 'Entre 20 y 50€', href: '/regalos/entre-20-y-50' },
      { label: 'Entre 50 y 100€', href: '/regalos/entre-50-y-100' },
      { label: 'De más de 100€', href: '/regalos/mas-de-100' },
    ],
  },
  {
    title: 'Cursos Bamzuk',
    items: [
      { label: 'Pastelería Canina y Felina', href: '/cursos/pasteleria-canina-felina' },
      { label: 'Depilación con Cera 3×1', href: '/cursos/depilacion-cera' },
      { label: 'Elimina los Síntomas de la Ansiedad', href: '/cursos/sintomas-ansiedad' },
      { label: 'Diseño de Pasteles y Cake Toppers', href: '/cursos/diseno-pasteles' },
      { label: 'Jardinería Vertical', href: '/cursos/jardineria-vertical' },
      { label: "Cafetera De'Longhi Dedica", href: '/cursos/delonghi-dedica' },
      { label: 'Diseño y Crea con Resina', href: '/cursos/resina' },
    ],
  },
  {
    title: 'Colecciones Especiales',
    items: [
      { label: 'Los más Vendidos', href: '/colecciones/mas-vendidos' },
      { label: 'Marcas de Amazon', href: '/colecciones/marcas-amazon' },
    ],
  },
]
