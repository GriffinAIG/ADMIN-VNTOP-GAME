"use client";
import Dashboard from '@/components/Dashboard/E-commerce'
import Image from 'next/image'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getItemLocalStorage } from '@/utils';
import Loader from '@/components/common/Loader';

export default function Home() {

  const router = useRouter()
  const auth = getItemLocalStorage("auth");

  useEffect(() => {
    // if (!auth) {
    //   router.push('/auth/signin')
    // }
  }, [])


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {auth ?
        <Loader /> :
        <Dashboard />

      }
    </main>
  )
}
