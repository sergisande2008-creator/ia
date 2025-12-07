import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nombre, empresa, email, telefono, servicio, mensaje, presupuesto, aceptaPolitica } = body;

    // Validar que se aceptó la política de privacidad
    if (!aceptaPolitica && aceptaPolitica !== undefined) {
      return NextResponse.json(
        { error: 'Debes aceptar la Política de Privacidad' },
        { status: 400 }
      );
    }

    // Mapear valores de presupuesto a sus etiquetas completas
    const presupuestoLabels: Record<string, string> = {
      'starter': 'Starter (1.000 - 3.000 USD)',
      'growth': 'Growth (3.000 - 5.000 USD)',
      'premium': 'Premium (5.000 - 10.000 USD)',
      'enterprise': 'Enterprise (10.000+ USD)'
    };

    const presupuestoDisplay = presupuesto ? presupuestoLabels[presupuesto] || presupuesto : 'No especificado';
    const contenido = mensaje || servicio || 'No especificado';

    // Enviar email
    const { data, error } = await resend.emails.send({
      from: 'Nevada Automations <onboarding@resend.dev>',
      to: ['sande@nevadaautomations.com'],
      subject: `Nuevo contacto de ${nombre} - ${empresa}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4F46E5;">Nuevo Mensaje de Contacto</h2>
          
          <div style="background: #F3F4F6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nombre:</strong> ${nombre}</p>
            <p style="margin: 10px 0;"><strong>Empresa:</strong> ${empresa}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Teléfono:</strong> ${telefono}</p>
            <p style="margin: 10px 0;"><strong>Interesado en:</strong> ${contenido}</p>
            <p style="margin: 10px 0;"><strong>Presupuesto:</strong> ${presupuestoDisplay}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error al enviar el email' },
      { status: 500 }
    );
  }
}