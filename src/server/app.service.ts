import {
  Injectable,
  NotFoundException
} from '@nestjs/common';
import {
  from,
  of,
  toArray,
} from 'rxjs';

const mockData = [
  {
    id: 0,
    name: 'sharkeisha'
  },
  {
    id: 1,
    name: 'john'
  },
  {
    id: 2,
    name: 'tyrone'
  },
];


@Injectable()
export class AppService {
  createUser(userId, name) {
    return mockData.push({
      id: userId,
      name: name,
    })
  };
  deleteUserById(userId) {
     const user = mockData.find(({ id }) => id === userId)
     !user
       ? new NotFoundException()
       : mockData.find(({ id }) => id === userId)
  };
  getAllUsers() {
    return from(mockData).pipe(toArray());
  };
  getUserById(userId: number) {
    const user = mockData.find(({ id }) => id === userId)
    !user
      ? new NotFoundException()
      : of(user)
}}
