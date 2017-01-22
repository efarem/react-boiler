module.exports = {
  plugins: [
    require('postcss-cssnext')(),
    require('postcss-normalize')(),
    require('rucksack-css')(),
    require('lost')()
  ]
}