//Définie un ensemble de cartes

	/* Pas de destructeur en javascript, mais un garbage collector
		=> Pas de destruction de l'objet, mais besoin d'une classe jeu (ou plateau), pour se souvenir des ensembles
	*/

//Constructeur
function EnsembleCarte(position)
{
	this.cartes = [];
	this.position = position;
	this.ajouterCarte = ajouterCarte;
	this.enleverCarte = enleverCarte;
	this.afficher = afficher;
}

//Ajouter une carte
function ajouterCarte(carte, position)
{
	this.cartes.splice(position, 0, carte);
}

//Enlever une carte
function enleverCarte(position)
{
	carte = this.cartes[position];
	this.cartes.splice(position, 1);
	return carte;
}

function afficher(context)
{
	for(i = 0; i < this.cartes.length; i++)
	{
		img = document.getElementById('image' + this.cartes[i].id);
		ctx.drawImage(img, 10 + this.position.x*i, this.position.y, img.width, img.height);
	}
}
