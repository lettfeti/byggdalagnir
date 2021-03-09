module.exports = {
  purge: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.html',
  ],
  darkMode: false,
  theme: {
    extend: {},

    fontFamily: {
      serif: ['arvo', 'serif'],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
