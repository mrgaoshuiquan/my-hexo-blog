hexo.extend.filter.register('before_post_render', function(data) {
  if (!data.cover) {
    const unique = (data.slug || data.title || '') + (data.date || '') + (data.path || '');
    // 用简单的数字哈希，彻底避免碰撞
    let hash = 0;
    for (let i = 0; i < unique.length; i++) {
      hash = ((hash << 5) - hash) + unique.charCodeAt(i);
      hash |= 0;
    }
    const seed = Math.abs(hash);
    data.cover = `https://www.loliapi.com/acg?seed=${seed}`;
  }
  return data;
});