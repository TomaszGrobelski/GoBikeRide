'use client';

import '../../styles/global.css';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useRegistration } from '@/contexts/RegistrationContext';
import { paths } from '@/routes/paths';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/atmos/form';
import { Input } from '@/ui/atmos/Form/Input';
import SubmitButton from '@/ui/atmos/SubmitButton';
import CustomToaster from '@/ui/atmos/Toaster/CustomToaster';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { supabase } from '@/lib/supabase';
import { useBoolean } from '@/hooks/use-Boolean';
import { signInAction } from '@/app/api/auth/singin';

import CustomLine from './CustomLine';
import { LoginFormSchema } from './form.schema';
import RegistrationBox from './RegistrationBox';
import SignInHeader from './SignInHeader';
import SocialLogin from './SocialLogin';

type FormValues = z.infer<typeof LoginFormSchema>;

const SignIn = () => {
    const router = useRouter();
    const toastMounted = useBoolean();
    const { registeredSuccessfully, setRegisteredSuccessfully } = useRegistration();

    useEffect(() => {
        toastMounted.setTrue();
        if (toastMounted.value && registeredSuccessfully) {
            toast.success('Konto zostało pomyślnie utworzone');
            setRegisteredSuccessfully(false);
        }
    }, [registeredSuccessfully, setRegisteredSuccessfully, toastMounted, router]);

    const form = useForm<FormValues>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const onSubmit = async (formData: FormValues) => {
        try {
            const { message, success, session } = await signInAction(formData);

            if (!success) {
                toast.error(message || 'Nie udało się zalogować. Sprawdź dane logowania.');
            } else if (success) {
                if (session) {
                    const { error } = await supabase.auth.setSession(session);
                    if (error) {
                        toast.error(error.message || 'Wystąpił błąd podczas logowania.');
                    }
                }
                router.push(paths.dashboard.home);
            }
        } catch (error) {
            toast.error('Wystąpił błąd podczas logowania.');
        }
    };

    return (
        <>
            <div className='flex h-full w-1/2 flex-col items-center justify-center gap-4 p-4'>
                <SignInHeader />
                <SocialLogin />
                <CustomLine />

                <Form {...form}>
                    <form className='flex flex-col gap-3' onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name='email'
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder='mail@przykład.pl' {...field} />
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
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type='password' placeholder='Wprowadź swoje hasło' {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <SubmitButton>Zaloguj</SubmitButton>
                    </form>
                </Form>
                <div>
                    <p>Email: Testowe@gmail.com</p>
                    <p>Hasło: Testowe123</p>
                </div>
            </div>

            <RegistrationBox />

            <CustomToaster />
        </>
    );
};

export default SignIn;
