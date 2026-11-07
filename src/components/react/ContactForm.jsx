import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // 💡 IMPORTANTE: Cambia esto por la URL real de tu backend
  const API_URL = import.meta.env.PUBLIC_API_URL || 'http://localhost:3000';

  const onSubmit = async (data) => {
    setStatus('loading');
    try {
      const response = await fetch(`${API_URL}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      // Like axios, treat any non-2xx response as a failure
      if (!response.ok) {
        throw new Error(`Lead request failed with status ${response.status}`);
      }

      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className='bg-emerald-50 p-8 rounded-xl text-center animate-fade-in-up'>
        <div className='w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4'>
          <CheckCircle size={32} />
        </div>
        <h3 className='text-2xl font-bold text-navy mb-2'>¡Solicitud enviada!</h3>
        <p className='text-slate-600'>Gracias por tu interés. Nuestro equipo te contactará a tu WhatsApp en breve para configurar tu demo.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
      {/* Nombre */}
      <div>
        <label className='block text-sm font-medium text-navy mb-1'>Tu Nombre</label>
        <input
          {...register('name', { required: 'El nombre es obligatorio' })}
          className='w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
          placeholder='Ej. Martín Pérez'
        />
        {errors.name && <span className='text-red-500 text-xs mt-1'>{errors.name.message}</span>}
      </div>

      {/* Nombre del Negocio */}
      <div>
        <label className='block text-sm font-medium text-navy mb-1'>Nombre de la Barbería</label>
        <input {...register('businessName')} className='w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all' placeholder='Ej. Style Cuts' />
      </div>

      {/* Email */}
      <div>
        <label className='block text-sm font-medium text-navy mb-1'>Email Profesional</label>
        <input
          type='email'
          {...register('email', {
            required: 'El email es obligatorio',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email inválido',
            },
          })}
          className='w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
          placeholder='martin@ejemplo.com'
        />
        {errors.email && <span className='text-red-500 text-xs mt-1'>{errors.email.message}</span>}
      </div>

      {/* Teléfono / WhatsApp */}
      <div>
        <label className='block text-sm font-medium text-navy mb-1'>WhatsApp</label>
        <input
          type='tel'
          {...register('phone', { required: 'Necesitamos tu número para contactarte' })}
          className='w-full px-4 py-3 rounded-lg bg-slate-50 border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all'
          placeholder='+54 9 11 ...'
        />
        {errors.phone && <span className='text-red-500 text-xs mt-1'>{errors.phone.message}</span>}
      </div>

      {/* Mensaje de Error Global */}
      {status === 'error' && (
        <div className='bg-red-50 text-red-600 p-3 rounded-lg flex items-center gap-2 text-sm'>
          <AlertCircle size={16} />
          <span>Hubo un error al enviar. Por favor intenta de nuevo.</span>
        </div>
      )}

      {/* Botón de Submit */}
      <button
        type='submit'
        disabled={status === 'loading'}
        className='w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4'
      >
        {status === 'loading' ? (
          <>
            <Loader2 className='animate-spin' size={20} /> Enviando...
          </>
        ) : (
          'Solicitar Demo Gratuita →'
        )}
      </button>

      <p className='text-xs text-center text-slate-400 mt-4'>Al enviar aceptas nuestros términos. No requerimos tarjeta de crédito.</p>
    </form>
  );
}
