// community.ts
export interface Community {
  category: {
    categoryId: number;
    categoryName: string;
  };
  communityId: number;
  communityTitle: string;
  communityContent: string;
  imagePath: string;
  communityParticipant: number;
  authorName: string;
  participantsCompleted: string;
}
