//Définie un objet Carte

	/*
		Il est dur de définir une carte, ça dépend beaucoup du jeu
			Exemple : Valeur + Couleur ne définit pas les cartes de tarot (atouts)

		Idée : les règles définissent les cartes disponibles, en leur attribuant une id. Une carte est donc seulement définie par son id.
	*/
	
//Constructeur
function Carte(id, img)
{
	this.id = id;
	
	this.img = img;

	document.getElementById("image").innerHTML += "<img id=\"image" + id + "\" src=\"" + img + "\" />";
	
}


