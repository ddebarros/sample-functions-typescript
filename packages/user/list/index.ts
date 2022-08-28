import { User } from 'common/User'
import { MainArgs, MainFnResponse } from 'common/DoFunction';

const users = [
  new User('John', 20).toJSON(),
  new User('Jane', 25).toJSON(),
  new User('Chris', 30).toJSON(),
]

export function main(args: MainArgs): MainFnResponse {
  return { 
    statusCode: 200,
    body: users
   }
}
