/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        inputBackground: "#25242a",
        noti: "#FF0000",
        title: "#232D2A",
        price: "#1E7661",
        label: "#6a6967",
        divider: "#e5e7eb29",
        emerald: {
          10: "#F2F9F7",
          50: "#C9E6DF",
          100: "#C9E6DF",
          200: "#5EB5A0",
          300: "#3BA58B",
          400: "#248C73",
          500: "#1E7661",
          600: "#185F4E",
          700: "#155042",
          800: "#0F3A30",
          900: "#232D2A",
          black: "#232D2A",
        },
        coffee: {
          50: "#f7f7f7",
          100: "#e0e0e0",
          200: "#c6c5c5",
          300: "#a6a6a4",
          400: "#959493",
          500: "#71706E",
          600: "#6a6967",
          700: "#555453",
          800: "#484746",
          900: "#343332",
          brand: "#71706E",
        },
        gold: {
          50: "#faf7f2",
          100: "#EADFCA",
          200: "#d8c39b",
          300: "#b5a482",
          400: "#a29274",
          500: "#897b62",
          600: "#736853",
        },
        interface: {
          1: "#1E1E1E",
          2: "#5B5753",
          3: "#F2F2F1",
          4: "#EDEBEA",
          link: "#3F84E5",
          "link-disabled": "#ADCEFC",
          white: "#FFFEFE",
          whiteblue: "#fafafa",
          grey: "#EBEBEB",
          background: "#f1f1f1",
          mustard: "#5B5753",
          error: "#F96A6A",
          black: "#1E1E1E",
          black1: "#333333",
        },
        menu: {
          foreground: "#3E4946",
          opacity: "#3E494666",
        },
        error: {
          DEFAULT: "#F96A6A",
          background: "#FCF0ED",
          warning: "#F22B37",
        },
        alert: {
          DEFAULT: "#FB8644",
          background: "#FFEEDB",
          500: "#D86D1F",
          10: "#FFE7DD",
        },
        success: { background: "#EFF6F1" },
        warning: {
          background: "#FFF9F8",
          10: "#FFE3E3",
          500: "#F22C37",
        },
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in-bounce-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0%, 0)",
          },
          "33%": {
            opacity: 0.5,
            transform: "translate3d(0%, 0%, 0)",
          },
          "66%": {
            opacity: 0.7,
            transform: "translate3d(-20%, 0%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in-down": {
          "0%": {
            opacity: 0,
            transform: "translate3d(0, -100%, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      },
      borderRadius: {
        custom: "3px",
      },

      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-bounce-left": "fade-in-bounce-left 0.5s ease-out",
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },

      boxShadow: {
        tooltip: "0px 39px 85px 0px #232D2A26;",
        calendar: "0px 39px 85px 0px #232D2A26",
      },
      fontFamily: {
        logo: ["Switzer"],
        title: ["EB Garamond"],
      },
      aria: {
        invalid: 'invalid="true"',
      },
    },
  },
  plugins: [],
};
