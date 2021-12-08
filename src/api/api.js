import axios from 'axios';
import stringFormatting from '@services/stringFormatting';

const instance = axios.create({
  method: 'get',
  baseURL: 'https://tiktok33.p.rapidapi.com/',
  headers: {
    'x-rapidapi-host': 'tiktok33.p.rapidapi.com',
    'x-rapidapi-key': 'c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66',
  },
});

const mainAPI = {
  async getPosts() {
    try {
      const { data } = await instance(`trending/feed/?limit=10`);

      return data.map((obj) => ({
        uniqueName: obj.authorMeta.name,
        nickName: obj.authorMeta.nickName,
        verified: obj.authorMeta.verified,
        avatar: obj.authorMeta.avatar,
        likesCount: obj.diggCount,
        commentsCount: obj.commentCount,
        hashtags: obj.hashtags.map((hashtag) => `#${hashtag.name}`),
        text: stringFormatting(obj.text),
        video: obj.videoUrl,
        cover: obj.covers.origin,
      }));
    } catch (error) {
      if (error.response) {
        console.error(
          `Could not fetch: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }
      console.error('Error:', error.message);
      return false;
    }
  },
  async getUserInfo(uniqueName) {
    try {
      const [info, feed] = await Promise.all([
        instance(`user/info/${uniqueName}`),
        axios.get('http://localhost:3001/itemList/?_limit=9'),
      ]);

      // Проблема с получением информации о пользователе "Info"
      if (!info || 'code' in info) {
        throw new Error('Failed to get user information');
      }

      const posts = feed.data.map((obj) => ({
        video: obj.video.playAddr,
        views: obj.stats.playCount,
      }));

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
        posts,
      };
    } catch (error) {
      if (error.response) {
        console.error(
          `Could not fetch: ${error.response.data.message}. \nStatus: ${error.response.status}`
        );
        return false;
      }
      console.error('Error:', error.message);
      return false;
    }
  },
};

export default mainAPI;
