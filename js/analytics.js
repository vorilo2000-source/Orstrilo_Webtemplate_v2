// ======================= ANALYTICS =======================
window.SiteAnalytics = {                                    // Optionele analyticsmodule.
    trackPage(pageName) {                                   // Registreert een pagina alleen als analytics actief is.
        if (!window.SITE_CONFIG.analyticsEnabled) return;   // Stopt direct wanneer analytics uit staat.
        console.info("Analytics placeholder:", pageName);   // Placeholder tot een echte provider is gekozen.
    }
};
