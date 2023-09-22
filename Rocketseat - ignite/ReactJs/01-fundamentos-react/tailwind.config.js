export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        backgrounded: "#121214",
        textrocketseat: "#00875f",
        card: "#202024",
        comment:"#29292E"
      }
    },
  },
  plugins: [],
  corePlugins: {
    // Remove a classe `outline` do corePlugins para permitir que você personalize o estilo de focus
    outline: false,
  },
};
