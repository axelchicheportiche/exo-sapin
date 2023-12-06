function sapin(nb) {
  function ajoutEtoile(tableau) {
    tableau.push("+");
    return tableau;
  }

  function retourALaLigne(tableau) {
    tableau.push("\n");
    return tableau;
  }

  function ajoutBrancheGauche(tableau) {
    tableau.push("/");
    return tableau;
  }

  function ajoutBrancheDroite(tableau) {
    tableau.push("\\");
    return tableau;
  }
  function ajoutFeuilles(tableau, nb) {

    for (let i = 0; i < nb; i++) {
      tableau.push("*");
    }
    return tableau;
  }

  function ajoutEspace(tableau, nb) {
    for (let i = 0; i < nb; i++) {
      tableau.push(" ");
    }
    return tableau;
  }
  function ajoutDiez(tableau, nb) {
    for (let i = 0; i < nb; i++) {
      tableau.push("#");
    }
    return tableau;
  }

  function sapinConstruction(nbEtage) {
    let tableau = [];
    let x = 0;
    function hautDuSapin(nbEtage) {
      ajoutEspace(tableau, nbEtage + 1);
      ajoutEtoile(tableau);
      retourALaLigne(tableau);
    }
    //ajout de branche
    function branche(nbEtage) {
      for (let i = 0; i < nbEtage + 1; i++) {
        if (i === 2 && nbEtage > 2) {
          ajoutEspace(tableau, nbEtage - i);
          ajoutBrancheGauche(tableau);
          ajoutFeuilles(tableau, i * 2 + 1);
          //console.log(tableau, i, i * 2 + 1);
          ajoutBrancheDroite(tableau);
          retourALaLigne(tableau);
        }
        if (i === 4) {
          ajoutEspace(tableau, nbEtage - i);
          ajoutBrancheGauche(tableau);
          ajoutFeuilles(tableau, i * 2 + 1);
          //console.log(tableau, i, i * 2 + 1);
          ajoutBrancheDroite(tableau);
          retourALaLigne(tableau);
        }

        ajoutEspace(tableau, nbEtage - i);
        ajoutBrancheGauche(tableau);
        ajoutFeuilles(tableau, i * 2 + 1);
        x = (i * 2 + 1);
        //console.log(x)
        //console.log(tableau, i, i * 2 + 1);
        ajoutBrancheDroite(tableau);
        retourALaLigne(tableau);

        //pied
      }
      if (nbEtage < 7) {
        ajoutEspace(tableau, (x / 2));
        ajoutDiez(tableau, 1);
      }
    //   if (nbEtage >= 4 && nbEtage < 7) {
    //     for (let i = 0; i < 2; i++) {
    //       ajoutEspace(tableau, nbEtage / 2 + 2);
    //       ajoutDiez(tableau, 2);
    //       retourALaLigne(tableau);
    //     }
    //   }
      if (nbEtage >= 7) {
        for (let i = 0; i < 3; i++) {
          ajoutEspace(tableau, (x / 2)-1);
          ajoutDiez(tableau, 2);
          retourALaLigne(tableau);
        }
      }
    }

    hautDuSapin(nbEtage);
    branche(nbEtage);

    console.log(tableau.join(""));
    // return tableau;
  }

  sapinConstruction(nb);
}

sapin(4);
sapin(5);
sapin(6);
sapin(7);
sapin(8);
sapin(9);
