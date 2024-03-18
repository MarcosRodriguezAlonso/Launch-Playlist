export const isTitleEmpty = (songTitle: string): boolean => {
  let isEmpty: boolean;
  // Asígnale a la variable isEmpty un true o un false dependiendo de si
  // la variable songTitle recibida tiene un string vacío o no

  return songTitle.length === 0;
};

export const doesTitleExist = (
  songTitle: string,
  songTitles: string[]
): boolean => {
  let doesExist: boolean;
  // Asígnale a la variable doesExist un true o un false dependiendo de si
  // la variable title recibida ya existe en el array de títulos recibido

  return songTitles.includes(songTitle);
};

export const isTitleShort = (songTitle: string): boolean => {
  let isShort: boolean;
  // Asígnale a la variable isShort un true o un false dependiendo de si
  // la variable title recibida tiene menos de 3 caracteres

  return songTitle.length < 3;
};

export const isPlaylistFull = (songTitles: string[]): boolean => {
  let isFull: boolean;
  // Asígnale a la variable isFull un true o un false dependiendo de si
  // el array de títulos recibido tiene 5 o más elementos

  return songTitles.length >= 5;
};

export const addSong = (songTitle: string, songTitles: string[]): void => {
  // Añade la variable title al array de títulos recibido
  songTitles.push(songTitle);
};

export const sortSongs = (songTitles: string[]): void => {
  // Ordena alfabéticamente el array de títulos recibido
  songTitles.sort();
};

export const getSongsCount = (songTitles: string[]): number => {
  let songsCount: number;
  // Asígnale a la variable songsCount el número de elementos del array recibido

  songsCount = songTitles.length;
  return songsCount;
};

export const removeSongByPosition = (
  songTitles: string[],
  position: number
): void => {
  // Elimina del array de títulos recibido el elemento que se encuentra en la posición recibida
  songTitles.splice(position, 1);
};

export const getErrorMessage = (errorCode: string): string => {
  let errorMessage: string;

  switch (errorCode) {
    case "required":
      errorMessage = "No has introducido ningún título";
      break;
    case "exists":
      errorMessage = "La canción ya existe";
      break;
    case "too-short":
      errorMessage = "El título es demasiado corto";
      break;
    case "limit":
      errorMessage = "La playlist está llena";
      break;
    default:
      errorMessage = "Error, algo no ha ido bien";
  }

  return errorMessage;
};
