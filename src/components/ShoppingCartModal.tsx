'use client';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import { useShoppingCart } from 'use-shopping-cart';
import { Button } from './ui/button';

const ShoppingCartModal = () => {
  const {
    cartCount,
    shouldDisplayCart,
    handleCartClick,
    cartDetails,
    removeItem,
    totalPrice,
    redirectToCheckout,
  } = useShoppingCart();

  async function handleCheckoutClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    try {
      console.log('Redirecting to checkout');
      const result = await redirectToCheckout();
      console.log(result);
      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
      <SheetContent className="w-[90vw] sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
        </SheetHeader>
        <div className="flex h-full flex-col justify-between">
          <div className="mt-8 flex-1 overflow-y-auto">
            <ul className="divide-y divide-gray-200">
              {cartCount === 0 ? (
                <span className="py-6 text-xl">El carrito está vacío</span>
              ) : (
                <>
                  {Object.values(cartDetails ?? {}).map((entry) => (
                    <li key={entry.id} className="flex py-6">
                      <div className="h-32 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img src={entry.image} alt="Product Image" className="object-cover" />
                        {entry.name}
                      </div>
                      <div className="ml-4 flex flex-1 flex-col">
                        <div>
                          <div className="flex justify-between text-base font-medium text-gray-900">
                            <h6>{entry.name}</h6>
                            <p className="ml-4">{entry.price} €</p>
                          </div>
                          <p className="mt-1 line-clamp-2 text-sm text-gray-500">
                            {entry.description}
                          </p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                          <p className="text-gray-500">Cantidad: {entry.quantity}</p>
                          <div className="flex">
                            <button
                              type="button"
                              className="hover:text-primary/80) font-medium text-primary"
                              onClick={() => removeItem(entry.id)}
                            >
                              Quitar
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </>
              )}
            </ul>
          </div>

          <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            <div className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{totalPrice} €</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Los costes de envío e impuestos se calculan en el checkout
            </p>
            <div className="mt-6">
              <Button className="w-full" onClick={handleCheckoutClick}>
                Checkout
              </Button>
            </div>
            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
              <p>
                o{' '}
                <button
                  className="font-medium text-primary hover:text-primary/80"
                  onClick={() => handleCartClick()}
                >
                  Continuar comprando
                </button>
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ShoppingCartModal;
