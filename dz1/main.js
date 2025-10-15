const cards = [
    { 
        id: 1, 
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFH6wVQiyNAj5KJYkcKXvocB-aILcknKTv1PAGz7PtmW1PCqvUbBBu3lZ9o-YcSW_5IIOx9lINscrp8JiCh84HV1onsFz6lP-FfOu_pg',
        title: 'Енот 1',
        price: 1200 
    },
    {
        id: 2, 
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFH6wVQiyNAj5KJYkcKXvocB-aILcknKTv1PAGz7PtmW1PCqvUbBBu3lZ9o-YcSW_5IIOx9lINscrp8JiCh84HV1onsFz6lP-FfOu_pg', 
        title: 'Енот 2', 
        price: 2200 
    },
    { 
        id: 3,
        img: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFH6wVQiyNAj5KJYkcKXvocB-aILcknKTv1PAGz7PtmW1PCqvUbBBu3lZ9o-YcSW_5IIOx9lINscrp8JiCh84HV1onsFz6lP-FfOu_pg', 
        title: 'Енот 3', 
        price: 1300 
    }
];

const container = document.getElementById('cards');

   for(let i = 0; i < cards.length; i++) {
    container.innerHTML += `
    <div class="card">
      <img src="${cards[i].img}" alt="${cards[i].title}">
      <h3>${cards[i].title}</h3>
      <p>${cards[i].price} сом</p>
      <button>Купить</button>
    </div>
  `;
   }



   

   
