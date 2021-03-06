import { Request, Response } from 'express';
import GreetingService from 'Services/GreetingService';

export default class GreetingController {
  /**
   * @param {Request} req The request object containing all of the data sent to us by the client.
   * @param {Response} res The response object used for sending data back to the client.
   */
  static greeting(req: Request, res: Response): Response {
    const name = req.query.name;
    const greetingService = new GreetingService;
    const message = greetingService.createGreeting(name);
    return res.status(200).send(message);
  }
}
