'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'react-hot-toast';
import { createBooking } from '@/lib/api/bookingApi';
import css from './BookingForm.module.css';

const validationSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .refine(value => value.trim().split(/\s+/).length >= 2, {
      message: 'Please enter your full name.',
    }),
  email: z.string().min(1, 'Email is required').email('Invalid email address'),
});

type FormInputs = z.infer<typeof validationSchema>;

interface Props {
  camperId: string;
}

export default function BookingForm({ camperId }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormInputs>({ resolver: zodResolver(validationSchema) });

  async function handleFormSubmit(values: FormInputs) {
    try {
      await createBooking(camperId, values);
      toast.success('Booking submitted successfully!');
      reset();
    } catch {
      toast.error('Booking error. Please try again.');
    }
  }

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className={css.bookingCard}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.text}>Stay connected! We are always ready to help you.</p>

      <div className={css.fieldBox}>
        <input
          {...register('name')}
          className={`${css.fieldInput} ${errors.name ? css.inputError : ''}`}
          placeholder="Name*"
        />
        {errors.name && <span className={css.fieldAlert}>{errors.name.message}</span>}
      </div>

      <div className={css.fieldBox}>
        <input
          {...register('email')}
          className={`${css.fieldInput} ${errors.email ? css.inputError : ''}`}
          placeholder="Email*"
          type="email"
        />
        {errors.email && <span className={css.fieldAlert}>{errors.email.message}</span>}
      </div>

      <button type="submit" disabled={isSubmitting} className={css.actionButton}>
        {isSubmitting ? 'Sending...' : 'Send'}
      </button>
    </form>
  );
}
