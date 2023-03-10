/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "576px",
            // => @media (min-width: 640px) { ... }

            md: "768px",
            // => @media (min-width: 768px) { ... }

            lg: "992px",
            // => @media (min-width: 1024px) { ... }

            xl: "1200px",
            // => @media (min-width: 1280px) { ... }

            "2xl": "1400px",
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            padding: "1rem",
        },
        extend: {
            colors: {
                primary: "#123123",
            },
            fontSize: {
                "9xl": "12rem",
            },
            extend: {
                boxShadow: {
                    xl: "0 0 4px rgba(0, 0, 0, 0.2)",
                },
            },
        },
    },
    plugins: [],
};
