import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        router.push('/login');
        return;
      }

      const response = await fetch('/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
      } else {
        router.push('/login');
      }

      setLoading(false);
    };

    fetchUser();
  }, [router]);

  return { user, loading };
}