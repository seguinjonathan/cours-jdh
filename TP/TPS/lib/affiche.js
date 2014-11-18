/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

projet = [];
projet["nom"]="BDPhilia";
projet["auteur"]="votre nom";
projet["copy"]="&copy; 2009 votre entreprise";
function affichePageBandeauHaut()
{
    document.write("<div id=\"bandeau\">Place Holder</div>");
};

function affichePageTitre(pageactuel)
{
    resultat="<div id=\"titre\"><h1>Titre de la page</h1></div>";
    for  (i=0;i<pagesDisponibles.length;i++)
    {
        if (pageactuel===pagesDisponibles[i][1])
        {
            resultat="<div id=\"titre\"><h1>"+pagesDisponibles[i][0]+"</h1></div>";
        };
    };
    document.write(resultat);
};

function affichePagePied()
{
    document.write("<div id=\"pied\"><table><td>"+projet["nom"]+"</td><td>"+projet["auteur"]+"</td><td>"+projet["copy"]+"</td></table>");
};
