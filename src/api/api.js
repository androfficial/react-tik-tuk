import axios from 'axios';
import { stringFormatting } from '@services/stringFormatting';

const instance = axios.create({
  method: 'get',
  baseURL: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  },
});

export const mainAPI = {
  async getPosts() {
    try {
      const { data } = await instance(`trending/feed`);

      return data.map((obj) => {
        return {
          uniqueName: obj.authorMeta.name,
          nickName: obj.authorMeta.nickName,
          verified: obj.authorMeta.verified,
          avatar: obj.authorMeta.avatar,
          likesCount: obj.diggCount,
          commentsCount: obj.commentCount,
          hashtags: obj.hashtags.map((obj) => `#${obj.name}`),
          text: stringFormatting(obj.text),
          video: obj.videoUrl,
        };
      });
    } catch (error) {
      console.error(`Could not fetch: ${error.message}`);
      return false;
    }
  },
  async getUserInfo(uniqueName) {
    try {
      const [info, feed] = await Promise.all([
        instance(`user/info/${uniqueName}`),
        axios.get('/itemList'),
      ]);

      const posts = feed.data.map((obj) => {
        return {
          video: obj.video.playAddr,
          views: obj.stats.playCount,
        };
      });

      return {
        followerCount: info.data.stats.followerCount,
        followingCount: info.data.stats.followingCount,
        heartCount: info.data.stats.heartCount,
        avatar: info.data.user.avatarLarger,
        nickName: info.data.user.nickname,
        description: info.data.user.signature,
        userName: info.data.user.uniqueId,
        verified: info.data.user.verified,
        bioLink: info.data.user.bioLink && info.data.user.bioLink.link, 
        posts: posts,
      };
    } catch (error) {
      console.error(`Could not fetch: ${error.message}`);
      return false;
    }
  },
};