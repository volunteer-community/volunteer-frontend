// community.ts
export interface Community {
  categoryId: number;
  communityId: number;
  communityTitle: string;
  communityParticipant: number;
  communityMaxParticipant: number;
  communityAuthor: string;
  communityStatus: string;
  communityContent: string;
  communityLocation: string;
  communityMainImgPath: string;
}

export interface QueryData {
  data: {
    communityList: Community[];
  };
}

export interface CommunityImgPath {
  communityImgNum: number;
  communityImgPath: string;
}

export interface CommunityDetail {
  communityId: number;
  communityTitle: string;
  communityParticipant: number;
  communityMaxParticipant: number;
  communityAuthor: string;
  communityStatus: string;
  communityContent: string;
  communityLocation: string;
}

export interface Data {
  communityDetail: CommunityDetail;
  communityImgPathList: CommunityImgPath[];
}

export interface CommunityData {
  communityDetail: CommunityDetail;
  communityImgPathList: CommunityImgPath[];
}

export interface Response {
  status: string;
  message: string;
  data: CommunityData;
}
