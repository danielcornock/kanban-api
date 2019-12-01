import express from 'express';
import { Router } from './collections/Router';
import { Middleware } from './config/appMiddleware';
import { DatabaseConnection } from './config/database/databaseConnection';
import passport from 'passport';
import { Strategy } from 'passport-github';

export class App {
  private _instance: express.Application;

  constructor() {
    this._instance = express();
    new DatabaseConnection();
    new Middleware(this._instance);
    new Router(this._instance);
    let scopes = ['notifications', 'user:email', 'read:org', 'repo'];
    passport.use(
      new Strategy(
        {
          clientID: process.env.GITHUB_CLIENT_ID,
          clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
          callbackURL: 'http://localhost:3000/login/github/return',
          scope: scopes.join(' ')
        },
        function(token, tokenSecret, profile, cb) {
          return cb(null, { profile: profile, token: token });
        }
      )
    );
    passport.serializeUser(function(user, done) {
      done(null, user);
    });
    passport.deserializeUser(function(obj, done) {
      done(null, obj);
    });
    this._instance.use(passport.initialize());
    this._instance.use(passport.session());
    this._instance.get('/auth/github', passport.authenticate('github'));
  }

  public get instance(): express.Application {
    return this._instance;
  }
}
