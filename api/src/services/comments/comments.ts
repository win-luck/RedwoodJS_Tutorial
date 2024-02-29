import type {Prisma} from '@prisma/client'

import {db} from 'src/lib/db'
import {CommentRelationResolvers, QueryResolvers} from "types/graphql";

export const comment = ({id}): QueryResolvers['comment'] => {
  return db.comment.findUnique({
    where: {id},
  })
}

export const Comment: CommentRelationResolvers = {
  post: (_obj, {root}) => {
    return db.comment.findUnique({where: {id: root?.id}}).post()
  },
}

export const comments = ({postId,}: Required<Pick<Prisma.CommentWhereInput, 'postId'>>) => {
  return db.comment.findMany({ where: { postId } })
}

interface CreateCommentArgs {
  input: Prisma.CommentCreateInput
}

export const createComment = ({input}: CreateCommentArgs) => {
  return db.comment.create({
    data: input,
  })
}

export const deleteComment = ({id}: Prisma.CommentWhereUniqueInput) => {
  return db.comment.delete({
    where: {id},
  })
}
