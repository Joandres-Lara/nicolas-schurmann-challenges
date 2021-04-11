
const configPresetBabelEnv = {
 targets: 'current',
 useBuiltIns: 'usage'
};

module.exports = function configureBabel(api){
 api.cache(false);

 return {
  presets: [
   require('@babel/preset-env', configPresetBabelEnv),
   require('@babel/preset-react')
  ]
 }
}
