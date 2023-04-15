import {
  Injectable,
  Inject,
  Logger,
  InternalServerErrorException,
} from '@nestjs/common';
import { CollectionReference, Timestamp } from '@google-cloud/firestore';
import { IUserDocument, UserDocument } from 'src/models/user.model';
import { SlackRequest } from 'src/models/slack.request.models';

@Injectable()
export class UserService {
  private logger: Logger = new Logger(UserService.name);

  constructor(
    @Inject(UserDocument.collectionName)
    private usersCollection: CollectionReference<UserDocument>,
  ) {}

  async create(request: SlackRequest): Promise<IUserDocument> {
    const docRef = await this.usersCollection.add(<UserDocument>{
      name: request.name,
      email: request.email,
    });

    const todoDoc = await docRef.get();
    const todo = todoDoc.data();
    return {
      id: todoDoc.id,
      name: todo.name,
      email: todo.email,
    };
  }

  async findAll(): Promise<IUserDocument[]> {
    const snapshot = await this.usersCollection.get();
    const users: IUserDocument[] = [];
    snapshot.forEach((doc) => {
      let data = doc.data();
      users.push(<IUserDocument>{
        id: doc.id,
        name: data.name,
        email: data.email,
      });
    });
    return users;
  }

  async update(request: SlackRequest) {
    const snapshot = await this.usersCollection.doc(request.id);
    return snapshot.update(<UserDocument>{
      id: request.id,
      name: request.name,
      email: request.email,
    });
  }
}
