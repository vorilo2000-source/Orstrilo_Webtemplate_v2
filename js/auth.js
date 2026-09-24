// ======================= AUTH ADAPTER =======================
window.SiteAuth = {                                         // Vervangbare auth-adapter.
    async login(email, password) {                          // Placeholder voor Appwrite-login.
        console.info("Login placeholder", { email, passwordProvided: Boolean(password) }); // Logt zonder wachtwoordinhoud.
        throw new Error("Appwrite is nog niet geconfigureerd."); // Blokkeert totdat configuratie bestaat.
    },

    async register(email, password) {                       // Placeholder voor registratie.
        console.info("Register placeholder", { email, passwordProvided: Boolean(password) }); // Logt veilige metadata.
        throw new Error("Appwrite is nog niet geconfigureerd."); // Blokkeert totdat configuratie bestaat.
    },

    async requestPasswordReset(email) {                     // Placeholder voor wachtwoordherstel.
        console.info("Password reset placeholder", { email }); // Logt alleen e-mailadres.
        throw new Error("Appwrite is nog niet geconfigureerd."); // Blokkeert totdat configuratie bestaat.
    }
};
