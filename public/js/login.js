    $(document).ready(function(){
    $("form#usrloginform").submit(function () {
    if($('#cookie').val().length>3){
      var pdata = $(this).serialize();
      var purl = $(this).attr('action');
      $.ajax({
        url:purl,
        data:pdata,
        timeout:false,
        type:'POST',
        dataType:'JSON',
        success:function(hasil){
          $("input").removeAttr("disabled", "disabled");
          $("button").removeAttr("disabled", "disabled");
          $("#btn-login-cookie").html('<i class="fa fa-sign-in"></i> Login');
          if(hasil.result){
            window.location.replace(hasil.redirect);
            $("#usrlogin").html(hasil.content);
          }else
            $("#usrlogin").html(hasil.content);
          },error: function (a, b, c) {
            $("input").removeAttr("disabled", "disabled");
            $("button").removeAttr("disabled", "disabled");
            $("#btn-login-cookie").html('<i class="fa fa-sign-in"></i> Login');
            $("#usrlogin").html(c);
          },beforeSend:function() {
            $("input").attr("disabled", "disabled");
            $("#btn-login-cookie").html('<i class="fa fa-spinner fa-spin" style="font-size:20px"></i> Loading...');
            $("#usrlogin").html('<div class="alert alert-warning alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="fa fa-spinner fa-spin" style="font-size:20px"></i> <b>Status:</b> Checking cookies, Please wait a moment...</div>');
            $("button").attr("disabled", "disabled");
          }
      });
    }
    return false
  });});


        $(document).ready(function(){
    $("form#akunloginform").submit(function () {
    if($('#username').val().length>3||$('#password').val().length>3){
      var pdata = $(this).serialize();
      var purl = $(this).attr('action');
      $.ajax({
        url:purl,
        data:pdata,
        timeout:false,
        type:'POST',
        dataType:'JSON',
        success:function(hasil){
          $("input").removeAttr("disabled", "disabled");
          $("button").removeAttr("disabled", "disabled");
          $("#btn-login-login").html('<i class="fa fa-sign-in"></i> Loging');
          if(hasil.result){
            window.location.replace(hasil.redirect);
            $("#akunlogin").html(hasil.content);
          }else
            $("#akunlogin").html(hasil.content);
          },error: function (a, b, c) {
            $("input").removeAttr("disabled", "disabled");
            $("button").removeAttr("disabled", "disabled");
            $("#btn-login-login").html('<i class="fa fa-sign-in"></i> Loging');
            $("#akunlogin").html(c);
          },beforeSend:function() {
            $("input").attr("disabled", "disabled");
            $("#btn-login-login").html('<i class="fa fa-spinner fa-spin" style="font-size:20px"></i> Loading ...');
            $("#akunlogin").html('<div class="alert alert-warning alert-dismissable"><a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a><i class="fa fa-spinner fa-spin" style="font-size:20px"></i> <b>Status:</b> Checking data, Please wait a moment ...</div>');
            $("button").attr("disabled", "disabled");
          }
      });
    }
    return false
  });});
