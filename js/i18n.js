// ======================= I18N =======================
window.SiteI18n = {                                         // Kleine i18n-laag zonder externe dependency.
    language: localStorage.getItem("site-language") || window.SITE_CONFIG.defaultLanguage, // Hergebruik opgeslagen taal.

    async loadNamespace(namespace) {                        // Laadt een JSON-bestand voor de huidige taal.
        const base = window.SiteUtils.getBasePath();        // Bepaalt relatief basispad.
        const response = await fetch(`${base}locales/${this.language}/${namespace}.json`); // Haalt namespace op.
        if (!response.ok) return {};                        // Geeft leeg object terug bij ontbrekende vertaling.
        return response.json();                             // Zet JSON om naar object.
    },

    async apply() {                                         // Vervangt alle data-i18n teksten op de pagina.
        const elements = [...document.querySelectorAll("[data-i18n]")]; // Verzamelt vertaalbare elementen.
        const namespaces = [...new Set(elements.map(el => el.dataset.i18n.split(":")[0]))]; // Bepaalt namespaces.
        const dictionaries = {};                           // Bewaart geladen vertalingen.

        for (const namespace of namespaces) {               // Loopt door alle benodigde namespaces.
            dictionaries[namespace] = await this.loadNamespace(namespace); // Laadt elke namespace één keer.
        }

        for (const element of elements) {                   // Loopt door alle vertaalbare elementen.
            const [namespace, key] = element.dataset.i18n.split(":"); // Splitst namespace en sleutel.
            const value = dictionaries[namespace]?.[key];   // Zoekt vertaling op.
            if (value) element.textContent = value;         // Past tekst alleen aan als vertaling bestaat.
        }
    },

    setLanguage(language) {                                 // Slaat een nieuwe taalkeuze op.
        if (!window.SITE_CONFIG.languages.includes(language)) return; // Weigert onbekende talen.
        localStorage.setItem("site-language", language);    // Bewaart keuze lokaal.
        window.location.reload();                           // Herlaadt pagina zodat alle teksten opnieuw laden.
    }
};
