/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

pagesDisponibles=[["Accueil","base04.html","Bienvenue sur "+projet["nom"]],
	["Recherche","recherche.html","Votre recherche de BD"],
	["Commande","commande.html","Votre panier"]];

function affichePageMenu(pageactuel)
{
    resultat="<div id=\"menu\"><ul id=\"Menu\">";
    
    for  (i=0;i<3;i++)
    {
        
        if (pageactuel===pagesDisponibles[i][1])
        {
            resultat+="<li><a href=\"#\" title=\""+pagesDisponibles[i][2]+"\">"+pagesDisponibles[i][0]+"</a></li>";
        }
        else
        {
            resultat+="<li><a href=\""+pagesDisponibles[i][1]+"\" title=\""+pagesDisponibles[i][2]+"\">"+pagesDisponibles[i][0]+"</a></li>";
        };
    };
    resultat+="</ul></div>";
    document.write(resultat);
};