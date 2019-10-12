
$(document).ready(function () {
    $(".diretoria-sections .diretoria-grupo").hide();
    $(".diretoria-sections .diretoria-grupo:nth-child(1)").show();
    $(".diretoria-grupoButton span:first").addClass("active");
    $(".diretoria-button").click(function () {
        $(".diretoria-button").removeClass("active");
        $(this).addClass("active");
        var indice = $(this).parent().index();
        indice++;
        $(".diretoria-sections .diretoria-grupo").hide();
        $(".diretoria-sections .diretoria-grupo:nth-child(" + indice + ")").show();
    });

});
