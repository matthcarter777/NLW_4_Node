import { AppError } from './../errors/AppError';
import { getCustomRepository } from 'typeorm';
import { Request, Response } from 'express';
import { SurveysUsersRepository } from '../repositories/SurveysUsersRepository';

class AnsewareController {
  async execute(request: Request, response: Response) {
    const { value } = request.params;
    const { u } = request.query;
    
    const surveysUserRepository = getCustomRepository(SurveysUsersRepository);

    const surveyUser = await surveysUserRepository.findOne({
      id: String(u)
    });

    if(!surveyUser) {
      throw new AppError("Survey User does not exists");
    }

    surveyUser.value = Number(value);

    await surveysUserRepository.save(surveyUser);

    return response.json(surveyUser);
  }
}

export default AnsewareController;