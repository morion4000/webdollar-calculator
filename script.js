function compute() {
  var global_power = parseInt($('#global_power_input').val());
  var power = parseInt($('#power_input').val());
  var block_time = 40;
  var block_reward = 6000;
  var dominance = power / global_power / 1000 * 100;
  var reward_24 = block_reward * 60 * 60 * 24 / block_time * dominance / 100;
  var block_mining_time = 100 / dominance * block_time;

  $('#power').html(numeral(power).format('0,0'));
  $('#global_power').html(numeral(global_power).format('0,0'));
  $('#dominance').html(numeral(dominance).format('0.00000'));
  $('.block_time').html(block_time);
  $('#reward_24').html(numeral(reward_24).format('0,0'));
  $('#reward_24_blocks').html(numeral(Math.floor(reward_24 / 6000)).format('0,0'));
  $('#block_mining_time_seconds').html(numeral(block_mining_time).format('0,0'));
  $('#block_mining_time_minutes').html(numeral(block_mining_time / 60).format('0,0'));
  $('#block_mining_time_hours').html(numeral(block_mining_time / 60 / 60).format('0,0'));
  $('#block_reward').html(block_reward);
}

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
  compute();

  $.getJSON('https://server.webdollarminingpool.com', function(data) {
    $('#global_power_input').val(parseInt(data.networkHashRate / 1000 / 1000));
    compute();
  });
});
