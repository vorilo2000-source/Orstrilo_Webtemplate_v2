// ======================= SHARED LAYOUT =======================
window.SiteLayout = {                                       // Laadt gedeelde header en footer.
    async inject(targetId, file) {                          // Injecteert één layoutbestand in een placeholder.
        const target = document.getElementById(targetId);   // Zoekt de doelcontainer.
        if (!target) return;                                // Stopt als placeholder ontbreekt.

        const base = window.SiteUtils.getBasePath();        // Bepaalt relatief basispad.
        const response = await fetch(`${base}layout/${file}`); // Haalt layoutbestand op.
        if (!response.ok) return;                           // Stopt bij laadfout.

        let html = await response.text();                   // Leest HTML als tekst.
        html = html.replaceAll("{{BASE}}", base);           // Vervangt templatebasis door correct relatief pad.
        target.innerHTML = html;                            // Plaatst layout in de pagina.
    },

    async init() {                                          // Initialiseert gedeelde layout.
        await this.inject("header-placeholder", "header.html"); // Laadt header.
        await this.inject("footer-placeholder", "footer.html"); // Laadt footer.

        document.querySelectorAll("[data-site-name]").forEach(el => { // Zoekt plekken waar sitenaam moet staan.
            el.textContent = window.SITE_CONFIG.siteName;   // Plaatst geconfigureerde sitenaam.
        });

        const languageSelect = document.getElementById("language-select"); // Zoekt taalkeuzelijst.
        if (languageSelect) {                               // Alleen uitvoeren als select aanwezig is.
            languageSelect.value = window.SiteI18n.language; // Zet huidige taal als geselecteerd.
            languageSelect.addEventListener("change", event => { // Reageert op taalwijziging.
                window.SiteI18n.setLanguage(event.target.value); // Slaat nieuwe taal op.
            });
        }
    }
};
