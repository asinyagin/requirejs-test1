requirejs.config({
  baseUrl: 'lib'
});

requirejs(['utils'], function(utils) {
  console.log(Web3);
  console.log(utils.sha3('cow'));
});
