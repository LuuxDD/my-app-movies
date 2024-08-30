import Movie from "./Movies/page";

export default async function Home() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGNhZjk1N2RlMDFkMDEwNmU2OWIwNGVkYzQ4NTk0YyIsIm5iZiI6MTcyNDk3NjA2NC4zMTM1Nywic3ViIjoiNjZkMTA2MmZiMjcwYmNiOWZjYTdkMDJjIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.l8bb0iianolBVZ0Jg0_PJJeVOQF_ZP3-_Zrj1YXuW8g'
    }
  };
  
  const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  const { results } = await response.json();

  return (
    <ul>
      { results.map((movie) => (<li key={movie.id}>{movie.title}</li>) )}
    </ul>
  );
}
