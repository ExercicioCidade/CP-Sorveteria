
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
    <div>
      <div>
        {sabores.map((sabor) => (
          <div key={sabor.id}>
            <h3>{sabor.title}</h3>

            <p>{sabor.description}</p>

            <p>
              R${sabor.price}
            </p>

            <div>
              <button>Comprar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
