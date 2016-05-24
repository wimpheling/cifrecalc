$(function(){
  var calculer = function() {
    var brut = parseInt($('#brut').val()),
    brut_charge = brut * 1.4,
    frais_de_fonctionnement = brut_charge * .5,
    subvention = 14000,
    assiette_du_cir = brut_charge + frais_de_fonctionnement - subvention,
    cir = assiette_du_cir * .3,
    cout_final = brut_charge - (subvention + cir)

    $('#cout_total').text(Math.round(cout_final))
  }
  calculer()
  $('#brut').change(calculer)
});
