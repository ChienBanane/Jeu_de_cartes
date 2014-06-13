//Définie un ensemble de cartes

	/* Pas de destructeur en javascript, mais un garbage collector
		=> Pas de destruction de l'objet, mais besoin d'une classe jeu (ou plateau), pour se souvenir des ensembles
	*/

//Constructeur
function EnsembleCarte()
{
	this.cartes = [];
	this.ajouterCarte = ajouterCarte
	this.enleverCarte = enleverCarte
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
