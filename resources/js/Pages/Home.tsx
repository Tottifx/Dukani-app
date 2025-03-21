import { PageProps } from "@/types";
import { Head, Link } from "@inertiajs/react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Welcome({
   auth,
   laravelVersion,
   phpVersion,
}: PageProps<{ laravelVersion: string; phpVersion: string }>) {
   const handleImageError = () => {
      document.getElementById("screenshot-container")?.classList.add("!hidden");
      document.getElementById("docs-card")?.classList.add("!row-span-1");
      document.getElementById("docs-card-content")?.classList.add("!flex-row");
      document.getElementById("background")?.classList.add("!hidden");
   };

   return (
      <AuthenticatedLayout>
         <Head title="Welcome" />
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
                     <br />
                     <strong>
                        Nunua kwa ujasiri bidhaa bora, bei nafuu, na huduma
                        bora!
                     </strong>
                     .
                  </p>
                  <button className="btn btn-neutral">Get Started</button>
               </div>
            </div>
         </div>
      </AuthenticatedLayout>
   );
}
