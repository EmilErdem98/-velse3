function beregnTotalBelob() {
  const beloebInput = document.getElementById("beloeb");
  const momsInput = document.getElementById("moms");
  const resultatElement = document.getElementById("resultat");

  const beloeb = parseFloat(beloebInput.value);
  const moms = parseFloat(momsInput.value);

  if (!isNaN(beloeb) && !isNaN(moms)) {
    const totalBelob = beloeb + (beloeb * moms) / 100;
    resultatElement.textContent = `Beløb med moms (${moms}%): ${totalBelob.toFixed(
      2
    )} DKK`;
  } else {
    resultatElement.textContent = "Indtast gyldige værdier for beløb og moms.";
  }
}
