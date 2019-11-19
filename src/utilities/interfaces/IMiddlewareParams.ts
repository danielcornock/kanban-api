import { Request, Response, NextFunction } from 'express';

export interface IReq extends Request {}

export interface IRes extends Response {}

export interface INext extends NextFunction {}
