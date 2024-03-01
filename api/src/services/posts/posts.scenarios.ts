import type {Prisma, Post} from '@prisma/client'
import type {ScenarioData} from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.PostCreateArgs>({
  post: {
    one: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            email: 'winluck1@cau.ac.kr',
            hashedPassword: 'qwdqwdwqd',
            salt: 'asdasddw',
          }
        }
      }
    },
    two: {
      data: {
        title: 'String',
        body: 'String',
        user: {
          create: {
            email: 'winluck2@cau.ac.kr',
            hashedPassword: 'qwdqwdwqd',
            salt: 'asdasddw',
          }
        }
      }
    },
  }
})

export type StandardScenario = ScenarioData<Post, 'post'>
