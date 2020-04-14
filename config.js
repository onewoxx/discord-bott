const config = {
    "ownerID": "302456716069699585", //kendi IDınızı yazınız
    "admins": ["302456716069699585"],
    "support": ["302456716069699585"],
    "token": "NTI1OTYxNzc3MzczMTE4NDY1.XpWueQ.jSsY1NFoGf37GEvoXZ0wslDtX5s", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "Xo8e3apR72YICyxMGNNFbhYebTT9Jmhx", //botunuzun secretini yazınız
      "callbackURL": `https://polarize.glitch.me/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "super-secret-session-thing", //kalsın
      "domain": "https://polarize.glitch.me/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;