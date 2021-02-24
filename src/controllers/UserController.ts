import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { UsersRepository } from '../repositories/UsersRepository';

class UserController {

  async create(request: Request, response: Response) {
    const { name, email } = request.body;
    
    const userRepository = getCustomRepository(UsersRepository);

    const findUser = await userRepository.findOne({ email });

    if(findUser) {
      return response.status(400).json({
        error: "User already exists!"
      })
    }

    const user = userRepository.create({
      name,
      email
    })

    await userRepository.save(user);

    return response.status(201).json(user);
  }
}

export default UserController;