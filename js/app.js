// ======================= APP INITIALIZATION =======================
document.addEventListener("DOMContentLoaded", async () => {  // Wacht tot de DOM volledig beschikbaar is.
    await window.SiteLayout.init();                         // Laadt header en footer.
    await window.SiteI18n.apply();                          // Past vertalingen toe.

    const loginForm = document.getElementById("login-form"); // Zoekt loginformulier.
    if (loginForm) {                                        // Alleen uitvoeren op loginpagina.
        loginForm.addEventListener("submit", async event => { // Onderschept standaard submit.
            event.preventDefault();                         // Voorkomt volledige paginareload.
            const email = document.getElementById("login-email").value; // Leest e-mail.
            const password = document.getElementById("login-password").value; // Leest wachtwoord.
            try { await window.SiteAuth.login(email, password); } // Roept auth-adapter aan.
            catch (error) { alert(error.message); }         // Toont configuratiefout aan gebruiker.
        });
    }

    const registerForm = document.getElementById("register-form"); // Zoekt registratieformulier.
    if (registerForm) {                                     // Alleen uitvoeren op registratiepagina.
        registerForm.addEventListener("submit", async event => { // Onderschept submit.
            event.preventDefault();                         // Voorkomt reload.
            const email = document.getElementById("login-email").value; // Leest e-mail.
            const password = document.getElementById("login-password").value; // Leest wachtwoord.
            try { await window.SiteAuth.register(email, password); } // Roept registratie-adapter aan.
            catch (error) { alert(error.message); }         // Toont configuratiefout.
        });
    }

    const resetForm = document.getElementById("forgot-password-form"); // Zoekt resetformulier.
    if (resetForm) {                                        // Alleen uitvoeren op resetpagina.
        resetForm.addEventListener("submit", async event => { // Onderschept submit.
            event.preventDefault();                         // Voorkomt reload.
            const email = document.getElementById("reset-email").value; // Leest e-mail.
            try { await window.SiteAuth.requestPasswordReset(email); } // Roept reset-adapter aan.
            catch (error) { alert(error.message); }         // Toont configuratiefout.
        });
    }
});
