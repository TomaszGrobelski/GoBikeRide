'use client';

import Link from 'next/link';

import '../../styles/global.css';

import { useRouter } from 'next/navigation';
import { useRegistration } from '@/contexts/RegistrationContext';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/ui/atmos/form';
import { Input } from '@/ui/atmos/Form/Input';
import SubmitButton from '@/ui/atmos/SubmitButton';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast, Toaster } from 'sonner';
import * as z from 'zod';

import { supabase } from '@/lib/supabase';

import { RegisterFormSchema } from './form.schema';

const SignUp = () => {
  const router = useRouter();
  const { setRegisteredSuccessfully } = useRegistration();

  const form = useForm<z.infer<typeof RegisterFormSchema>>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (values: z.infer<typeof RegisterFormSchema>) => {
    const { email, password } = values;
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });

      if (error) {
        toast.error(
          'Nie udało się utworzyć konta. Sprawdź dane i spróbuj ponownie.'
        );
        console.error('Błąd podczas rejestracji:', error.message);
      } else if (data) {
        console.log(data);
        router.push('/auth/sign-in');
        setRegisteredSuccessfully(true);
        toast.success(
          'Konto zostało pomyślnie utworzone. Zaloguj się, aby kontynuować.'
        );
      }
    } catch (error: any) {
      toast.error('Wystąpił błąd podczas rejestracji.');
      console.error('Błąd podczas rejestracji:', error.message);
    }
  };

  return (
    <>
      <Toaster
        toastOptions={{
          style: {
            fontSize: '1.2rem'
          }
        }}
        richColors
        position='top-right'
      />
      <div className='flex h-full w-1/2 items-center justify-center'>
        <Form {...form}>
          <form
            className='flex flex-col gap-3'
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name='username'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nazwa użytkownika</FormLabel>
                  <FormControl>
                    <Input placeholder='username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder='mail@example.com' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Hasło</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Wprowadź hasło'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='confirmPassword'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Powtórz hasło</FormLabel>
                  <FormControl>
                    <Input
                      type='password'
                      placeholder='Powtórz swoje hasło'
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <SubmitButton>Zarejestrój</SubmitButton>
          </form>
        </Form>
      </div>
      <div className='flex h-full w-1/2 flex-col items-center justify-center space-y-4 rounded-br-lg rounded-tr-lg bg-gradient-to-br from-[#38B98C] to-[#3AA8AE] text-[14px] text-white'>
        <h2 className='text-center text-[50px]'>Masz już konto ?</h2>
        <Link href='/auth/sign-in'>
          <button className='rounded-full bg-white px-9 py-4 font-bold text-black'>
            Powrot do logowania
          </button>
        </Link>
      </div>
    </>
  );
};

export default SignUp;
