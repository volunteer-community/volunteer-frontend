// community.ts
//메인 커뮤니티 리스트
export interface Community {
  categoryId: number;
  categoryType: string;
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

//메인 커뮤니티 상세
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
  createdAt: string;
  updatedAt: string;
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
