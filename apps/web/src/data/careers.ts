/**
 * Content for the "Trabaja con nosotros" page (S12).
 *
 * The four steps are the client's own copy, given verbatim on 2026-11-18; edit
 * them here instead of in the markup. Only the missing accent of the first
 * title was restored ("Registrate" -> "Regístrate").
 */
export interface CareerStep {
  title: string
  description: string
}

export const CAREER_STEPS: CareerStep[] = [
  {
    title: 'Regístrate',
    description:
      'Completa nuestro formulario de registro con tus datos y la información de tu empresa.',
  },
  {
    title: 'Te contactaremos',
    description:
      'Una vez recibido tu formulario, nuestro equipo revisará la información proporcionada y se pondrá en contacto contigo.',
  },
  {
    title: 'Formalizamos tu registro',
    description:
      'Si tu perfil cumple con nuestros criterios, formalizaremos tu registro como distribuidor.',
  },
  {
    title: 'Disfruta de tus beneficios',
    description:
      'Ahora puedes disfrutar de tus beneficios como precios mayoristas, productos de última generación y soporte especializado.',
  },
]
