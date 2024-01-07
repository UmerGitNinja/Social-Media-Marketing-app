interface Image {
  height: number;
  width: number;
  url: string
}

export interface ArtistData {
  external_urls: {
    spotify: string;
  };
  followers: {
    href: string | null;
    total: number;
  };
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
};

export interface TwitchHighlight {
  created_at: string; // timestamp in ISO 8601 format, e.g., "2020-10-10T02:32:57Z"
  description: string; // "19:24 run on Minecraft 1.16.1"
  duration: string; // "24m49s"
  id: string; // "765868909"
  language: string; // "en"
  muted_segments: null;
  published_at: string; // timestamp in ISO 8601 format, e.g., "2020-10-10T02:32:57Z"
  stream_id: null;
  thumbnail_url: string; // URL, e.g., "https://static-cdn.jtvnw.net/cf_vods/d2nvs31859zcd8/1062d1c6c98650354486_dreamwastaken_58435375378_2415504210//thumb/thumb765868909-%{width}x%{height}.jpg"
  title: string; // "19:24 run"
  type: string; // "highlight"
  url: string; // URL, e.g., "https://www.twitch.tv/videos/765868909"
  user_id: string; // "451544676"
  user_login: string; // "dream"
  user_name: string; // "Dream"
  view_count: number; // e.g., 982776
  viewable: string; // "public"
};

export interface TwitchStream {
  broadcaster_language: string;
  broadcaster_login: string;
  display_name: string;
  game_id: string;
  game_name: string;
  id: string;
  is_live: boolean;
  started_at: string;
  tag_ids: string[];
  tags: string[];
  thumbnail_url: string;
  title: string;
};
export interface Album {
  album_group: string;
  album_type: string;
  available_markets: string[]; 
  external_urls: { spotify: string };
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
};

type TikTokStats = {
  followingCount: number;
  followerCount: number;
  heartCount: number;
  videoCount: number;
  diggCount: number;
  // Add any other properties based on the actual structure of 'stats'
  // For example: shareCount, commentCount, etc.
};
export interface TikTokUser {
  stats: TikTokStats;
  user: {
    avatarLarger: string;
    avatarMedium: string;
    avatarThumb: string;
    commentSetting: number;
    duetSetting: number;
    ftc: boolean;
    id: string;
    isADVirtual: boolean;
    isUnderAge18: boolean;
    nickname: string;
    openFavorite: null | any;
    privateAccount: boolean;
    relation: number;
    secUid: string;
    secret: boolean;
    signature: string;
    stitchSetting: number;
    uniqueId: string;
    verified: boolean;
  };
};

type Author = {
  id: string;
  unique_id: string;
  nickname: string;
  // Add more properties as needed
};

type MusicInfo = {
  id: string;
  title: string;
  // Add more properties as needed
};

type CommerceInfo = {
  adv_promotable: boolean;
  auction_ad_invited: boolean;
  branded_content_type: number;
  // Add more properties as needed
};

export interface CreaterData{
  cursor: string;
  hasMore: boolean;
  videos:{
  anchors: null;
  anchors_extras: string;
  author: Author;
  aweme_id: string;
  collect_count: number;
  comment_count: number;
  commerce_info: CommerceInfo;
  commercial_video_info: string;
  cover: string;
  create_time: number;
  digg_count: number;
  download_count: number;
  duration: number;
  is_ad: boolean;
  is_top: number;
  music: string;
  music_info: MusicInfo;
  origin_cover: string;
  play: string;
  play_count: number;
  region: string;
  share_count: number;
  size: number;
  title: string;
  video_id: string;
  wm_size: number;
  wmplay: string;
  }[]
}

interface Badges {
  is_dm_able: boolean;
  is_secret_dm_able: boolean;
  is_blocked: boolean;
  can_media_tag: boolean;
}

interface Tokens {
  inline: boolean;
}

export interface UserData {
  id: string;
  id_str: string;
  verified: boolean;
  ext_is_blue_verified: boolean;
  badges: Badges;
  name: string;
  screen_name: string;
  profile_image_url: string;
  profile_image_url_https: string;
  location: string;
  is_protected: boolean;
  rounded_score: number;
  social_proof: number;
  connecting_user_count: number;
  connecting_user_ids: string[];
  social_proofs_ordered: string[];
  social_context: string;
  tokens: Tokens;
}

interface Entities {
  media: {
    display_url: string;
    expanded_url: string;
    id_str: string;
    media_key: string;
    media_url_https: string;
    type: string;
    url: string;
  }[];
}

interface ExtendedEntities {
  // Define properties for extended entities if needed
}

interface DisplayTextRange {
  // Define properties for display text range if needed
}

export interface TwitterData {
  content: {
    itemContent: {
      tweet_results: {
        result: {
          legacy: {
            created_at: string;
            conversation_id_str: string;
            display_text_range: DisplayTextRange; // You might want to specify the type if available
            entities: Entities;
            extended_entities: ExtendedEntities;
            favorite_count: number;
            favorited: boolean;
            full_text: string;
            is_quote_status: boolean;
            lang: string;
            possibly_sensitive: boolean;
            possibly_sensitive_editable: boolean;
            quote_count: number;
            reply_count: number;
            retweet_count: number;
            retweeted: boolean;
            user_id_str: string;
            id_str: string;
          };
        };
      };
    };
  };
}

export interface InstagramUserData {
  full_name: string;
  id: string;
  is_private: boolean;
  is_verified: boolean;
  profile_pic_url: string;
  profile_pic_url_hd: string | null;
  username: string;
}

export interface PostData {
  thumbnail_url:string;
  caption: {
    text: string
  }
}
interface Links {
  href: string,
  label: string
}

 export interface Footer {
  Cards: string[];
  Links: Links[];
}