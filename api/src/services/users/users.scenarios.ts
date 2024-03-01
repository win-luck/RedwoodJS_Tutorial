import type { Prisma, User } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        email: 'String2030288',
        hashedPassword: 'qwdqwdwqd',
        salt: 'asdasddw',
      },
    },
    two: {
      data: {
        email: 'String2030289',
        hashedPassword: 'asdjlkawd',
        salt: 'asdasddw',
      }
    }
  },
})

export type StandardScenario = ScenarioData<User, 'user'>
