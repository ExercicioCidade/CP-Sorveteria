
import { useEffect, useState } from "react"

const Cards = () => {
  const sabores = [
    {
      id: 1,
      title: "Sorvete de Banoffee",
      description: "Uma combinação irresistível de banana caramelizada, doce de leite cremoso e um toque de canela.",
      price: 12.00,
      image: "src/assets/banoffee.png"
    },
    {
      id: 2,
      title: "Sorvete de Chocolate Belga",
      description: "Feito com chocolate belga intenso, textura aveludada e sabor marcante para os verdadeiros amantes de chocolate.",
      price: 15.00,
      image: "src/assets/chocolate_belga.png"
    },
    {
      id: 3,
      title: "Sorvete de Paçoca",
      description: "Cremoso e cheio de sabor, com o gostinho irresistível do amendoim e da tradicional paçoca brasileira.",
      price: 10.00,
      image: "src/assets/pacoca.png"
    },
    {
      id: 4,
      title: "Sorvete de Doce de Leite",
      description: "Sorvete suave e cremoso, preparado com o sabor rico do doce de leite e deliciosos fios caramelizados.",
      price: 12.00,
      image: "src/assets/doce_de_leite.png"
    },
    {
      id: 5,
      title: "Sorvete de Floresta Negra",
      description: "Uma deliciosa mistura de chocolate, cerejas e pedaços de bolo, inspirada na clássica sobremesa alemã.",
      price: 16.00,
      image: "src/assets/floresta_negra.png"
    },
    {
      id: 6,
      title: "Sorvete de Chocomenta",
      description: "A combinação refrescante da menta com o chocolate, unindo cremosidade, frescor e pedacinhos crocantes.",
      price: 13.00,
      image: "src/assets/chocomenta.png"
    },
  ];

  return (
    <div className="bg-[#F7F4EE]">
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sabores.map((sabor) => (
            <div
            key={sabor.id}
            className="rounded-xl border border-gray-200 bg-[#849B83] p-5 shadow-sm transition hover:shadow-md"
            >
            <img src={sabor.image}
                alt = {sabor.title}
                className="w-full rounded-2xl h-48 object-cover mb-4"/>
            <h3 className="mb-2 text-lg font-semibold text-[#4b1a0e]">
              {sabor.title}
            </h3>

            <p className="text-sm text-[#4b1a0e]">
              {sabor.description}
            </p>

            <p className="mt-4 text-center text-xl font-bold text-black">
              {sabor.price.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
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
};

export default Cards;
