function afficheTexte(texte, ensemble)
{
	sortie = document.getElementById('affiche');

	sortie.innerHTML += texte + ' : [';

	if(ensemble.cartes.length > 0)
	{
		sortie.innerHTML += ensemble.cartes[0].id;

		for(i = 1; i < ensemble.cartes.length; i++)
		{
			sortie.innerHTML += ' ' + ensemble.cartes[i].id;
		}
	}

	sortie.innerHTML += ']<br \/\><br \/\>';
}

function afficher(ensemble)
{
	var ctx = document.getElementById('canvas').getContext("2d");
	for(i = 0; i < ensemble.cartes.length; i++)
	{
		img = document.getElementById('image' + ensemble.cartes[i].id);
		ctx.drawImage(img, 10 + 20*i, 10, img.width/10, img.height/10);
	}
}
