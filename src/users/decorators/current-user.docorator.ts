import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const CurrentUser = createParamDecorator(
  // do not give data arg when use the decorator
  (data: never, context: ExecutionContext) => {
    const request = context.switchToHttp().getRequest();

    return request.currentUser;
  },
);
