import { User } from "./User"

export interface MainArgs {
  __ow_headers?: Record<string, any>
  __ow_path?: string
  __ow_method?: 'get' | 'post' | 'put' | 'patch' | 'option' | 'delete'
  __ow_body?: string | Record<string, any>
  __ow_query?: string
  [key: string]: any
}

export interface MainFnResponse {
  statusCode?: number;
  headers?: Record<string, any>; 
  body?: string | Record<string, any>;
}

export function main(args: MainArgs): MainFnResponse | Promise<MainFnResponse> {
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
