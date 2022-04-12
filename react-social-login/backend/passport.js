const GoogleStrategy = require("passport-google-oauth20").Strategy;
const GithubStrategy = require("passport-github2").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const passport = require("passport");
// import FacebookLogin from 'react-facebook-login';
// require(dotenv).config();

const GOOGLE_CLIENT_ID = "978297921987-7tvkg13l7ugf7krq22hc7r5p4s8js5ne.apps.googleusercontent.com";
  
const GOOGLE_CLIENT_SECRET = "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";

// GITHUB_CLIENT_ID = "";
// GITHUB_CLIENT_SECRET = "";

FACEBOOK_APP_ID = "1131589730987079";
FACEBOOK_APP_SECRET = "d8b8747371b96f4e7ce562d23eb7986d";

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new GithubStrategy(
    {
      clientID: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET,
      callbackURL: "/auth/github/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: FACEBOOK_APP_ID,
      clientSecret: FACEBOOK_APP_SECRET,
      callbackURL: "/auth/facebook/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      done(null, profile);
    }
  )
);
  // facebookData = (<FacebookLogin
  //   appId="1131589730987079"
  //   autoLoad={true}
  //   fields="name,picture"
  //   onClick={this.componentClicked}
  //   callback={this.responseFacebook} />);


passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
