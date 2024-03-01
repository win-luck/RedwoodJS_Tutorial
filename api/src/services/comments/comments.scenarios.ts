import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.CommentCreateArgs>({
  comment: {
    jane: {
      data: {
        name: 'Jane Doe',
        body: 'I like trees',
        post: {
          create: {
            title: 'Redwood Leaves',
            body: 'The quick brown fox jumped over the lazy dog.',
            user: {
              create: {
                email: "jane@naver.com",
                hashedPassword: "awdiwjflwkajwwkfw",
                salt: "asdaswd"
              }
            }
          }
        }
      }
    },
    john: {
      data: {
        name: 'John Doe',
        body: 'Hug a tree today',
        post: {
          create: {
            title: 'Root Systems',
            body: 'The five boxing wizards jump quickly.',
            user: {
              create: {
                email: "john@naver.com",
                hashedPassword: "asdaw",
                salt: "awdwqfq"
              }
            }
          }
        }
      }
    }
  }
})

export const postOnly = defineScenario<Prisma.PostCreateArgs>({
  post: {
    bark: {
      data: {
        title: 'Bark',
        body: "A tree's bark is worse than its bite",
        user: {
          create: {
            email: "",
            hashedPassword: "",
            salt: ""
          }
        }
      }
    }
  }
})

export type StandardScenario = typeof standard
export type PostOnlyScenario = typeof postOnly
