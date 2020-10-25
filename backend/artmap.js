let artwork_data = {
    "1889": "https://www.vangoghgallery.com/img/starry_night_full.jpg",
    "1503": "https://www.louvre.fr/sites/default/files/medias/medias_images/images/louvre-portrait-de-lisa-gherardini-epouse-de-francesco-del-giocondo-dite-monna-lisa-la-gioconda-ou-la-jocon.jpg",
    "1930": "https://www.artic.edu/iiif/2/d02e0079-8e82-733e-683c-cb83a387ee5e/full/843,/0/default.jpg",
    "1490": "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg",
    "1833": "https://i.imgur.com/VbEWzN0.jpg",
    "1931": "https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FE0TteNp9GKkJn6JacrilBw%2Flarger.jpg",
    "1889" : "https://www.vangoghgallery.com/in_his_steps/images/selfportrait.jpg",
    "1907" : "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Picasso.-Les-Demoiselles-dAvignon-380x395.jpg",

};

let artdata = new Map(Object.entries(art_data));

function callback(event){
  var year = document.getElementById("inputYear").value;
  alert(artdata.get(year) );
  document.getElementById("artimg").src=artdata.get(year);
  return false;
}