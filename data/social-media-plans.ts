export type SocialMediaPlan = {
  name: string;
  tagline: string;
  audience: string;
  focus: string;
  platforms: string;
  highlights: string[];
  deliverables: { title: string; description: string }[];
};

export const socialMediaPlans: SocialMediaPlan[] = [
  {
    name: "Startup Plan",
    tagline: "Build a polished, consistent social presence from day one.",
    audience: "For new businesses",
    focus: "Brand awareness and organic consistency",
    platforms: "Choice of 2 platforms",
    highlights: ["8-10 posts per month", "4-5 Reels or Shorts", "Choice of 2 platforms"],
    deliverables: [
      { title: "Post frequency", description: "8-10 posts per month, including static and carousel content." },
      { title: "Reels and video editing", description: "4-5 Reels or Shorts monthly, using stock or client-provided footage." },
      { title: "Content strategy", description: "A content calendar prepared one week in advance." },
      { title: "Captions and hashtags", description: "Creative captions and targeted hashtag research for every post." },
      { title: "Profile optimization", description: "One-time optimization of bios, profile photos and highlight covers." },
      { title: "Monthly reporting", description: "A basic report on page reach and engagement." },
      { title: "Meta campaign setup", description: "Campaign setup according to your requirements." },
    ],
  },
  {
    name: "Pilot Plan",
    tagline: "Test organic growth and paid promotion in one balanced plan.",
    audience: "For businesses testing a broader mix",
    focus: "Engagement, page growth and trial ads",
    platforms: "Up to 3 platforms",
    highlights: ["12 posts per month", "7-8 Reels or Shorts", "Up to 3 platforms"],
    deliverables: [
      { title: "Post frequency", description: "12 posts per month, including 3-4 carousel posts." },
      { title: "Reels and video editing", description: "7-8 Reels or Shorts per month, produced by our team with two shoots each month." },
      { title: "Paid ad management", description: "Ads managed to agreed requirements, including lead-generation campaign setup." },
      { title: "Story updates", description: "5 designed stories per month to keep your page active." },
      { title: "Community engagement", description: "Basic comments and DMs checked and answered twice a week." },
      { title: "Performance review", description: "A monthly report plus a 30-minute performance review call." },
    ],
  },
];
