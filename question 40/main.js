// Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
function make_album(artist_name, album_name, number_tracks) {
    let album = {
        album_name: album_name,
        artist_name: artist_name,
        number_tracks: number_tracks,
    };
    return album;
}
console.log(make_album("Atif Aslam", "Doori"));
console.log(make_album("Arman Malik", "Jazbati Hai Dil"));
console.log(make_album("Neha Kakar", "Tukur Tukur", 10));
export {};
