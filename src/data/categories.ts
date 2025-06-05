 interface Category {
  title: string,
  slug: string,
  icon: string,
  description: string,
  count: number,
 }

 export const categories: Category[] = [
  { 
    title: "Arte y diseño de uñas", 
    slug: "uñas", 
    icon: "💅", 
    description: "Domina técnicas de gel, acrílico y arte en uñas de la mano de artistas profesionales.", 
    count: 12 
  },
  { 
    title: "Maquillaje", 
    slug: "makeup", 
    icon: "🧖‍♀️", 
    description: "Desde looks cotidianos hasta maquillaje para ocasiones especiales y teatral.", 
    count: 15 
  },
  { 
    title: "Cuidado de la piel", 
    slug: "skincare", 
    icon: "✨", 
    description: "Aprendé sobre la ciencia de la piel, tratamientos faciales y formulación de productos.", 
    count: 8 
  },
  { 
    title: "Peinado", 
    slug: "hair", 
    icon: "💇‍♀️", 
    description: "Técnicas de corte, coloración y estilizado para todo tipo y textura de cabello.", 
    count: 10 
  },
  { 
    title: "Extensiones de pestañas", 
    slug: "lashes", 
    icon: "👁️", 
    description: "Aplicación clásica, volumen e híbrida enseñada por instructoras certificadas.", 
    count: 6 
  },
  { 
    title: "Negocios de belleza", 
    slug: "business", 
    icon: "📊", 
    description: "Marketing, gestión de clientes y estrategias de negocio para emprendedoras de belleza.", 
    count: 5 
  }
];
