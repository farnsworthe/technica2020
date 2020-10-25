let artwork_data = {
    "1889": "https://www.vangoghgallery.com/img/starry_night_full.jpg",
    "1503": "https://www.louvre.fr/sites/default/files/medias/medias_images/images/louvre-portrait-de-lisa-gherardini-epouse-de-francesco-del-giocondo-dite-monna-lisa-la-gioconda-ou-la-jocon.jpg",
    "1930": "https://www.artic.edu/iiif/2/d02e0079-8e82-733e-683c-cb83a387ee5e/full/843,/0/default.jpg",
    "1490": "https://www.leonardodavinci.net/images/gallery/lady-with-an-ermine.jpg",
    "1833": "https://i.imgur.com/VbEWzN0.jpg",
    "1931": "https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fd32dm0rphc51dk.cloudfront.net%2FE0TteNp9GKkJn6JacrilBw%2Flarger.jpg",
    "1889" : "https://www.vangoghgallery.com/in_his_steps/images/selfportrait.jpg",
    "1907" : "https://www.moma.org/learn/moma_learning/_assets/www.moma.org/wp/moma_learning/wp-content/uploads/2012/07/Picasso.-Les-Demoiselles-dAvignon-380x395.jpg",
    "1952": "https://www.edwardhopper.net/images/paintings/morning-sun.jpg",
    "1888": " https://collectionapi.metmuseum.org/api/collection/v1/iiif/726678/1600430/main-image",
"1895": "https://images.masterart.com/MacConnalMasonGalleryMedia/Artworks/Eloise%20Harriet-Stannard-A%20basket%20of%20black%20grapes%20and%20an%20apple%20Raspberries%20and%20peaches%20on%20a%20table_T637098463940581849.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1888": "https://images.masterart.com/WilliamsandSonMedia/Artworks/Maurice-Levis-Fisherman%20on%20the%20Riverbank_T636861619595298394.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/EpoqueFineJewelsMedia/Artworks/Lucien-Gautrait-An%20Art%20Nouveau%20gold,%20enamel,%20plique-%C3%A0-jour%20enamel,%20pearl%20and%20diamond%20pendant_T636645674525949974.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1890": "https://images.masterart.com/FrenchCompanyLlcMedia/Artworks/Leon-Frederic-Aurora%20%20-%20%20%E2%80%98L%20%E2%80%98Aurore%E2%80%99_T637127984657225047.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1897": "https://images.masterart.com/StephenOngpinFineArtMedia/Artworks/William%20Fraser-GARDEN-River%20Landscape%20near%20St.%20Ives,%20Huntingdonshire_T637286175635031055.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1888": "https://images.masterart.com/AdamWilliamsFineArtLtdMedia/Artworks/%C3%89douard-Bisson-An%20Elegant%20Woman%20by%20the%20Sea_T636645674310270264.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1899": "https://images.masterart.com/WilliamsandSonMedia/Artworks/Eugene%20de-Blaas-At%20the%20Opera_T636875672073067526.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/YvesMacauxMedia/Artworks/Adolf-Loos-Hanging%20chandelier.T636545920370311709.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1899": "https://images.masterart.com/WilliamsandSonMedia/Artworks/Alfred%20Augustus-Glendening-Fairlight%20Glen%20near%20Hastings_T636861619605170126.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1883": "https://images.masterart.com/UniversduBronzeMedia/Artworks/Jean-L%C3%A9on-GEROME-CHEVAL%20PUR%20SANG%20(vers%201883).T636545972855578544.JPG?width=560&height=700&mode=max&scale=both&quality=80",
"1888": "https://images.masterart.com/KoopmanRareArtMedia/Artworks/A%20Massive%2019th%20Century%20Chinese%20Punch%20Bowl_T637302368435239452.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1880": "https://images.masterart.com/KoopmanRareArtMedia/Artworks/An%20Imposing%20Austrian%20Jardiniere%20Centrepiece_T637293722636982982.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1890": "https://images.masterart.com/KoopmanRareArtMedia/Artworks/An%20American%20Centrepiece_T637293708936627962.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1884": "https://images.masterart.com/StephenOngpinFineArtMedia/Artworks/Adolph-MENZEL-A%20Man%20Drinking_T637260072357169006.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1880": "https://images.masterart.com/KoopmanRareArtMedia/Artworks/Walter%20%20John-Barnard-A%20Victorian%20Skyphos%20Cup_T637363628829888104.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1885": "https://images.masterart.com/DavidLevyMedia/Artworks/Auguste-RODIN-Celle%20qui%20fut%20la%20Belle%20Heaulmi%C3%A8re.T636545953430189015.JPG?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/VeroniqueBampsMedia/Artworks/Cufflinks_T637287533615213655.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1881": "https://images.masterart.com/DavidLevyMedia/Artworks/Study%20for%20Les%20Cueilleurs%20de%20pommes_T636886033944850502.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/VeroniqueBampsMedia/Artworks/Earrings_T637287539560908193.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/JohnMitchellFinePaintingsMedia/Artworks/Gabriel-Lopp%C3%A9-Tour%20Eiffel%20foudroy%C3%A9e_T637188377789679624.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/MullanyMedia/Artworks/637140925550988615.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1890": "https://images.masterart.com/KoopmanRareArtMedia/Artworks/A%20Rare%20Silver,%20Enamel%20%20Lapis%20Lazuli%20Ostrich,%20Vienna%20Circa%201890_T637141747372213909.jpeg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/YvesMacauxMedia/Artworks/Julius-Orendi-Carpet.T636545919969028264.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/KoopmanRareArtMedia/Artworks/A%20French%20Silver%20Louis%20XV%20Style%20Centrepiece_T637293710648400427.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/VeroniqueBampsMedia/Artworks/Pendant_T637287792084525666.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1890": "https://images.masterart.com/VeroniqueBampsMedia/Artworks/Brooch_T637287793963714185.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1892": "https://images.masterart.com/UniversduBronzeMedia/Artworks/Antoine-Louis-BARYE-CHARLES%20VI%20EFFRAY%C3%89%20DANS%20LA%20FORET%20DU%20MANS_T637316376110858333.JPG?width=560&height=700&mode=max&scale=both&quality=80",
"1880": "https://images.masterart.com/GalerieBertranddeLavergneMedia/Artworks/Ivory%20snuff%20bottle%20sculpted%20with%209%20Fo%20Dogs%20-%2018801940%20-_T636731428705026782.JPG?width=560&height=700&mode=max&scale=both&quality=80",
"1884": "https://images.masterart.com/StephenOngpinFineArtMedia/Artworks/Aloys-Z%C3%96TL-Two%20Amazonian%20Horned%20Frogs%20(Ceratophrys%20cornuta)_T637292803060560855.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1890": "https://images.masterart.com/UniversduBronzeMedia/Artworks/Jean-TURCAN-FEMME%20NUE%20COUCH%C3%89E_T636966428411580360.JPG?width=560&height=700&mode=max&scale=both&quality=80",
"1880": "https://images.masterart.com/WilliamsandSonMedia/Artworks/Hans-Dahl-By%20the%20Water's%20Edge_T636856634697275427.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/VeroniqueBampsMedia/Artworks/Faberg%C3%A9-Pendant_T637287831070781795.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1890": "https://images.masterart.com/VeroniqueBampsMedia/Artworks/Tiffany%20%20Co-Brooch_T637287833205171600.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1893": "https://images.masterart.com/YvesMacauxMedia/Artworks/Franz-Stuck-Centaur.T636545920061652466.jpg?width=560&height=700&mode=max&scale=both&quality=80", 
"1900": "https://images.masterart.com/UniversduBronzeMedia/Artworks/Isidore-BONHEUR-JOCKEY%20A%20CHEVAL_T636976570696114769.JPG?width=560&height=700&mode=max&scale=both&quality=80",
"1900": "https://images.masterart.com/DavidLevyMedia/Artworks/Auguste-RODIN-Nu%20allong%C3%A9brVers%201900.T636545953364126720.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1897": "https://images.masterart.com/YvesMacauxMedia/Artworks/Franz-Stuck-Amazon.T636545920053641183.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1898": "https://images.masterart.com/YvesMacauxMedia/Artworks/Georges-Minne-L'agenouill%C3%A9.T636545920117252768.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1897": "https://images.masterart.com/YvesMacauxMedia/Artworks/Georges-Minne-L'Homme%20%C3%A0%20l'outre.T636545920048972471.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1893": "https://images.masterart.com/MacConnalMasonGalleryMedia/Artworks/Henriette-Ronner-Knip-Kittens_T637097623704513683.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1885": "https://images.masterart.com/MacConnalMasonGalleryMedia/Artworks/Federico%20del-Campo-Ca%E2%80%99%20d%E2%80%99Oro,%20Venice_T637097796269022778.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1917": "https://images.masterart.com/SternPissarroGalleryMedia/Artworks/Ludovic-Rodo-Pissarro-Posters%20on%20Sheen%20Road,%20London_T636947255920679271.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1957": "https://images.masterart.com/WhitfordFineArtMedia/Artworks/Paul-VAN%20HOEYDONCK-Composition.T636545954247493877.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1928": "https://images.masterart.com/JamesButterwickMedia/Artworks/Alexander-Bogomazov-%E2%80%98Portrait%20of%20the%20Artist%E2%80%99s%20Daughter,%20Yaroslava%E2%80%99%20(1928).T636545979473804796.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1905": "https://images.masterart.com/HeleneBaillyGalleryMedia/Artworks/Femme%20en%20buste%20les%20mains%20jointes,%20la%20Parisienne_T636694031319039234.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1913": "https://images.masterart.com/TrinityHousePaintingsMedia/Artworks/Sir%20Herbert%20James-Gunn-Pont%20Mirabeau,%20Paris,%201913.T636545939329408894.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1925": "https://images.masterart.com/RobertaebastadirobertatagliaviniMedia/Artworks/Stilizzazione%20FlorealeFloral%20Stylization.T636545979382464238.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1935": "https://images.masterart.com/WhitfordFineArtMedia/Artworks/Tachisme_T636655317159946816.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1928": "https://images.masterart.com/SternPissarroGalleryMedia/Artworks/Ossip-Zadkine-Le%20Village%20%C3%A0%20l'Aqueduc_T637081168512813196.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1910": "https://images.masterart.com/HeleneBaillyGalleryMedia/Artworks/Eternel%20printemps,%20Second%20%C3%A9tat,%20Premi%C3%A8re%20r%C3%A9duction%20dite%20aussi%20r%C3%A9duction%20n%C2%B01_T636694030699654054.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1992": "https://images.masterart.com/BelEtageWolfgangBauerViennaMedia/Artworks/Staudacher-Hans-UNTITLED.T636545923697562289.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1901": "https://images.masterart.com/YvesMacauxMedia/Artworks/Joseph%20Maria-Olbrich-Pair%20of%20armchairs.T636545920030445620.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1980": "https://images.masterart.com/UniversduBronzeMedia/Artworks/Niki-de%20Saint%20Phalle-TABLE,%20TABOURET%20et%20VASE%20(1978)_T637315381659633587.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1980": "https://images.masterart.com/HaroldtKintdeRoodenbekeGalleryMedia/Artworks/-_T636645666378630960.png?width=560&height=700&mode=max&scale=both&quality=80",
"1912": "https://images.masterart.com/TrinityHousePaintingsMedia/Artworks/Paul-Nash-The%20Garden%20at%20Wood%20Lane%20House,%20Iver%20Heath,%201912_T636644028887966785.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1936": "https://images.masterart.com/HeleneBaillyGalleryMedia/Artworks/Venise,%20le%20Vaporetto_T636694033838102069.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1928": "https://images.masterart.com/JamesButterwickMedia/Artworks/Alexander-Bogomazov-Study%20for%20Sawyers,%201928.T636545979469447662.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1910": "https://uploads2.wikiart.org/images/edvard-munch/the-scream-1910(1).jpg!Large.jpg",
"1911": "https://davidrdyer3.weebly.com/uploads/5/2/0/6/52066677/2714726_orig.jpg",
"1912": "https://ephemeralnewyork.files.wordpress.com/2016/06/subwayridersinnyc1914francisluismora.jpg",
"1933": "https://i.pinimg.com/originals/d3/29/1e/d3291e6313b0b755e791b5ff2fc21a1a.jpg",
"1940": "https://upload.wikimedia.org/wikipedia/commons/a/ac/A_Kentish_Lane%2C_1940_Art.IWMARTLD321.jpg",
"1931": "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/pablo-picasso-a-dream-1932-le-reve-artwork-pablo-picasso.jpg",
"1959": "https://images.masterart.com/WhitfordFineArtMedia/Artworks/William-GEAR-Black%20Vertical,%201959.T636545954349466471.jpg?width=560&height=700&mode=max&scale=both&quality=80",
"1938": "https://www.albrightknox.org/sites/default/files/styles/fixed_height_sm/public/artwork/1966_009_010_o2.jpg?itok=UoPkI2dP",
"1963": "https://www.theartstory.org/images20/works/lichtenstein_roy_2.jpg?3",
"1967": "https://m.media-amazon.com/images/I/51L+-1hA0HL._AC_SS350_.jpg",
"1918": "https://p1.liveauctioneers.com/446/82328/42690528_1_x.jpg?auto=webp&format=pjpg&version=1448123882&width=310",
"1992":"https://ego-alterego.com/wp-content/uploads/2015/03/Big-Eyes-paintings-by-Margaret-Keane1.jpg",
"1990": "https://assets.phillips.com/image/upload/t_Website_LotDetailMainImage/v1553643140/auctions/NY030119/89_001.jpg",
"1943": "https://cdn11.bigcommerce.com/s-s0bffw770m/products/12915/images/14085/2194__27450__06198__30344.1581948200.386.513.jpg?c=2",


};

let artdata = new Map(Object.entries(artwork_data));

function callback(event){
  var year = document.getElementById("inputYear").value;
  document.getElementById("artimg").src=artdata.get(year);
  return false;
}