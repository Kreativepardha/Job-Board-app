import { Request, Response, NextFunction } from 'express';

export const isAdmin = (req: Request, res: Response, next: NextFunction) => {
  const isAdmin = req.headers['x-admin-token'] === 'supersecret'; // Replace with proper auth
  if (!isAdmin) {
    return res.status(403).json({ error: 'Access denied: Admins only' });
  }
  next();
};
