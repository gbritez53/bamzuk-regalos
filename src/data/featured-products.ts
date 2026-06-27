export interface FeaturedProduct {
  image: string
  imageAlt: string
  badge: string
  title: string
  description: string
  href: string
}

export const featuredProducts: FeaturedProduct[] = [
  {
    image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&auto=format&fit=crop',
    imageAlt: 'Set de Papelería Harry Potter',
    badge: 'Regalos Geeks',
    title: 'Set Papelería Harry Potter',
    description: 'Una colección mágica de útiles de escritorio inspirados en el mundo de Harry Potter. Perfecto para fans de todas las edades que quieren llevar la magia a su día a día.',
    href: '/productos/set-papeleria-harry-potter',
  },
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop',
    imageAlt: 'Sacacorchos eléctrico 6 en 1',
    badge: 'Regalos Tecnológicos',
    title: 'Sacacorchos Eléctrico 6 en 1',
    description: 'Abre botellas de vino sin esfuerzo con este elegante sacacorchos eléctrico recargable. Incluye accesorios para servir y conservar el vino en perfectas condiciones.',
    href: '/productos/sacacorchos-electrico',
  },
  {
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&auto=format&fit=crop',
    imageAlt: 'Lámpara Luna',
    badge: 'Para Casa y Decoración',
    title: 'Lámpara Luna',
    description: 'Una reproducción tridimensional de la luna con luz LED cálida. Crea un ambiente íntimo y especial en cualquier habitación del hogar.',
    href: '/productos/lampara-luna',
  },
]
