interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatarUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Lucía Ramírez",
    role: "Técnica en uñas",
    content: "Desde que empecé a aplicar lo que aprendí, mis clientas están más felices y recomendándome mucho más. Me siento más segura con lo que hago.",
    avatarUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Carlos Méndez",
    role: "Dueño de salón",
    content: "Noté una mejora real en el trabajo del equipo. Las clientas lo sienten y lo comentan. La atención y los resultados son más profesionales.",
    avatarUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Florencia Torres",
    role: "Maquilladora profesional",
    content: "Pude mejorar mucho mi servicio y organizarme mejor como emprendedora. Ahora tengo más claridad sobre cómo hacer crecer mi trabajo.",
    avatarUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150"
  }
];
