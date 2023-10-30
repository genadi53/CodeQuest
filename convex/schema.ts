import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // player: defineTable({
  //   name: v.optional(v.string()),
  //   experience: v.number(),
  // }),
  // achievement: defineTable({
  //   achievementName: v.string(),
  //   description: v.string(),
  //   playerId: v.id("player"),
  // }),
  interview: defineTable({
    companyName: v.string(),
    difficultyLevel: v.union(
      v.literal("junior"),
      v.literal("middle"),
      v.literal("senior")
    ),
    isFinished: v.boolean(),
    isSucessful: v.boolean(),
    // playerId: v.id("player"),
  }),
  interviewRound: defineTable({
    topic: v.string(),
    timeLimit: v.optional(v.number()),
    hints: v.optional(v.number()),
    maxExperience: v.optional(v.number()),
    experience: v.number(),
    interviewId: v.id("interview"),
  }),
  challenge: defineTable({
    text: v.string(),
    responce: v.string(),
    points: v.optional(v.number()),
    maxPoints: v.optional(v.number()),
    roundId: v.id("interviewRound"),
  }),
  question: defineTable({
    text: v.string(),
    points: v.optional(v.number()),
    roundId: v.id("interviewRound"),
  }),
  answer: defineTable({
    text: v.string(),
    isRight: v.boolean(),
    questionId: v.id("question"),
  }),
});
