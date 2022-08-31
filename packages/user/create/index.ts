
import { User } from 'common/User'
import type { MainArgs, MainFnResponse } from 'common/DoFunction';

export function main(args: MainArgs): MainFnResponse {
  if (!args.name || !args.age) {
    return {
      statusCode: 400,
      body: 'Missing name or age'
    }
  }
  
  const newUser = new User(args.name, args.age);
  newUser.printUserInfo();

  return { 
    statusCode: 200,
    body: newUser.toJSON()
   }
}
