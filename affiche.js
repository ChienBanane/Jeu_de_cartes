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

function afficheAll()
{
	for(p in paquets)
	{
		paquets[p].afficher(ctx);
	}
}
