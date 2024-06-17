import prisma from '@/lib/db';

interface User {
  id: number;
  email: string;
  username: string;
}

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    const user = await prisma.user.findFirst({
      where: {
        // Dodaj warunki wyszukiwania użytkownika, np. na podstawie ID sesji
      }
    });

    if (!user) {
      return null;
    }

    // Zwróć obiekt użytkownika
    return {
      id: user.id,
      email: user.email,
      username: user.username
    };
  } catch (error) {
    console.error('Error fetching user:', error);
    return null;
  }
};
