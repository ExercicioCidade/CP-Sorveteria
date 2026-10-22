import { useEffect, useState } from "react"

const Cards = () => {

    const sabores = [
  { id: 1, title: "Sorvete Um", description: "First item description.", price: 1000.00 },
  { id: 2, title: "Sorvete Dois", description: "Second item description.", price: 1500.00 },
  { id: 3, title: "Sorvete Três", description: "Third item description.", price: 3000.00 },
  { id: 4, title: "Sorvete Quatro", description: "Fourth item description.", price: 2500.00 },
  { id: 5, title: "Sorvete Cinco", description: "Fifth item description.", price: 3500.00 },
  { id: 6, title: "Sorvete Seis", description: "Sixth item description.", price: 2000.00 },
];

return (
    <div className="bg-[#F7F4EE]">
        {/* <h4 className="p-4 text-lg font-bold text-white">Conheça nossos produtos!</h4> */}
        <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sabores.map((sabor) => (
            <div
            key={sabor.id}
            className="rounded-xl border border-gray-200 bg-[#849B83] p-5 shadow-sm transition hover:shadow-md">
                <h3 className="mb-2 text-lg font-semibold text-[#4b1a0e]">
                    {sabor.title}
                </h3>

                <p className="text-sm text-[#4b1a0e]">
                    {sabor.description}
                </p>

                <p className="text-xl text-black text-center mt-4 font-bold">
                    R${sabor.price}
                </p>
                <div className="mt-2 flex justify-center">
                    <button className="w-1/2 rounded-2xl bg-[#C25E50] px-4 py-1 text-lg font-semibold text-gray-300 hover:bg-red-700">
                        Comprar
                    </button>
                </div>
            </div>
        ))}
        </div>
    </div>
  );
}

export default Cards