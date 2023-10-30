import { internalQuery, mutation } from "./_generated/server";
import { v } from "convex/values";

export const createInterview = mutation({
  args: {
    companyName: v.string(),
    difficultyLevel: v.union(
      v.literal("junior"),
      v.literal("middle"),
      v.literal("senior")
    ),
  },
  handler: async (ctx, args) => {
    const interviewId = await ctx.db.insert("interview", {
      companyName: args.companyName,
      difficultyLevel: args.difficultyLevel,
      isFinished: false,
      isSucessful: false,
    });

    return interviewId;
  },
});

export const findAdventure = internalQuery({
  args: {
    interviewId: v.id("interview"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.interviewId);
  },
});
