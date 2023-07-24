import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '../users/entities/user.entity';
import { ApiParam, ApiQuery } from '@nestjs/swagger';

export const getCurrentUserByContext = (context: ExecutionContext): User => {
  if (context.getType() === 'http') {
    return context.switchToHttp().getRequest().user;
  }
  if (context.getType() === 'rpc') {
    return context.switchToRpc().getData().user;
  }
};

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    return getCurrentUserByContext(context);
  },
  [
    (target: any, key: string) => {
      // Here it is. Use the `@ApiQuery` decorator purely as a function to define the meta only once here.
      ApiQuery({
        name: 'email',
        schema: { type: 'string' },
        required: true,
      })(target, key, Object.getOwnPropertyDescriptor(target, key));
      ApiQuery({
        name: 'password',
        schema: { type: 'string' },
        required: true,
      })(target, key, Object.getOwnPropertyDescriptor(target, key));
    },
  ],
);
