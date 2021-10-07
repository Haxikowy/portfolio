module.exports = custom;
custom.displayName = 'custom';
custom.aliases = ['custom'];
function custom(Prism) {
  Prism.languages.custom = Prism.languages.extend('javascript', {
    operator: /:|,|\.|=/g,
    property: /skills/,
  });
}
