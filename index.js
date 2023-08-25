const ctn = document.querySelector("#movieList1");

function createMovieCard({ imageUrl, movieName, year, imdbRate, liked }) {
  let htmlCode = `
  <div class="card">
  <img src="${imageUrl}" alt="" class="" />
  <h2 class="font-bold text-base text-white">${movieName}</h2>
  <p class="font-bold text-xs text-gray-400 py-2">${year}</p>
  <div class="flex">
    <div class="flex flex-row w-32">
      <img src="/img/image 5.png" alt="" class="w-7 h-3.5" />
      <p class="text-xs text-yellow-500 font-bold px-2">${imdbRate}</p>
    </div>
    <div class="gap-x-2 flex flex-row">
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-eye text-white"
          viewBox="0 0 16 16"
        >
          <path
            d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"
          />
          <path
            d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"
          />
        </svg>
      </span>
      <span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill ${
            liked === true ? "text-red-500" : "text-white"
          }"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </span>
    </div>
  </div>
</div>
`;
  ctn.innerHTML += htmlCode;
}

const movies = [
  {
    imageUrl: "/img/1.png",
    movieName: "96",
    year: "2018",
    imdbRate: "8.6",
    liked: false,
  },
  {
    imageUrl: "/img/2.png",
    movieName: "Swades",
    year: "2004",
    imdbRate: "8.2",
    liked: true,
  },
  {
    imageUrl: "/img/3.png",
    movieName: "Andhadhun",
    year: "2018",
    imdbRate: "8.2",
    liked: true,
  },
  {
    imageUrl: "/img/4.png",
    movieName: "Sarpatta Paramba...",
    year: "2021",
    imdbRate: "8.8",
    liked: false,
  },
  {
    imageUrl: "/img/5.png",
    movieName: "Piku",
    year: "2015",
    imdbRate: "7.6",
    liked: true,
  },
  {
    imageUrl: "/img/6.png",
    movieName: "96Hotel Mumbai",
    year: "2018",
    imdbRate: "7.6",
    liked: false,
  },
  {
    imageUrl: "/img/7.png",
    movieName: "Dil Chahta Hai",
    year: "2021",
    imdbRate: "8.1",
    liked: false,
  },
  {
    imageUrl: "/img/8.png",
    movieName: "3 Idiots",
    year: "2009",
    imdbRate: "8.5",
    liked: true,
  },
  {
    imageUrl: "/img/9.png",
    movieName: "Rockstar",
    year: "2011",
    imdbRate: "7.8",
    liked: true,
  },
  {
    imageUrl: "/img/10.png",
    movieName: "Jaane Tu... Ya Jaa...",
    year: "2008",
    imdbRate: "7.4",
    liked: true,
  },
  {
    imageUrl: "/img/11.png",
    movieName: "Dilwale Dulhaniya...",
    year: "1995",
    imdbRate: "8.2",
    liked: true,
  },
  {
    imageUrl: "/img/12.png",
    movieName: "My Name is Khan",
    year: "2010",
    imdbRate: "8.0",
    liked: true,
  },
];

for(let i=0; i<movies.length; i++){
    createMovieCard(movies[i])
}