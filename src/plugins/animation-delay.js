const plugin = require("tailwindcss/plugin");

const animationDelay = plugin(({ matchUtilities }) => {
  matchUtilities({
    "animation-delay": (value) => {
      return { animationDelay: value };
    },
  });
});

module.exports = animationDelay;
