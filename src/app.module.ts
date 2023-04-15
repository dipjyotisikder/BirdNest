import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './controllers/app.controller';
import { SlackController } from './controllers/slack.controller';
import { AppService } from './services/app.service';
import { FirestoreModule } from './services/firestore.module';
import { UserService } from './services/user.service';

@Module({
  imports: [
    FirestoreModule.forRoot({
      imports: [],
      useFactory: () => ({
        projectId: 'prometheus-379103',
        credentials: {
          client_email:
            'firebase-adminsdk-t5kpj@prometheus-379103.iam.gserviceaccount.com',
          private_key:
            '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC4XgwfqUdPVUr9\n3rRBW9FAC3iMQwfW0odRv64U3XTmBpynruKtAY8KkYg0DSfZ/J0QjsJe7BcGLUK5\nt+C2h1NfXlfXyu8W2e7plpU3NUbxQn4e88SazzlmMYC6nt0VfWFhfsqtOgToWyHW\nPGa9kJ2xVgavOCTdV0I+0usZ9Tk6QyHiEw2ubDZUAmxXnGpoGRwB8W0v//hvCli5\n8eMd9JFqnj1qkammnM/wNnDab4Gw+Ds5Oo17hvp/6kCq7DzOtwVlXX8OzYe4sU7u\nqfLhVVaTeMaSoohOWgd0REnLuXdm1MWntYuEgOZguqApwngjQJHMk1DWTKu9OlOA\nbu8kqSMpAgMBAAECggEAAJn4OJC4c07ZP43/ct629xATehpXQcA79ZDgjE9JfzG0\nxxeZxB1ZAIvednlyfgyZ8959g6+WsQUIMG2KfX13VdinycFkr+iui47Ibz4WN1W3\n/Zl3/XfWQy8ocosWFFvsIC3Pqhn+U9CpX2v6gva7JTQ1onaB6PWjzvgWi+x6EQLR\n5/O61Zz14xUHAfsKIS97by/lQvU9CWv7/WurCasBSRZ3mU5M77NmLv3c0Qsr1rXg\nWszxbSGuwrQKE1WvzHj1SuTJ2l74KTpIHc3uWQizbw9Ta+q0gx7f2DwNW2yPiun8\n/69+CMfZUO61eXr2t8binOW6y28phTQ/WgBFolT0MQKBgQDcjSF1PxNZ/ckq154z\nsnLbmbqSD4YKZFAoJCYP/yzjuFX9VhVwCUD1tg9kj8dwol5V0dnq1U3gK1TY3D4k\npeM2fx7MJM5tSP2lCUapPuWibLr7TOZbh4gzAWgGAAO1FwDJsmp9dkNSAVuJ/FGx\nZbGbgOTI5o0l/DkPDa/QPM9TMQKBgQDWABUSqCuUmlbFqpaMOPL5zYJcNZSk8iAL\nl1+FY52dhy8stVJqN0d0lAK+pOt3SKU6upUFDwukA2lP9kmjv5Qwl/4123mdHPOb\nO4ClPHqByAnn1uB/3rTAH7dUJp6u1I9KoR66ICyFNKv7WbqQE/c7kxkgu7HOg0+k\nmhbRmKmheQKBgQDTsnvdCLBQfvNrNg/aW304IHUe4duteeAex6PpUuwJoNSZGNn2\n8kryDtDzm7a5/IBEK+vaJuhbNfx5M95KWxifJKGxHdsutxMQKLk0lvTgVTGdKZEr\nZgpruvvYVoc4eV3+PE1PJAc2Xas55YGcn5o9QxlXZUUyosk6E88gOF5g4QKBgQCP\nJv7xvA1rGtNw5uxOYMoo0JCjnjQRIubM2jXLxRdqiUPFZIX9B32FPn2Xijr5UF83\nKhkFiUsALEgGdXpNT5qR5xrmbCquLu/Gp8cmwY4xwt7dd6A16YSAALdiU3NTAF3a\nTm1/lIYzlUh2m09xkemQsJXej7AhtTVRpsIc80KGAQKBgBM6QHuiJ6mCiVJG5m0m\nfvPqs9ts7NgQpQteYTkUuBaI9tKLiEtgH++1daYjKxZWZdxWlMWUUc3yQhERlX2K\nJNa3lik4jdF/CHUdV/Aw+mbRYJWuCQKv/Y3MmJCBkr7z7gDRZFMuLNh0QV/9pJ3X\nljnCETeVX41eoqoWrv4fexll\n-----END PRIVATE KEY-----\n',
        },
      }),
      inject: [],
    }),
  ],
  controllers: [AppController, SlackController],
  providers: [AppService, UserService],
})
export class AppModule {}
