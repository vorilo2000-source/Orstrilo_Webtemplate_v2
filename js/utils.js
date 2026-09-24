// ======================= UTILS =======================
window.SiteUtils = {                                        // Verzameling generieke hulpfuncties.
    getBasePath: function () {                              // Bepaalt of de pagina in de root of pages-map staat.
        return window.location.pathname.includes("/pages/") ? "../" : "./"; // Geeft relatief basispad terug.
    }
};
