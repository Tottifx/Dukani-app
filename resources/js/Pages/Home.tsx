import {PageProps, PaginationProps, Product} from '@/types';
import {Head, Link} from '@inertiajs/react';
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import ProductItem from "@/Components/App/ProductItem";

export default function Home(
   {
      products
   }: PageProps<{ products: PaginationProps<Product> }>) {

   return (
      <AuthenticatedLayout>
         <Head title="Home"/>
         <div className="hero bg-gray-200 min-h-[300px]">
            <div className="hero-content text-center">
               <div className="max-w-md">
                  <h1 className="text-5xl font-bold">Hello karbu!</h1>
                  <p className="py-6">
                     Tunakuleta karibu na bidhaa bora kutoka kwa wauzaji
                     mbalimbali, kwa bei nafuu na huduma ya kuaminika. Vinjari,
                     ongeza kwenye toroli, na fanya ununuzi kwa urahisi kabisa.
                     Jiunge nasi leo na ufurahie ofa maalum, usafirishaji wa
                     haraka, na uzoefu bora wa ununuzi mtandaoni!
                     <br/>
                     <strong>
                        Nunua kwa ujasiri bidhaa bora, bei nafuu, na huduma
                        bora!.
                     </strong>
                  </p>
                  <button className="btn btn-neutral">Get Started</button>
               </div>
            </div>
         </div>

         <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 p-8">
            {products.data.map((product) => (
               <ProductItem product={product} key={product.id}/>
            ))}
         </div>

      </AuthenticatedLayout>
   );
}
