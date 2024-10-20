'use client';
import { Button } from '@/components/ui/button';
import { CheckCheck } from 'lucide-react';
import Link from 'next/link';
import { useEffect } from 'react';
import { useShoppingCart } from 'use-shopping-cart';

const PaymentSuccessPage = () => {
  const { clearCart } = useShoppingCart();

  useEffect(() => {
    const timer = setTimeout(() => {
      clearCart();
    }, 100); // Small delay to ensure initialization

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="h-screen">
      <div className="mx-auto mt-32 md:max-w-[50vw]">
        <CheckCheck className="mx-auto my-6 size-16 text-green-600" />
        <div className="text-center">
          <h2 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
            Pago Realizado con éxito!
          </h2>
          <p className="my-2 text-gray-600">Gracias por su compra, esperamos que la disfrute</p>
          <p>Que tenga un hermoso día</p>
          <Button asChild className="mt-5">
            <Link href="/">Volver a Tienda</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
